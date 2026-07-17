// src/data/wishlistData.ts
export interface WishlistBookData {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
  price?: string;
}

export const wishlistBooks: WishlistBookData[] = [
  {
    id: "b1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    coverImage: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    price: "$30",
  },
  {
    id: "b2",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    coverImage: "https://covers.openlibrary.org/b/id/8311996-L.jpg",
    price: "$28",
  },
  {
    id: "b3",
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    coverImage: "https://covers.openlibrary.org/b/id/8175721-L.jpg",
    price: "$45",
  },
];
