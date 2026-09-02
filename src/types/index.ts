export interface Product {
  id: string;
  name: string;
  category: "washer" | "dryer" | "other";
  brand: string;
  image: string;
  price: number;
  /** Original price before discount. When set and higher than `price`, the product shows a Sale badge. */
  originalPrice?: number;
  isBestSeller?: boolean;
  specs: string[];
  description: string;
}

export interface BusinessPackage {
  id: string;
  name: string;
  price: number;
  image: string;
  includes: string[];
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  photo: string;
  quote: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Brand {
  name: string;
}
