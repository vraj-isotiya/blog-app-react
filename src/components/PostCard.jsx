import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-full hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
          {post.body}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Link
            to={`/posts/${post.id}`}
            state={{ post }}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/link"
          >
            Read More
            <svg
              className="ml-1 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
