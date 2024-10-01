import { Image, Price } from './common.model';

export type ProductId = string;
export type ProductVariantId = number;
export type ProductSKU = string;

export interface ProductVariant {
  id: ProductVariantId;
  sku: ProductSKU;
  name: string;
  prices: Price[];
  images: ProductImage[];
  attributes: ProductAttribute[];
  slug: string;
  availability?: ProductVariantAvailability;
}

export interface ProductVariantAvailability {
  isOnStock?: boolean;
  availableQty?: number;
}

export interface ProductImage extends Image {}

export interface ProductAttribute {
  name: string;
  value: {
    key: string;
    label: string;
  };
}

export interface Product {
  id: ProductId;
  name: string;
  description: string;
  slug: string;
  variants: ProductVariant[];
  masterVariant: ProductVariant;
}

export interface ProductsResponse {
  results: Product[];
  total: number;
  limit: number;
  offset: number;
  message?: string;
}

export interface IContentstackProductPromoImage {
  title: string;
  href: string;
}

export interface IContentstackProductPromoMetadata {
  uid: string;
}

export interface IContentstackProductPromoImages {
  promo_images: IContentstackProductPromoImage;
  _metadata: IContentstackProductPromoMetadata;
}

export interface IContentstackProductPromoSection {
  promo_images: IContentstackProductPromoImages;
}

export interface IContentstackProductSEO {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface IContentstackProductPublishDetails {
  time: string;
  user: string;
  environment: string;
  locale: string;
}

export interface IContentstackProductEntries {
  uid: string;
  _version: number;
  _in_progress: boolean;
  locale: string;
  ACL: {};
  categories: string | null;
  commercetools_id: string;
  created_at: string;
  created_by: string;
  description: string;
  featured_image: string | null;
  price: number | null;
  promo_section: IContentstackProductPromoSection[];
  seo: IContentstackProductSEO;
  tags: [];
  title: string;
  updated_at: string;
  updated_by: string;
  url: string;
  publish_details: IContentstackProductPublishDetails;
}

export interface IContentstackProduct {
  entries: IContentstackProductEntries[];
}

export interface IContentstackProductResponse {
  sku: string;
  promos: {
    text: string;
    order: number;
  }[];
}
