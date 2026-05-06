import { Car, Sector, DealerInventory, Testimonial, Order } from '../types';

export const mockCars: Car[] = [
  {
    id: '1',
    name: 'Range Rover Velar',
    brand: 'Land Rover',
    price: 45000000,
    type: 'SUV',
    transmission: 'Automatic',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1563223552-30d01fda3eaa?q=80&w=1000&auto=format&fit=crop'],
    is_verified: true,
    featured: true,
    specifications: { year: 2024, fuelType: 'Petrol', engineSize: '2.0L' },
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Mercedes-Benz GLE 450',
    brand: 'Mercedes-Benz',
    price: 52000000,
    type: 'SUV',
    transmission: 'Automatic',
    condition: 'Foreign Used',
    images: ['https://images.unsplash.com/photo-1620291154346-4835f11cc565?q=80&w=1000&auto=format&fit=crop'],
    is_verified: true,
    featured: true,
    specifications: { year: 2023, mileage: 12000, fuelType: 'Hybrid' },
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Toyota Prado',
    brand: 'Toyota',
    price: 38000000,
    type: 'SUV',
    transmission: 'Automatic',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1631248035613-28825827367e?q=80&w=1000&auto=format&fit=crop'],
    is_verified: true,
    featured: false,
    specifications: { year: 2024, fuelType: 'Diesel', engineSize: '2.8L' },
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Lexus RX 350',
    brand: 'Lexus',
    price: 32000000,
    type: 'SUV',
    transmission: 'Automatic',
    condition: 'Foreign Used',
    images: ['https://images.unsplash.com/photo-1594070319944-7c0c631fb7c2?q=80&w=1000&auto=format&fit=crop'],
    is_verified: true,
    featured: false,
    specifications: { year: 2022, mileage: 25000, fuelType: 'Petrol' },
    created_at: new Date().toISOString()
  }
];

export const mockSectors: Sector[] = [
  {
    id: '1',
    name: 'Banking & Finance',
    description: 'Reliable and executive vehicles for banking operations and staff mobility.',
    recommendedTypes: ['Sedan', 'SUV']
  },
  {
    id: '2',
    name: 'SMEs',
    description: 'Cost-effective solutions for growing businesses and logistics.',
    recommendedTypes: ['Pickup', 'Van', 'Sedan']
  },
  {
    id: '3',
    name: 'Agriculture',
    description: 'Rugged off-road vehicles for farm visits and bulk movement.',
    recommendedTypes: ['Pickup', 'SUV']
  },
  {
    id: '4',
    name: 'Engineering',
    description: 'Durable utility vehicles built for construction sites and field work.',
    recommendedTypes: ['Pickup', 'Truck']
  }
];

export const mockDealerInventory: DealerInventory[] = [
  {
    id: 'd1',
    title: 'Executive SUV Bulk Deal',
    brand: 'Toyota',
    quantity: 10,
    price_range: '$400k - $500k Total',
    shipping_status: 'Available',
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop'],
    created_at: new Date().toISOString()
  },
  {
    id: 'd2',
    title: 'Premium Sedan Fleet',
    brand: 'Mercedes-Benz',
    quantity: 5,
    price_range: '$300k - $350k Total',
    shipping_status: 'In Transit',
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop'],
    created_at: new Date().toISOString()
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Adebayo Johnson',
    company: 'Zenith Tech',
    content: 'The sourcing process was exceptionally transparent. I was updated every step of the way from US auctions to delivery in Lagos.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't2',
    name: 'Chioma Okeke',
    company: 'FreshBites Ltd',
    content: 'We sourced our entire delivery fleet through Empathon. Their corporate solutions saved us over 15% compared to local showrooms.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];

export const mockOrders: Order[] = [
  {
    id: 'EA-102030',
    user_email: 'test@example.com',
    status: 'In Transit',
    timeline: [
      { status: 'Request Received', timestamp: '2024-05-01 10:00', details: 'Order initiated for Range Rover Velar' },
      { status: 'Sourcing', timestamp: '2024-05-02 14:00', details: 'Vehicle localized and inspected' },
      { status: 'Purchased', timestamp: '2024-05-03 09:00', details: 'Payment completed at auction' },
      { status: 'In Transit', timestamp: '2024-05-05 16:00', details: 'Vehicle loaded on container for Lagos' }
    ],
    created_at: '2024-05-01'
  }
];
