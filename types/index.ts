export interface Driver {
  id?: number;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  status?: 'Inactive' | 'Active';
  complaints?: any[];
  points?: number
}

export interface Complaint {
  id?: number;
  complaint: string;
  created_at: string;
  driver_name?: string;
  order_id: string;
  order?: Order;
  delivery_worker_id?: string;
  user_id: string;
  user?: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: null | string;
  phone: string;
  cancel_count: number;
  points: number;
  blocked_until: null | string;
  status: 'Active' | 'Inactive';
}

export interface Address {
  id: number;
  x: number;
  y: number;
  address_name: string;
}

export interface Meal {
  id: number;
  name: string;
  photo: string;
  price: string;
  description: string;
  owner_resturent_id: number;
  category_id: number;
  price_after_discount: null | number;
  end_date: null | number;
  quantity: string;
  size: string;
  addons: any[];
  withouts: any[];
}

export interface Order {
  id?: number;
  status: string; // Todo: get the right status values
  order_price: string;
  delivery_cost: string;
  order_date: string;
  paid: 0 | 1;
  user_id: number;
  user: User;
  address_id: 1;
  address?: Address;
  delivery_received: 0 | 1;
  delivery_worker_id: string;
  delivery_worker: Driver;
  restaurant_name?: string;
  meals?: Meal[];
}
