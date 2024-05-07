interface NetworkError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}
interface Author {
  _id: string;
  name: string | undefined;
}

interface Book {
  _id: string;
  title: string;
  description: string;
  genre: string;
  author: Author;
  coverImage: string;
  file: string;
  createdAt: string;
}
export type { NetworkError, Author, Book };
