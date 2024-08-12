import { CartItem, ShippingInfo, User } from "./types";

export interface UserReducerInitialState {
    user: User | null;
    loading: boolean;
}

export interface CartReducerInitialState {
    loading: boolean;
    cartItems: CartItem[];
    subtotal: number;
    tax: number;
    shippingCharges: number;
    total: number;
    discount: number;
    shippingInfo: ShippingInfo;
};