export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string; // URL to image
  rating: number; // 0 - 5
  categories: string[];
  price: number; // USD
  description: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    cover: "https://picsum.photos/seed/algorithms/200/300",
    rating: 4.7,
    categories: ["Computer Science", "Algorithms"],
    price: 75,
    description: "A comprehensive textbook covering a broad range of algorithms in depth."
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://picsum.photos/seed/cleancode/200/300",
    rating: 4.5,
    categories: ["Programming", "Software Engineering"],
    price: 42,
    description: "Guidelines and best practices for writing clean, maintainable code."
  },
  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    cover: "https://picsum.photos/seed/pragmatic/200/300",
    rating: 4.6,
    categories: ["Programming", "Career"],
    price: 50,
    description: "Tips and philosophies for becoming a better software developer."
  },
  // Add more mock entries up to ~30 items for pagination demo
  {
    id: "4",
    title: "Design Patterns",
    author: "Erich Gamma",
    cover: "https://picsum.photos/seed/designpatterns/200/300",
    rating: 4.3,
    categories: ["Software Engineering", "Architecture"],
    price: 65,
    description: "Classic catalog of software design patterns."
  },
  {
    id: "5",
    title: "Deep Learning",
    author: "Ian Goodfellow",
    cover: "https://picsum.photos/seed/deeplearning/200/300",
    rating: 4.4,
    categories: ["Artificial Intelligence", "Machine Learning"],
    price: 80,
    description: "Comprehensive introduction to deep learning techniques."
  },
  // ... (additional items omitted for brevity; duplicate pattern with different seeds)
];
