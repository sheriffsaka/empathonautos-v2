import { supabase } from '../lib/supabase';
import { mockCars, mockSectors, mockDealerInventory, mockTestimonials, mockOrders } from '../lib/mockData';
import { Car, Sector, DealerInventory, Testimonial, Order, PreOrder } from '../types';

export const carService = {
  async getCars(): Promise<Car[]> {
    if (supabase) {
      const { data, error } = await supabase.from('cars').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    }
    return mockCars;
  },

  async getFeaturedCars(): Promise<Car[]> {
    if (supabase) {
      const { data, error } = await supabase.from('cars').select('*').eq('featured', true).limit(4);
      if (error) throw error;
      return data;
    }
    return mockCars.filter(c => c.featured);
  },

  async getSectors(): Promise<Sector[]> {
    if (supabase) {
      const { data, error } = await supabase.from('sectors').select('*');
      if (error) throw error;
      return data;
    }
    return mockSectors;
  },

  async getDealerInventory(): Promise<DealerInventory[]> {
    if (supabase) {
      const { data, error } = await supabase.from('dealer_inventory').select('*');
      if (error) throw error;
      return data;
    }
    return mockDealerInventory;
  },

  async getTestimonials(): Promise<Testimonial[]> {
    if (supabase) {
      const { data, error } = await supabase.from('testimonials').select('*');
      if (error) throw error;
      return data;
    }
    return mockTestimonials;
  },

  async getOrderByID(orderId: string): Promise<Order | null> {
    if (supabase) {
      const { data, error } = await supabase.from('orders').select('*').eq('id', orderId).single();
      if (error) return null;
      return data;
    }
    return mockOrders.find(o => o.id === orderId) || null;
  },

  async submitPreOrder(preOrder: Omit<PreOrder, 'id' | 'created_at' | 'status'>): Promise<boolean> {
    if (supabase) {
      const { error } = await supabase.from('pre_orders').insert([preOrder]);
      if (error) throw error;
      return true;
    }
    console.log('Pre-order submitted (mock):', preOrder);
    return true;
  }
};
