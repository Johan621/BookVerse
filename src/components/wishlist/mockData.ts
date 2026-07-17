// src/components/wishlist/mockData.ts
export interface SavedBook {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  condition: string;
}

export const MOCK_WISHLIST: SavedBook[] = [
  {
    id: "w1",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    condition: "New",
  },
  {
    id: "w2",
    title: "Introduction to the Theory of Computation",
    author: "Michael Sipser",
    coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    condition: "Like New",
  },
  {
    id: "w3",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma et al.",
    coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    condition: "Good",
  },
];
