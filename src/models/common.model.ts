export interface PriceValue {
  currencyCode?: string;
  centAmount?: number;
}

export interface Image {
  url?: string;
  label?: string;
}

export interface Price {
  id?: string;
  value?: PriceValue;
}
