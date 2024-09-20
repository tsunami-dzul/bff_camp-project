interface ICosutomer {
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
  customer: ICosutomer;
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

interface ICustomOptions {
  option_id: string;
  option_value: string;
  extension_attributes: {
    file_info: {
      base64_encoded_data: null;
      type: string | null;
      name: string | null;
    };
  };
}

interface IExtensionAttributesItems {
  custom_options: ICustomOptions;
  bundle_options: [
    {
      option_id: number;
      option_qty: number;
      option_selections: [];
      extension_attributes: {};
    }
  ];
  downloadable_option: {
    downloadable_links: [number];
  };
  giftcard_item_option: {
    giftcard_amount: string;
    custom_giftcard_amount: number;
    giftcard_sender_name: string;
    giftcard_recipient_name: string;
    giftcard_sender_email: string;
    giftcard_recipient_email: string;
    giftcard_message: string;
    extension_attributes: {
      giftcard_created_codes: [string];
    };
  };
  configurable_item_options: [
    {
      option_id: string;
      option_value: number;
      extension_attributes: {};
    }
  ];
  grouped_options: [
    {
      id: number;
      qty: number;
      extension_attributes: {};
    }
  ];
}

interface IProductOption {
  extension_attributes: IExtensionAttributesItems;
}

export interface ICartItem {
  item_id: number;
  sku: string;
  qty: number;
  name: string;
  price: number;
  product_type: string;
  quote_id: string;
  product_option?: IProductOption;
  extension_attributes?: IExtensionAttributesItems;
}
