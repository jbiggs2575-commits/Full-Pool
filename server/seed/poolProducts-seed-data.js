 const poolProducts = [
  {
    "name": "Chlorine Tabs",
    "image": "../assets/pool6.jpg",
    "alt": "Chlorine tabs",
    "price": 36.01,
    "category": "Chemical",
    "description": "Tablets used for chlorinating pool",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Granular Chlorine",
    "image": "../assets/Pool1.jpeg",
    "alt": "Granular chlorine",
    "price": 21.99,
    "category": "Chemical",
    "description": "Granular chlorine used for shocking pool",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Liquid Chlorine",
    "image": "../assets/pool9.jpeg",
    "alt": "Liquid chlorine",
    "price": 19.99,
    "category": "Chemical",
    "description": "Liquid chlorine for chlorinating pool",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Ph Plus",
    "image": "../assets/poolCleaner.png",
    "alt": "Ph Plus",
    "price": 6.54,
    "category": "Chemical",
    "description": "To raise the Ph in your pool water",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Ph Minus",
    "image": "../assets/chemicals.png",
    "alt": "Ph minus",
    "price": 5.51,
    "category": "Chemical",
    "description": "To lower the Ph in your pool water",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Alkalinity Plus",
    "image": "../assets/pool8.jpeg",
    "alt": "Alkalinity plus",
    "price": 6.01,
    "category": "Chemical",
    "description": "To raise the alkalinity in your pool water",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Alkalinity Minus",
    "image": "../assets/jets1.png",
    "alt": "Alkalinity minus",
    "price": 4.97,
    "category": "Chemical",
    "description": "To lower the alkalinity in your pool water",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Algaecide",
    "image": "../assets/chemicals.png",
    "alt": "Algaecide",
    "price": 61.92,
    "category": "Chemical",
    "description": "To eliminate algae in your swimming pool",
    "type": "Chemicals",
    "qty": 0
  },
  {
    "name": "Heater",
    "image": "../assets/heater.png",
    "alt": "Heater",
    "price": 1123.99,
    "category": "Heater",
    "description": "25K BTU gas or electric heater for your swimming pool, will heat small in-ground pools or any size above ground swimming pool",
    "type": "Heater",
    "qty": 0
  },
  {
    "name": "Heater",
    "image": "../assets/heater.png",
    "alt": "Heater",
    "price": 1389.89,
    "category": "Heater",
    "description": "30K BTU gas or electric heater for your swimming pool, will heat medium size in-ground pool or any size above ground swimming pool",
    "type": "Heater",
    "qty": 0
  },
  {
    "name": "Heater",
    "image": "../assets/heater.png",
    "alt": "Heater",
    "price": 1879.99,
    "category": "Heater",
    "description": "35K BTU gas or electric heater for your swimming pool, will heat large in-ground pools or any size above ground swimming pool",
    "type": "Heater",
    "qty": 0
  },
  {
    "name": "Pool Pump 2HP",
    "image": "../assets/pump.png",
    "alt": "Swimming pool pump",
    "price": 779.99,
    "category": "Pump",
    "description": "Swimming pool pump used to circulate, filter and use of water features for your swimming pool, pond or water feature",
    "type": "Pump",
    "qty": 0
  },
  {
    "name": "Pool Pump 1.5HP",
    "image": "../assets/pump.png",
    "alt": "Swimming pool pump",
    "price": 579.99,
    "category": "Pump",
    "description": "Swimming pool pump used to circulate, filter and use of water features for your swimming pool, pond or water feature",
    "type": "Pump",
    "qty": 0
  },
  {
    "name": "Pool Pump 1HP",
    "image": "../assets/pump.png",
    "alt": "Swimming pool pump",
    "price": 379.99,
    "category": "Pump",
    "description": "Swimming pool pump used to circulate, filter and use of water features for your swimming pool, pond or water feature",
    "type": "Pump",
    "qty": 0
  },
  {
    "name": "Pool Pump 3/4HP",
    "image": "../assets/pump.png",
    "alt": "Swimming pool pump",
    "price": 279.99,
    "category": "Pump",
    "description": "Swimming pool pump used to circulate, filter and use of water features for your swimming pool, pond or water feature",
    "type": "Pump",
    "qty": 0
  },
  {
    "name": "Pool Flter Sand",
    "image": "../assets/filter.png",
    "alt": "Sand pool filter",
    "price": 879.99,
    "category": "Filter",
    "description": "Swimming pool filter used for filtering the water in your swimming pool",
    "type": "Filter",
    "qty": 0
  },
  {
    "name": "Pool Flter Cartridge",
    "image": "../assets/filter.png",
    "alt": "Cartridge pool filter",
    "price": 1079.99,
    "category": "Filter",
    "description": "Swimming pool filter used for filtering the water in your swimming pool",
    "type": "Filter",
    "qty": 0
  },
  {
    "name": "Pool Flter D.E.",
    "image": "../assets/filter.png",
    "alt": "D.E. pool filter",
    "price": 1179.99,
    "category": "Filter",
    "description": "Swimming pool filter used for filtering the water in your swimming pool",
    "type": "Filter",
    "qty": 0
  },
  {
    "name": "Spa SwimSpa",
    "image": "../assets/swimSpa.png",
    "alt": "Spa",
    "price": 18179.99,
    "category": "Spa",
    "description": "A spa that is designed to be used for swimming in place and also to be used enjoyed as a spa also.",
    "type": "Spa",
    "qty": 0
  },
  {
    "name": "Spa 5 person",
    "image": "../assets/hottub.png",
    "alt": "Spa",
    "price": 16179.99,
    "category": "Spa",
    "description": "A spa that is designed to be used for swimming in place and also to be used enjoyed as a spa also.",
    "type": "Spa",
    "qty": 0
  },
  {
    "name": "Spa 10 person",
    "image": "../assets/coupleSpa.png",
    "alt": "Spa",
    "price": 21179.99,
    "category": "Spa",
    "description": "A spa that is designed to be used for swimming in place and also to be used enjoyed as a spa also.",
    "type": "Spa",
    "qty": 0
  },
  {
    "name": "18ft Above ground swimming pool",
    "image": "../assets/pool7.jpg",
    "alt": "Above ground pool",
    "price": 6169.99,
    "category": "Pool",
    "description": "An above ground swimming pool for residential enjoyment.",
    "type": "Pool",
    "qty": 0
  },
  {
    "name": "24ft Above ground swimming pool",
    "image": "../assets/pool4.jpeg",
    "alt": "Above ground pool",
    "price": 8169.99,
    "category": "Pool",
    "description": "An above ground swimming pool for residential enjoyment.",
    "type": "Pool",
    "qty": 0
  },
  {
    "name": "33ft Above ground swimming pool",
    "image": "../assets/Pool1.jpeg",
    "alt": "Above ground pool",
    "price": 12169.99,
    "category": "Pool",
    "description": "An above ground swimming pool for residential enjoyment.",
    "type": "Pool",
    "qty": 0
  },
  {
    "name": "18 x 36 Inground pool",
    "image": "../assets/pool9.jpeg",
    "alt": "Inground pool",
    "price": 61169.99,
    "category": "Pool",
    "description": "An inground swimming pool for residential enjoyment.",
    "type": "Pool",
    "qty": 0
  },
  {
    "name": "20 x 40 Inground pool",
    "image": "../assets/infinityPool.jpg",
    "alt": "Inground pool",
    "price": 71169.99,
    "category": "Pool",
    "description": "An inground swimming pool for residential enjoyment.",
    "type": "Pool",
    "qty": 0
  },
  {
    "name": "Cleaner",
    "image": "../assets/poolCleaner.png",
    "alt": "Cleaner",
    "price": 1234.99,
    "category": "Equipment",
    "description": "Automated cleaner for your swimming pool.",
    "type": "Equipment",
    "qty": 0
  }
]

module.exports = poolProducts