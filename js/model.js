// Simple heuristic price model: outputs price in lakhs based on features and location multiplier
// This is a placeholder ML-like model with learned-looking weights for demo.

window.BHVA_MODEL = (() => {
  // Base city/village multipliers approximating cost of land
  const locationFactor = (state, district, placeName) => {
    const key = `${state}|${district}|${placeName}`.toLowerCase();
    if (key.includes('mumbai')) return 3.6;
    if (key.includes('navi mumbai')) return 2.4;
    if (key.includes('pune')) return 1.8;
    if (key.includes('bengaluru')) return 2.2;
    if (key.includes('yelahanka')) return 1.6;
    if (key.includes('mysuru')) return 1.4;
    // villages generally cheaper
    if (key.includes('mulshi') || key.includes('aarey') || key.includes('srirangapatna') || key.includes('devanahalli') || key.includes('hesaraghatta')) return 0.9;
    // district fallback
    if (district.toLowerCase().includes('mumbai')) return 2.8;
    if (district.toLowerCase().includes('bengaluru')) return 1.8;
    if (district.toLowerCase().includes('pune')) return 1.5;
    if (district.toLowerCase().includes('mysuru')) return 1.2;
    return 1.0;
  };

  // Model prediction
  const predictLakhs = (features) => {
    const { areaSqft, bhk, bathroom, parkingSlots, furnishingLevel, ageYears, location } = features;

    const basePerSqft = 0.008; // 800 Rs/sqft -> 0.008 lakhs/sqft baseline
    const loc = locationFactor(location.state, location.district, location.placeName);

    // feature contributions
    const areaComponent = areaSqft * basePerSqft * loc;
    const bhkComponent = bhk * 6 * loc; // lakhs per BHK
    const bathComponent = bathroom * 3 * loc;
    const parkingComponent = (parkingSlots === 0 ? 0 : parkingSlots === 1 ? 2 : 4) * loc;
    const furnishingComponent = furnishingLevel * 4 * loc; // 0/1/2 -> 0/4/8
    const depreciation = Math.max(0, 1 - Math.min(ageYears, 40) / 60); // older reduces value

    const price = (areaComponent + bhkComponent + bathComponent + parkingComponent + furnishingComponent) * depreciation;
    return Math.max(5, Math.round(price)); // min 5 lakhs, rounded
  };

  const categoryForPrice = (lakhs) => {
    if (lakhs < 50) return 'Affordable';
    if (lakhs < 150) return 'Mid Range';
    return 'Luxury';
  };

  return { predictLakhs, categoryForPrice };
})();


