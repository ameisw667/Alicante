export interface Activity {
  time?: string;
  title: string;
  description: string;
  location?: string;
  mapLink?: string;
  image?: string;
}

export interface TripDay {
  date: string;
  label: string;
  focus: string;
  activities: Activity[];
}

export const tripData: TripDay[] = [
  {
    date: '2026-05-01',
    label: 'Tag 1',
    focus: 'Anreise & Calpe',
    activities: [
      {
        time: '13:10',
        title: 'Ankunft Alicante',
        description: 'Flieger landet. Mietwagen abholen bei Victoria Cars.',
        location: 'Flughafen Alicante',
        mapLink: 'https://www.google.com/maps/search/Victoria+Cars+Alicante+Airport',
        image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: '14:30',
        title: 'Fahrt nach Calpe',
        description: 'Ca. 1 Stunde Fahrt. Check-in in der Wohnung Apartamentos Santa Clara.',
        location: 'Apartamentos Santa Clara, Calpe',
        mapLink: 'https://www.google.com/maps/place/Apartamentos+Santa+Clara+Calpe',
        image: '/alicante_sunset_background.png'
      },
      {
        time: '17:00',
        title: 'Einkaufen & Strolling',
        description: 'Lokale Einkäufe für die kommenden Tage. Erste kulinarische Eindrücke sammeln.',
        location: 'Calpe',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    date: '2026-05-02',
    label: 'Tag 2',
    focus: 'Kultur-Fokus Alicante',
    activities: [
      {
        time: 'Vormittag',
        title: 'Castillo de Santa Bárbara',
        description: 'Besichtigung der Burg. Perfekte Aussicht!',
        location: 'Alicante',
        mapLink: 'https://www.google.com/maps/place/Castillo+de+Santa+B%C3%A1rbara',
        image: 'https://images.unsplash.com/photo-1570535310232-a549d4f95886?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Mittag',
        title: 'Canelobre Caves',
        description: 'Besichtigung der beeindruckenden Tropfsteinhöhlen.',
        location: 'Busot',
        mapLink: 'https://www.google.com/maps/place/Canelobre+Caves',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Nachmittag',
        title: 'Barrio Santa Cruz',
        description: 'Spaziergang durch die Altstadt und Explanada de España.',
        location: 'Alicante',
        mapLink: 'https://www.google.com/maps/place/Barrio+Santa+Cruz',
        image: '/alicante_barrio.png'
      },
      {
        time: 'Abend',
        title: 'Benidorm Nightlife',
        description: 'Tapas-Tour oder Restaurantbesuch in Benidorm. Llevant Beach.',
        location: 'Benidorm',
        mapLink: 'https://www.google.com/maps/place/Playa+de+Levante',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    date: '2026-05-03',
    label: 'Tag 3',
    focus: 'Sport & Calpe',
    activities: [
      {
        time: 'Vormittag',
        title: 'Padel-Tennis',
        description: 'Die neue Sportart ausprobieren. Platz im Voraus reservieren!',
        location: 'Calpe',
        image: 'https://images.unsplash.com/photo-1626224580173-909772a81816?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Mittag',
        title: 'Beach & Jetski',
        description: 'Wasseraktivitäten an der Playa de la Fossa.',
        location: 'Playa de la Fossa',
        mapLink: 'https://www.google.com/maps/place/Playa+de+la+Fossa',
        image: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Nachmittag',
        title: 'Peñón de Ifach',
        description: 'Wanderung auf den Felsen mit Picknick und toller Aussicht.',
        location: 'Calpe',
        mapLink: 'https://www.google.com/maps/place/Penyal+d\'Ifac',
        image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Abend',
        title: 'Algar Waterfalls',
        description: 'Optionaler Besuch der Fonts d\'Algar.',
        location: 'Callosa d\'en Sarrià',
        mapLink: 'https://www.google.com/maps/place/Fonts+de+l\'Algar',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    date: '2026-05-04',
    label: 'Tag 4',
    focus: 'Tagesausflug & Altea',
    activities: [
      {
        time: 'Vormittag',
        title: 'Altea Altstadt',
        description: 'Malerische weiße Häuser und Kirche Nuestra Señora del Consuelo.',
        location: 'Altea',
        mapLink: 'https://www.google.com/maps/place/Casco+Antiguo+de+Altea',
        image: '/altea_church.png'
      },
      {
        time: 'Nachmittag',
        title: 'Entspannung & Shopping',
        description: 'Letztes Strolling around und Souvenirs.',
        location: 'Calpe / Altea',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: 'Abend',
        title: 'Kulinarisches Projekt',
        description: 'Typische spanische Gerichte gemeinsam kochen (Paella / Arroz a banda).',
        location: 'Wohnung',
        image: 'https://images.unsplash.com/photo-1534080564607-6e77ef33a46a?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    date: '2026-05-05',
    label: 'Tag 5',
    focus: 'Abreise',
    activities: [
      {
        time: '08:00',
        title: 'Check-out',
        description: 'Fahrt zum Flughafen Alicante.',
        location: 'Calpe',
        image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=400'
      },
      {
        time: '10:00',
        title: 'Abflug',
        description: 'Rückflug ab Alicante.',
        location: 'Flughafen Alicante',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=400'
      }
    ]
  }
];

export const packingList = [
  { id: 1, item: 'Music Box', category: 'Gadgets' },
  { id: 2, item: 'Passport & Driving License', category: 'Docs' },
  { id: 3, item: 'Sunglasses', category: 'Style' },
  { id: 4, item: 'Sunscreen', category: 'Health' },
  { id: 5, item: 'Mobile Phone Holder', category: 'Gadgets' },
  { id: 6, item: 'iPad', category: 'Gadgets' },
  { id: 7, item: 'Bauchtasche (Jan)', category: 'Style' }
];

export const logistics = {
  flights: {
    outbound: {
      number: 'EW1234',
      from: 'DUS',
      to: 'ALC',
      arrival: '13:10',
      date: '01.05.2026'
    },
    inbound: {
      number: 'EW1235',
      from: 'ALC',
      to: 'DUS',
      departure: '10:00',
      date: '05.05.2026'
    }
  },
  carRental: {
    provider: 'Victoria Cars',
    pickup: 'Alicante Airport',
    date: '01.05.2026',
    return: '05.05.2026 08:00'
  },
  accommodation: {
    name: 'Apartamentos Santa Clara',
    location: 'Calpe',
    type: 'Gemietete Wohnung'
  }
};

export const inspiration = {
  tips: [
    { title: 'Beste Tapas', content: 'Besucht die "Calle de las Setas" in Alicante für die besten Tapas in pilz-artiger Umgebung.' },
    { title: 'Geheimstrand', content: 'Cala el Racó in Calpe ist perfekt zum Schnorcheln direkt unter dem Peñón de Ifach.' },
    { title: 'Sonnenuntergang', content: 'Der "Balcón del Mediterráneo" in Benidorm bietet den spektakulärsten Blick am Abend.' },
    { title: 'Lokaler Wein', content: 'Probiert unbedingt den Wein aus der Region Jalon (Vall de Pop), nur 20 Min von Calpe entfernt.' },
    { title: 'MARQ Museum', content: 'Modernes archäologisches Museum in Alicante – ideal für Geschichtsinteressierte.' },
    { title: 'Les Paelles de Calp', content: 'Alte römische Ausgrabungsstätte direkt am Meer in Calpe.' },
    { title: 'Sierra Helada', content: 'Beeindruckende Steilküstenwanderungen zwischen Benidorm und Altea.' },
    { title: 'Mercado Central', content: 'Besucht den zentralen Markt in Alicante am Vormittag für frische lokale Produkte.' }
  ],
  gallery: [
    { url: '/alicante_sunset_background.png', caption: 'Sunset over Peñón de Ifach' },
    { url: '/alicante_barrio.png', caption: 'Barrio Santa Cruz, Alicante' },
    { url: '/altea_church.png', caption: 'Blue Dome of Altea' },
    { url: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&q=80&w=600', caption: 'Benidorm Skyline' },
    { url: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=600', caption: 'Costa Blanca Coastline' }
  ]
};

export const expenseCategories = ['Food', 'Transport', 'Activities', 'Shopping', 'Other'];
