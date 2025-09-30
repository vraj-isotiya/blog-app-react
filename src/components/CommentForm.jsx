import { useState } from "react";

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      body: body.trim(),
    };
    setComments((prev) => [newComment, ...prev]);
    setName("");
    setBody("");
  };

  return (
    <div>
      {/* Comment Form */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          Write a Comment
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Comment
            </label>
            <textarea
              id="comment"
              placeholder="Share your thoughts..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400 resize-none"
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim() || !body.trim()}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      {comments.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m5-3V3a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Comments ({comments.length})
            </h4>
          </div>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {comment.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">
                        {comment.name}
                      </h5>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {comment.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
