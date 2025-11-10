(() => {
  // auth check
  const userRaw = localStorage.getItem('bhva_user');
  if (!userRaw) {
    window.location.href = 'index.html';
    return;
  }
  const user = JSON.parse(userRaw);
  const greeting = document.getElementById('greeting');
  if (greeting) greeting.textContent = `Hi, ${user.username}`;
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => { localStorage.removeItem('bhva_user'); window.location.href = 'index.html'; });

  const stateEl = document.getElementById('state');
  const districtEl = document.getElementById('district');
  const cityEl = document.getElementById('city');
  const villageEl = document.getElementById('village');

  // prepare data (load full listing if available)
  let data = window.BHVA_DATA.states;
  (async () => {
    if (window.BHVA_DATA.load) {
      const loaded = await window.BHVA_DATA.load();
      if (loaded && loaded.states) {
        data = loaded.states;
        const states = Object.keys(data).sort().map((name) => ({ name }));
        fillSelect(stateEl, states, 'Select state');
      }
    }
  })();

  const fillSelect = (el, items, placeholder) => {
    el.innerHTML = '';
    const opt0 = document.createElement('option');
    opt0.value = '';
    opt0.textContent = placeholder;
    el.appendChild(opt0);
    items.forEach((it) => {
      const opt = document.createElement('option');
      opt.value = it.name || it; opt.textContent = it.name || it;
      el.appendChild(opt);
    });
  };

  // populate states
  const states = Object.keys(data).sort().map((name) => ({ name }));
  fillSelect(stateEl, states, 'Select state');

  let map, mapMarker;
  const mapEl = document.getElementById('map');
  const ensureMap = (center) => {
    const c = center || { lat: 22.9734, lon: 78.6569 };
    if (!map) {
      map = L.map(mapEl).setView([c.lat, c.lon], 7);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
      }).addTo(map);
      mapMarker = L.marker([c.lat, c.lon]).addTo(map);
    } else {
      map.setView([c.lat, c.lon], 9);
      mapMarker.setLatLng([c.lat, c.lon]);
    }
  };

  const selectedLocationEl = document.getElementById('selectedLocation');
  const regionImg = document.getElementById('regionImage');

  const updateRegionImage = (query) => {
    if (!query) { regionImg.hidden = true; return; }
    const q = `${query} residential house street India`;
    const url = `https://source.unsplash.com/featured/600x360/?${encodeURIComponent(q)}`;
    regionImg.src = url;
    regionImg.hidden = false;
    regionImg.onerror = () => {
      // fallback image (generic Indian house)
      regionImg.onerror = null;
      regionImg.src = 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80&auto=format&fit=crop';
      regionImg.hidden = false;
    };
  };

  stateEl.addEventListener('change', () => {
    const stName = stateEl.value;
    if (!stName) { fillSelect(districtEl, [], 'Select district'); fillSelect(cityEl, [], 'Mandal'); fillSelect(villageEl, [], 'Village'); return; }
    const st = data[stName];
    const districts = Object.keys(st.districts).map((name) => ({ name }));
    fillSelect(districtEl, districts, 'Select district');
    fillSelect(cityEl, [], 'Mandal');
    fillSelect(villageEl, [], 'Village');
    ensureMap(st.center);
    selectedLocationEl.textContent = `${stName}`;
    updateRegionImage(st.image);
  });

  districtEl.addEventListener('change', async () => {
    const stName = stateEl.value; if (!stName) return;
    const distName = districtEl.value; if (!distName) { fillSelect(cityEl, [], 'Mandal'); fillSelect(villageEl, [], 'Village'); return; }
    const dist = data[stName].districts[distName];
    // Populate mandals from the data structure
    const mandals = dist.mandals ? Object.keys(dist.mandals).map((name) => ({ name })) : [];
    fillSelect(cityEl, mandals, 'Select mandal');
    fillSelect(villageEl, [], 'Village');
    ensureMap(dist.center);
    selectedLocationEl.textContent = `${stName} • ${distName}`;
    updateRegionImage(dist.image);
  });

  const setPlace = (place, type) => {
    if (!place) return;
    ensureMap({ lat: place.lat, lon: place.lon });
    selectedLocationEl.textContent = `${stateEl.value} • ${districtEl.value} • ${place.name} (${type})`;
    updateRegionImage(place.image || place.name);
  };

  cityEl.addEventListener('change', () => {
    const stName = stateEl.value; const distName = districtEl.value; if (!stName || !distName) return;
    const dist = data[stName].districts[distName];
    const mandalName = cityEl.value;
    if (!mandalName) { fillSelect(villageEl, [], 'Village'); return; }
    const mandal = dist.mandals && dist.mandals[mandalName];
    if (mandal && mandal.villages) {
      const villages = mandal.villages.map((v) => ({ name: v.name }));
      fillSelect(villageEl, villages, 'Select village');
    } else {
      fillSelect(villageEl, [], 'Village');
    }
    selectedLocationEl.textContent = `${stName} • ${distName} • ${mandalName}`;
  });

  villageEl.addEventListener('change', () => {
    const stName = stateEl.value; const distName = districtEl.value; const mandalName = cityEl.value;
    if (!stName || !distName || !mandalName) return;
    const dist = data[stName].districts[distName];
    const mandal = dist.mandals && dist.mandals[mandalName];
    if (mandal && mandal.villages) {
      const place = mandal.villages.find((v) => v.name === villageEl.value);
      setPlace(place, 'Village');
    }
  });

  // Prediction
  const priceValueEl = document.getElementById('priceValue');
  const priceCategoryEl = document.getElementById('priceCategory');
  const predictBtn = document.getElementById('predictBtn');

  const readNumber = (id) => Number(/** @type {HTMLInputElement} */(document.getElementById(id)).value) || 0;

  predictBtn.addEventListener('click', () => {
    const stName = stateEl.value; const distName = districtEl.value;
    const mandalName = cityEl.value; const villageName = villageEl.value;
    if (!stName || !distName || !mandalName || !villageName) {
      alert('Please select State, District, Mandal and Village');
      return;
    }
    const areaSqft = readNumber('area');
    const bhk = readNumber('bhk');
    const bathroom = readNumber('bathroom');
    const parkingSlots = readNumber('parking');
    const furnishingLevel = readNumber('furnishing');
    const ageYears = readNumber('age');

    const placeName = villageName;
    const lakhs = window.BHVA_MODEL.predictLakhs({
      areaSqft, bhk, bathroom, parkingSlots, furnishingLevel, ageYears,
      location: { state: stName, district: distName, placeName }
    });
    const cat = window.BHVA_MODEL.categoryForPrice(lakhs);
    priceValueEl.textContent = `${lakhs} Lakh`;
    priceCategoryEl.textContent = cat;
  });

  // init map default
  ensureMap();
})();


