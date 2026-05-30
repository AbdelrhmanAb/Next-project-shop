"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type Comment = {
    id: number;
    name: string;
    body: string;
    createdAt: string;
};

const CommentsSection = ({ postId }: { postId: number }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = () => {
        if (!name.trim() || !body.trim()) {
            toast.error("Please fill in all fields.");
            return;
        }

        const newComment: Comment = {
            id: Date.now(),
            name: name.trim(),
            body: body.trim(),
            createdAt: new Date().toLocaleString(),
        };

        setComments((prev) => [newComment, ...prev]);
        setName("");
        setBody("");
        setError("");
    };

    return (

        <section className="space-y-8">
            {/* Comments List */}
            {comments.length === 0 ? (
                <p className="text-white/30 text-sm text-center py-8">
                    No comments yet. Be the first to comment!
                </p>
            ) : (
                <div className="space-y-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-white">
                                    {comment.name}
                                </span>
                                <span className="text-xs text-white/30">{comment.createdAt}</span>
                            </div>
                            <p className="text-sm text-white/70 leading-7">{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* Section Title */}
            <h2 className="text-xl font-bold tracking-tight">
                Comments{" "}
                {comments.length > 0 && (
                    <span className="text-white/40 text-sm font-normal">
                        ({comments.length})
                    </span>
                )}
            </h2>

            {/* Comment Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                    Leave a Comment
                </h3>



                <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition"
                    />
                    <textarea
                        placeholder="Write your comment..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition resize-none"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="rounded-xl bg-white text-black px-6 py-3 text-sm font-medium hover:scale-105 transition"
                >
                    Post Comment
                </button>
            </div>


        </section>
    );
};

export default CommentsSection;