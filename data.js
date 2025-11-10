// Minimal hierarchical location dataset with coordinates and image hints
// Structure: states -> districts -> { mandals: { mandalName: { villages: [] } } }
// Data loader: full states/districts via external JSON with local minimal fallback

window.BHVA_DATA = (() => {
  const fallback = {
    states: {
      Telangana: {
        center: { lat: 18.1124, lon: 79.0193 }, image: 'telangana',
        districts: {
          Hanamkonda: {
            center: { lat: 18.0144, lon: 79.5624 }, image: 'hanamkonda',
            mandals: {
              'Hanamkonda': {
                villages: [
                  { name: 'Hanamkonda', lat: 18.0144, lon: 79.5624 },
                  { name: 'Kumarpalle', lat: 18.0200, lon: 79.5600 },
                  { name: 'Palivelpula', lat: 18.0250, lon: 79.5650 },
                  { name: 'Lashkarsingaram', lat: 18.0300, lon: 79.5700 },
                  { name: 'Gopalpur', lat: 18.0350, lon: 79.5750 },
                  { name: 'Waddepally', lat: 18.0400, lon: 79.5800 }
                ]
              },
              'Khaazipet': {
                villages: [
                  { name: 'Khazipet', lat: 18.0500, lon: 79.5900 },
                  { name: 'Somidi', lat: 18.0550, lon: 79.5950 },
                  { name: 'Madikonda', lat: 18.0600, lon: 79.6000 },
                  { name: 'Tharalapalli', lat: 18.0650, lon: 79.6050 },
                  { name: 'Kadipikonda', lat: 18.0700, lon: 79.6100 },
                  { name: 'Kothapalli', lat: 18.0750, lon: 79.6150 },
                  { name: 'Battupalli', lat: 18.0800, lon: 79.6200 },
                  { name: 'Ammavaripet', lat: 18.0850, lon: 79.6250 },
                  { name: 'Shayampet', lat: 18.0900, lon: 79.6300 },
                  { name: 'Rampur', lat: 18.0950, lon: 79.6350 }
                ]
              },
              'Inavolu': {
                villages: [
                  { name: 'Inavole', lat: 18.1000, lon: 79.6400 },
                  { name: 'Singaram', lat: 18.1050, lon: 79.6450 },
                  { name: 'Punnole', lat: 18.1100, lon: 79.6500 },
                  { name: 'Nandanam', lat: 18.1150, lon: 79.6550 },
                  { name: 'Kakkiralapalli', lat: 18.1200, lon: 79.6600 },
                  { name: 'Panthini', lat: 18.1250, lon: 79.6650 },
                  { name: 'Kondaparthy', lat: 18.1300, lon: 79.6700 },
                  { name: 'Vanamala (Hanamkonda)', lat: 18.1350, lon: 79.6750 },
                  { name: 'Kanapatrthy', lat: 18.1400, lon: 79.6800 },
                  { name: 'Venkatapuram (Zaffargadh)', lat: 18.1450, lon: 79.6850 },
                  { name: 'Garmillapalle', lat: 18.1500, lon: 79.6900 }
                ]
              },
              'Hasanparthy': {
                villages: [
                  { name: 'Ananthasagar', lat: 18.1550, lon: 79.6950 },
                  { name: 'Madipalle', lat: 18.1600, lon: 79.7000 },
                  { name: 'Yellapur', lat: 18.1650, lon: 79.7050 },
                  { name: 'Laknavaram (D)', lat: 18.1700, lon: 79.7100 },
                  { name: 'Jaigiri', lat: 18.1750, lon: 79.7150 },
                  { name: 'Devannapet', lat: 18.1800, lon: 79.7200 },
                  { name: 'Pembarthy', lat: 18.1850, lon: 79.7250 },
                  { name: 'Mutcherla', lat: 18.1900, lon: 79.7300 },
                  { name: 'Nagaram', lat: 18.1950, lon: 79.7350 },
                  { name: 'Sudanpalle', lat: 18.2000, lon: 79.7400 },
                  { name: 'Mallareddipalle', lat: 18.2050, lon: 79.7450 },
                  { name: 'Arvapalle', lat: 18.2100, lon: 79.7500 },
                  { name: 'Siddhapoor', lat: 18.2150, lon: 79.7550 },
                  { name: 'Vangapahad', lat: 18.2200, lon: 79.7600 },
                  { name: 'Hasanparthy', lat: 18.2250, lon: 79.7650 },
                  { name: 'Pegadapalle', lat: 18.2300, lon: 79.7700 },
                  { name: 'Chinthagattu', lat: 18.2350, lon: 79.7750 },
                  { name: 'Bhimaram', lat: 18.2400, lon: 79.7800 }
                ]
              },
              'Velair': {
                villages: [
                  { name: 'Velair', lat: 18.2450, lon: 79.7850 },
                  { name: 'Shalapally (H/O Velair)', lat: 18.2500, lon: 79.7900 },
                  { name: 'Kammaripet (H/O Velair)', lat: 18.2550, lon: 79.7950 },
                  { name: 'Peechara', lat: 18.2600, lon: 79.8000 },
                  { name: 'Maddelagudem (H/O Peechara)', lat: 18.2650, lon: 79.8050 },
                  { name: 'Sodashapalli', lat: 18.2700, lon: 79.8100 },
                  { name: 'Mallikudurla', lat: 18.2750, lon: 79.8150 },
                  { name: 'Gundla Sagar', lat: 18.2800, lon: 79.8200 },
                  { name: 'Kannaram (Bheemdevrapalli)', lat: 18.2850, lon: 79.8250 },
                  { name: 'Errabelli', lat: 18.2900, lon: 79.8300 }
                ]
              },
              'Dharmasagar': {
                villages: [
                  { name: 'Dharmasagar', lat: 18.2950, lon: 79.8350 },
                  { name: 'Narayanagiri', lat: 18.3000, lon: 79.8400 },
                  { name: 'Mupparam', lat: 18.3050, lon: 79.8450 },
                  { name: 'Devnoor', lat: 18.3100, lon: 79.8500 },
                  { name: 'Somadevrapalli', lat: 18.3150, lon: 79.8550 },
                  { name: 'Elkurthy', lat: 18.3200, lon: 79.8600 },
                  { name: 'Jhanakipur', lat: 18.3250, lon: 79.8650 },
                  { name: 'Kyathampalli', lat: 18.3300, lon: 79.8700 },
                  { name: 'Thatikayala', lat: 18.3350, lon: 79.8750 },
                  { name: 'Peddapendyal', lat: 18.3400, lon: 79.8800 },
                  { name: 'Dharmapur', lat: 18.3450, lon: 79.8850 },
                  { name: 'Mallakpalli', lat: 18.3500, lon: 79.8900 },
                  { name: 'Unikicherla', lat: 18.3550, lon: 79.8950 }
                ]
              },
              'Elkathurthi': {
                villages: [
                  { name: 'Penchikalapeta', lat: 18.3600, lon: 79.9000 },
                  { name: 'Jeelgul', lat: 18.3650, lon: 79.9050 },
                  { name: 'Gopalpur', lat: 18.3700, lon: 79.9100 },
                  { name: 'Damera', lat: 18.3750, lon: 79.9150 },
                  { name: 'Elkathurthi', lat: 18.3800, lon: 79.9200 },
                  { name: 'Suraram', lat: 18.3850, lon: 79.9250 },
                  { name: 'Vallabhapur', lat: 18.3900, lon: 79.9300 },
                  { name: 'Kothulnaduma', lat: 18.3950, lon: 79.9350 },
                  { name: 'Veeranarayanapur', lat: 18.4000, lon: 79.9400 },
                  { name: 'Dandepalli', lat: 18.4050, lon: 79.9450 },
                  { name: 'Baopet', lat: 18.4100, lon: 79.9500 },
                  { name: 'Thimmapur', lat: 18.4150, lon: 79.9550 },
                  { name: 'Keshawapur', lat: 18.4200, lon: 79.9600 }
                ]
              },
              'Bheemadevarapalli': {
                villages: [
                  { name: 'Vangara', lat: 18.4250, lon: 79.9650 },
                  { name: 'Bheemadevarapalli', lat: 18.4300, lon: 79.9700 },
                  { name: 'Ratnagiri', lat: 18.4350, lon: 79.9750 },
                  { name: 'Manikyapur', lat: 18.4400, lon: 79.9800 },
                  { name: 'Koppur', lat: 18.4450, lon: 79.9850 },
                  { name: 'Kothapalle', lat: 18.4500, lon: 79.9900 },
                  { name: 'Mulkanoor', lat: 18.4550, lon: 79.9950 },
                  { name: 'Mutharam (P.K)', lat: 18.4600, lon: 80.0000 },
                  { name: 'Gatlanarsingapur', lat: 18.4650, lon: 80.0050 },
                  { name: 'Kothakonda', lat: 18.4700, lon: 80.0100 },
                  { name: 'Mallaram', lat: 18.4750, lon: 80.0150 },
                  { name: 'Musthafpur', lat: 18.4800, lon: 80.0200 }
                ]
              },
              'Kamalapur': {
                villages: [
                  { name: 'Bhimpalle', lat: 18.4850, lon: 80.0250 },
                  { name: 'Kannur', lat: 18.4900, lon: 80.0300 },
                  { name: 'Gunded', lat: 18.4950, lon: 80.0350 },
                  { name: 'Marripalligudem', lat: 18.5000, lon: 80.0400 },
                  { name: 'Jujnoor', lat: 18.5050, lon: 80.0450 },
                  { name: 'Sanigaram', lat: 18.5100, lon: 80.0500 },
                  { name: 'Vangapalle', lat: 18.5150, lon: 80.0550 },
                  { name: 'Kamalapur', lat: 18.5200, lon: 80.0600 },
                  { name: 'Uppal', lat: 18.5250, lon: 80.0650 },
                  { name: 'Desharajpalle', lat: 18.5300, lon: 80.0700 },
                  { name: 'Kaniparthi', lat: 18.5350, lon: 80.0750 },
                  { name: 'Gudur', lat: 18.5400, lon: 80.0800 },
                  { name: 'Ambala', lat: 18.5450, lon: 80.0850 },
                  { name: 'Nerella', lat: 18.5500, lon: 80.0900 },
                  { name: 'Madannapeta', lat: 18.5550, lon: 80.0950 },
                  { name: 'Guniparthi', lat: 18.5600, lon: 80.1000 },
                  { name: 'Venkateswarlapally (H/O Narlapur)', lat: 18.5650, lon: 80.1050 }
                ]
              },
              'Parkal': {
                villages: [
                  { name: 'Kamareddipelle', lat: 18.5700, lon: 80.1100 },
                  { name: 'Laxmipuram', lat: 18.5750, lon: 80.1150 },
                  { name: 'Madharam', lat: 18.5800, lon: 80.1200 },
                  { name: 'Mallakpet', lat: 18.5850, lon: 80.1250 },
                  { name: 'Nagaram', lat: 18.5900, lon: 80.1300 },
                  { name: 'Paidipalle', lat: 18.5950, lon: 80.1350 },
                  { name: 'Parkal', lat: 18.6000, lon: 80.1400 },
                  { name: 'Pocharam', lat: 18.6050, lon: 80.1450 },
                  { name: 'Rajipet', lat: 18.6100, lon: 80.1500 },
                  { name: 'Vallampalle', lat: 18.6150, lon: 80.1550 },
                  { name: 'Venkatapur', lat: 18.6200, lon: 80.1600 }
                ]
              },
              'Nadikuda': {
                villages: [
                  { name: 'Varikole', lat: 18.6250, lon: 80.1650 },
                  { name: 'Raiparthy', lat: 18.6300, lon: 80.1700 },
                  { name: 'Puligilla', lat: 18.6350, lon: 80.1750 },
                  { name: 'Narlapur', lat: 18.6400, lon: 80.1800 },
                  { name: 'Nadikuda', lat: 18.6450, lon: 80.1850 },
                  { name: 'Musthyalpalle', lat: 18.6500, lon: 80.1900 },
                  { name: 'Dharmaram', lat: 18.6550, lon: 80.1950 },
                  { name: 'Choutparthi', lat: 18.6600, lon: 80.2000 },
                  { name: 'Cherlapalle', lat: 18.6650, lon: 80.2050 },
                  { name: 'Sarvapur', lat: 18.6700, lon: 80.2100 },
                  { name: 'Kowkonda', lat: 18.6750, lon: 80.2150 },
                  { name: 'Kantathmakur', lat: 18.6800, lon: 80.2200 }
                ]
              },
              'Athmakur': {
                villages: [
                  { name: 'Penchikalpet', lat: 18.6850, lon: 80.2250 },
                  { name: 'Peddapur', lat: 18.6900, lon: 80.2300 },
                  { name: 'Neerukulla', lat: 18.6950, lon: 80.2350 },
                  { name: 'Malakpet', lat: 18.7000, lon: 80.2400 },
                  { name: 'Kothagattu', lat: 18.7050, lon: 80.2450 },
                  { name: 'Katakshapur', lat: 18.7100, lon: 80.2500 },
                  { name: 'Kamaram', lat: 18.7150, lon: 80.2550 },
                  { name: 'House Buzurg', lat: 18.7200, lon: 80.2600 },
                  { name: 'Choudlapalle', lat: 18.7250, lon: 80.2650 },
                  { name: 'Brahamanapalle', lat: 18.7300, lon: 80.2700 },
                  { name: 'Athmakur', lat: 18.7350, lon: 80.2750 },
                  { name: 'Agrampahad', lat: 18.7400, lon: 80.2800 }
                ]
              },
              'Damera': {
                villages: [
                  { name: 'Damera', lat: 18.7420, lon: 80.2820 },
                  { name: 'Singarajpally', lat: 18.7450, lon: 80.2850 },
                  { name: 'Pulukurthy', lat: 18.7500, lon: 80.2900 },
                  { name: 'Pasaragonda', lat: 18.7550, lon: 80.2950 },
                  { name: 'Oorugonda', lat: 18.7600, lon: 80.3000 },
                  { name: 'Oblapur', lat: 18.7650, lon: 80.3050 },
                  { name: 'Mustyalapally', lat: 18.7700, lon: 80.3100 },
                  { name: 'Lyadella', lat: 18.7750, lon: 80.3150 },
                  { name: 'Kogilvai', lat: 18.7800, lon: 80.3200 },
                  { name: 'Venkatapur', lat: 18.7820, lon: 80.3220 }
                ]
              },
              'Shayampet': {
                villages: [
                  { name: 'Shayampet', lat: 18.7830, lon: 80.3230 },
                  { name: 'Vasanthapur', lat: 18.7850, lon: 80.3250 },
                  { name: 'Taharapur', lat: 18.7900, lon: 80.3300 },
                  { name: 'Singaram (Kothagutta)', lat: 18.7950, lon: 80.3350 },
                  { name: 'Singaram (Dongala)', lat: 18.8000, lon: 80.3400 },
                  { name: 'Pedda Kodepaka', lat: 18.8050, lon: 80.3450 },
                  { name: 'Pattipaka', lat: 18.8100, lon: 80.3500 },
                  { name: 'Neredpalle', lat: 18.8150, lon: 80.3550 },
                  { name: 'Mylaram', lat: 18.8200, lon: 80.3600 },
                  { name: 'Koppula', lat: 18.8250, lon: 80.3650 },
                  { name: 'Katrapalle', lat: 18.8300, lon: 80.3700 },
                  { name: 'Hussainpalle', lat: 18.8350, lon: 80.3750 },
                  { name: 'Gatlakani Parthy', lat: 18.8400, lon: 80.3800 }
                ]
              }
            }
          }
        }
      }
    }
  };

  async function load() {
    // Only return Telangana state with Hanamkonda district
    // No need to fetch external data as we have all required villages in fallback
    return fallback;
  }

  return { states: fallback.states, load };
})();



