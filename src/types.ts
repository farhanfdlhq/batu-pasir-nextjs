
export enum Category {
  TANAH = "Tanah",
  PASIR = "Pasir",
  BATU = "Batu",
  BATA = "Bata",
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  unit: string;
  stock: number;
  image: string;
  gallery: string[];
  specifications: {
    [key: string]: string;
  };
}

export interface EstimatedMaterial {
  materialName: string;
  quantity: string;
  unit: string;
  notes: string;
}
