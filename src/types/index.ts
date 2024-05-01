interface NetworkError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export type { NetworkError };
