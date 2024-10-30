import React from "react";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center p-6 max-w-md mx-auto">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="12em"
          width="12em"
          className="mx-auto mb-2"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
        </svg>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className=" btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
