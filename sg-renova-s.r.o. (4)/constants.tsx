
import React from 'react';
import { 
  Home, 
  Layers, 
  Droplets, 
  Hammer, 
  Zap, 
  Thermometer, 
  Wifi, 
  Bath, 
  UserCheck 
} from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'full-reno',
    title: 'Celkové rekonstrukce',
    description: 'Kompletní proměna vašeho bytu či domu od podlahy až po strop.',
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 'floors',
    title: 'Výměna podlah',
    description: 'Pokládka plovoucích podlah, vinylu i masivního dřeva s precizností.',
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: 'bathrooms',
    title: 'Rekonstrukce koupelen',
    description: 'Moderní design a funkčnost v srdci vašeho domova.',
    icon: <Bath className="w-8 h-8" />
  },
  {
    id: 'masonry',
    title: 'Zednické práce',
    description: 'Hrubé i jemné zednické práce, omítky a sádrokartony.',
    icon: <Hammer className="w-8 h-8" />
  },
  {
    id: 'electricity',
    title: 'Elektroinstalace',
    description: 'Kompletní rozvody, revize a modernizace elektroinstalace.',
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 'hvac',
    title: 'Voda, topení, plyn',
    description: 'Instalatérské práce a efektivní systémy vytápění.',
    icon: <Thermometer className="w-8 h-8" />
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    description: 'Inteligentní domácnost pro váš komfort a bezpečí.',
    icon: <Wifi className="w-8 h-8" />
  },
  {
    id: 'consulting',
    title: 'Odborné poradenství',
    description: 'Pomůžeme vám s projektem i výběrem materiálů.',
    icon: <UserCheck className="w-8 h-8" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Moderní Loft na Vinohradech',
    category: 'Celková rekonstrukce',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Kompletní přeměna starého bytu na moderní průmyslový loft s důrazem na světlo a prostor.'
  },
  {
    id: '2',
    title: 'Designová koupelna Dejvice',
    category: 'Rekonstrukce koupelny',
    mainImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620626011761-9963d7b5970a?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Luxusní koupelna s volně stojící vanou a italskou keramikou.'
  },
  {
    id: '3',
    title: 'Smart Home vila Průhonice',
    category: 'Inteligentní domácnost',
    mainImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507652313519-d4511f7ca4ad?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Implementace plně automatizovaného systému řízení osvětlení, vytápění a bezpečnosti.'
  },
  {
    id: '4',
    title: 'Rekonstrukce statku u Lyonu',
    category: 'Mezinárodní projekt',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Exkluzivní spolupráce Šimona Grůzy na obnově historického objektu ve Francii.'
  }
];
