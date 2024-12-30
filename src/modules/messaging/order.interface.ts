// src/modules/messaging/order.interface.ts
export interface Order {
  id: string;
  customerId: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
}
