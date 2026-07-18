import { Metadata } from "next";
import BookDetailsClient, { mockBooks } from "./BookDetailsClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const book = mockBooks[id as keyof typeof mockBooks];

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.title,
    description: book.description,
    authors: [{ name: book.author }],
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: book.coverUrl,
          width: 800,
          height: 1200,
          alt: book.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description,
      images: [book.coverUrl],
    },
  };
}

export default async function BookDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = mockBooks[id as keyof typeof mockBooks];
  
  // JSON-LD structured data for the book
  const jsonLd = book ? {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    image: `https://havnark.com${book.coverUrl}`,
    description: book.description,
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BookDetailsClient id={id} />
    </>
  );
}
