import { Property } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'villa-solaria',
    name: 'Villa Solaria',
    tagline: 'Sculptural concrete, Mediterranean light, and horizon vistas',
    category: 'Villas',
    location: 'Cannes, French Riviera',
    country: 'France',
    price: 14500000,
    formattedPrice: '$14,500,000',
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 8400,
    yearBuilt: 2024,
    description:
      'Perched quietly above the azure bay of Cannes, Villa Solaria is a triumph of contemporary organic brutalism tempered with warm limestone and olive grove courtyards. Designed by Pritzker-laureate inspired architects, this estate seamlessly dissolves the boundaries between indoor tranquility and the sweeping Mediterranean horizon.',
    architecturalNotes:
      'Cantilevered raw concrete slabs with fair-faced cedar board shuttering, floor-to-ceiling Schuco slimline triple-glazing, and hand-chiseled Roman travertine terraces with infinity overflow channels.',
    primaryImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'Cantilevered Infinity Pool',
      'Subterranean 12-Car Gallery',
      'Temperature-Controlled Wine Vault',
      'Private Wellness Spa & Sauna',
      'Geothermal Heating & Cooling',
      'Staff Quarters with Private Entry',
    ],
    isFeatured: true,
  },
  {
    id: 'the-atrium-penthouse',
    name: 'The Atrium Penthouse',
    tagline: 'Duplex sky residence with private botanical rooftop sanctuary',
    category: 'Apartments',
    location: 'Mayfair, London',
    country: 'United Kingdom',
    price: 9200000,
    formattedPrice: '$9,200,000',
    bedrooms: 4,
    bathrooms: 4.5,
    areaSqFt: 5100,
    yearBuilt: 2023,
    description:
      'Occupying the crown of an intimate heritage facade in Mayfair, The Atrium Penthouse redefines modern metropolitan elegance. Featuring an 8-meter double-height living salon, bespoke brushed bronze accents, and a private glass elevator opening directly onto a wraparound landscaped garden terrace.',
    architecturalNotes:
      'Curved fluted plaster walls, continuous European smoked oak herringbone flooring, solid Calacatta Viola marble kitchen monolith, and full-aperture motorized sky lanterns.',
    primaryImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'Direct Private Elevator',
      '360° Skyline Garden Terrace',
      '24/7 White-Glove Concierge',
      'Bespoke Italian Kitchen by Poliform',
      'Acoustically Isolated Cinema Suite',
      'Subterranean Automated Stacker Parking',
    ],
  },
  {
    id: 'casa-de-la-luz',
    name: 'Casa de la Luz',
    tagline: 'Organic minimalism carved into coastal cliffs and pine forests',
    category: 'Houses',
    location: 'Ibiza, Balearic Islands',
    country: 'Spain',
    price: 7800000,
    formattedPrice: '$7,800,000',
    bedrooms: 5,
    bathrooms: 5,
    areaSqFt: 6200,
    yearBuilt: 2024,
    description:
      'A serene meditation on light, shadow, and organic curves. Casa de la Luz utilizes traditional whitewashed lime plaster and hand-hewn sabina timber beams to create an oasis that feels at once ancient and profoundly ahead of its time. Sunset views over Es Vedrà bathe every evening in amber.',
    architecturalNotes:
      'Soft radiused interior transitions, polished microcement floors that remain cool under summer warmth, and dry-stacked native limestone retaining walls.',
    primaryImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'Sunset Viewing Pavilion',
      'Heated Saltwater Infinity Pool',
      'Outdoor Dining Pergola with Woodfire Oven',
      'Permaculture Herb & Olive Garden',
      'Independent Guest Casita',
      'Smart Lutron Lighting System',
    ],
  },
  {
    id: 'kyoto-residence',
    name: 'The Sukiya Pavilion',
    tagline: 'Modern Japanese minimalism meets cedar forest tranquility',
    category: 'Houses',
    location: 'Higashiyama, Kyoto',
    country: 'Japan',
    price: 6400000,
    formattedPrice: '$6,400,000',
    bedrooms: 3,
    bathrooms: 3.5,
    areaSqFt: 3900,
    yearBuilt: 2023,
    description:
      'Nestled on a wooded slope in historic Higashiyama, The Sukiya Pavilion marries centuries-old Japanese woodworking joinery with contemporary low-energy passivhaus performance. An internal moss rock garden provides contemplative beauty from every room through sliding shoji screens.',
    architecturalNotes:
      'Charred yakisugi cedar cladding, hand-planed Yoshino cypress interiors, tatami study room, and a blackened basalt stone soaking onsen tub looking out to weeping cherry blossoms.',
    primaryImage:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'Internal Zen Moss Courtyard',
      'Private Hinoki & Basalt Onsen',
      'Traditional Tea Ceremony Room',
      'Hidden Radiant Floor Heating',
      'Integrated Audio & Ambient Acoustics',
      'Handcrafted Paper Washi Screens',
    ],
  },
  {
    id: 'the-monolith-villa',
    name: 'The Monolith Villa',
    tagline: 'Geometric limestone cantilever perched above Lake Como',
    category: 'Villas',
    location: 'Bellagio, Lake Como',
    country: 'Italy',
    price: 18200000,
    formattedPrice: '$18,200,000',
    bedrooms: 7,
    bathrooms: 8,
    areaSqFt: 9800,
    yearBuilt: 2024,
    description:
      'A masterwork of modernist proportion overlooking Lake Como. Monolith Villa appears to float above the water, its vast glass walls offering an uninterrupted visual dialogue with the surrounding Alpine peaks and lakeside villas.',
    architecturalNotes:
      'Locally quarried Moltrasio stone facade, bronze-finished structural framework, double-cantilevered living deck, and a glass-enclosed boathouse with Riva boat slip.',
    primaryImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'Private Deepwater Boat Slip',
      'Suspended Glass Infinity Pool',
      'Helipad Access',
      'Wine Tasting Room & Cellar',
      'Subterranean Fitness Center',
      'Smart Climate & Shading Management',
    ],
  },
  {
    id: 'arcadia-headquarters',
    name: 'Arcadia Design Studio & Pavilion',
    tagline: 'Architectural creative workspace and gallery pavilion',
    category: 'Commercial',
    location: 'Zurich',
    country: 'Switzerland',
    price: 11500000,
    formattedPrice: '$11,500,000',
    bedrooms: 0,
    bathrooms: 4,
    areaSqFt: 7200,
    yearBuilt: 2023,
    description:
      'An inspiring commercial flagship space suited for a high-end architectural firm, private family office, or contemporary art foundation. Set within lush gardens with glass curtain walls, soaring ceilings, and sustainable timber roof beams.',
    architecturalNotes:
      'Mass timber glulam trusses, solar-integrated facade, exposed polished terrazzo floors, and flexible acoustic partitioning.',
    primaryImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    circularAccentImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: [
      'LEED Platinum Certified Architecture',
      'Exhibition Gallery Space',
      'Private Boardroom with Integrated AV',
      'Underground EV Charging Stations',
      'Landscaped Courtyard with Reflecting Pool',
      'High-Speed Dedicated Fiber Infrastructure',
    ],
  },
];
