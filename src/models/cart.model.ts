interface ICostutomer {
  email: string | null;
  firstname: string | null;
  lastname: string | null;
}

interface IBillingAddress {
  id: number;
  region: string | null;
  region_id: string | null;
  region_code: string | null;
  country_id: string | null;
  street: [''];
  telephone: string | null;
  postcode: string | null;
  city: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  same_as_billing: number;
  save_in_address_book: number;
}

interface ICurrency {
  global_currency_code: string;
  base_currency_code: string;
  store_currency_code: string;
  quote_currency_code: string;
  store_to_base_rate: number;
  store_to_quote_rate: number;
  base_to_global_rate: number;
  base_to_quote_rate: number;
}

interface IExtensionAttributes {
  shipping_assignments: [];
}

export interface ICart {
  cartId: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_virtual: boolean;
  items: [];
  items_count: number;
  items_qty: number;
  customer: ICostutomer;
  billing_address: IBillingAddress;
  orig_order_id: number;
  currency: ICurrency;
  customer_is_guest: boolean;
  customer_note_notify: boolean;
  customer_tax_class_id: number;
  store_id: number;
  extension_attributes: IExtensionAttributes;
  message?: string;
}

interface IItem {
  item_id?: number;
  sku?: string;
  qty?: number;
}

export interface ICartItem {
  cartItem: IItem;
}

export interface IAddressInformationPayload {
  country: string;
  firstName: string;
  lastName: string;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  region: string;
  email: string;
}

export interface IAddressInformation {
  shipping_address: IShippingAddress;
  billing_address: IShippingAddress;
  shipping_method_code: string;
  shipping_carrier_code: string;
}

export interface IShippingAddress {
  country_id: string;
  firstname: string;
  lastname: string;
  postcode: string;
  city: string;
  region: string;
  street: string[];
  email: string;
  telephone?: string;
}

export interface IShippingPayload {
  addressInformation: IAddressInformation;
}

export const CartItemActions = {
  AddLineItem: 'AddLineItem',
  ChangeLineItemQuantity: 'ChangeLineItemQuantity',
  RemoveLineItem: 'RemoveLineItem',
  SetShippingAddress: 'SetShippingAddress',
};

export const CommerceCartItemActions = {
  AddLineItem: 'addLineItem',
  ChangeLineItemQuantity: 'changeLineItemQuantity',
  RemoveLineItem: 'removeLineItem',
  SetShippingAddress: 'setShippingAddress',
};

export interface ICommerceActionAddLineItem {
  action: string;
  productId?: { 'product-id': string };
  variantId?: { variantId: number };
  lineItemId?: { lineItemId: string };
  quantity?: number;
}

export interface ICommerceCarts {
  version: { 'cart-version': string };
  actions: ICommerceActionAddLineItem[];
}
