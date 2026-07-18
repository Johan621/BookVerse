export interface BookProps {
  id: string;
  title: string;
  author: string;
  department: string;
  semester: string;
  condition: "Like New" | "Good" | "Fair" | "Heavily Used";
  price: number;
  rating: number;
  isVerified: boolean;
  coverImage?: string;
}

export interface SavedBook {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: string;
  image?: string;
  department: string;
  addedAt: string; // ISO format
}

export interface WishlistBookData {
  id: string;
  title: string;
  author: string;
  department: string;
  maxPrice: number;
  condition: "Any" | "Good" | "Like New";
  notifyMe: boolean;
  addedAt: string; // ISO format
}
