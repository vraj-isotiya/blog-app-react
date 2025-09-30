import { useLocation, Link } from "react-router-dom";
import CommentForm from "./CommentForm";

export default function PostDetails() {
  const location = useLocation();
  const post = location.state?.post;
  console.log(location);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Post Not Found
          </h2>
          <p className="text-red-600 mb-6">
            The post you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Posts
          </Link>
        </div>

        {/* Post Content */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="p-8">
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.body}
              </p>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Comments
            </h2>
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
