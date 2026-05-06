export type CarCondition = 'Brand New' | 'Foreign Used' | 'Locally Used';
export type Transmission = 'Automatic' | 'Manual';
export type ShippingStatus = 'In Transit' | 'Available' | 'Ready for Dispatch';
export type OrderStatus = 'Request Received' | 'Sourcing' | 'Purchased' | 'In Transit' | 'Arrived' | 'Ready';

export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  type: string;
  transmission: Transmission;
  condition: CarCondition;
  images: string[];
  is_verified: boolean;
  featured?: boolean;
  specifications: {
    year: number;
    mileage?: number;
    fuelType?: string;
    engineSize?: string;
  };
  created_at: string;
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  recommendedTypes: string[];
}

export interface DealerInventory {
  id: string;
  title: string;
  brand: string;
  quantity: number;
  price_range: string;
  shipping_status: ShippingStatus;
  images: string[];
  created_at: string;
}

export interface PreOrder {
  id: string;
  user_details: {
    name: string;
    email: string;
    phone: string;
  };
  preferences: {
    brand: string;
    model: string;
    budget_range: string;
    year_range: string;
    additional_notes: string;
  };
  status: 'Pending' | 'Contacted' | 'Fulfilled';
  created_at: string;
}

export interface Order {
  id: string;
  user_email: string;
  car_id?: string;
  status: OrderStatus;
  timeline: {
    status: OrderStatus;
    timestamp: string;
    details: string;
  }[];
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  content: string;
  image: string;
  rating: number;
}
