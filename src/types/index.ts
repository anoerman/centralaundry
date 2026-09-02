export interface Product {
  id: string;
  name: string;
  category: "washer" | "dryer" | "other";
  brand: string;
  image: string;
  price: number;
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
