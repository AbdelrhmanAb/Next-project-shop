import { getPostById } from "@/data/posts";
import CommentsSection from "@/components/posts/CommentsSection";

const Post = async ({ params }: { params: {id:string} }) => {
  const { id } = await params;
  const data = await getPostById(id);
  const post  = data.post
  return (
    <main className="min-h-screen m-4 rounded-3xl bg-black text-white flex justify-center px-4 py-16">
      <article className="w-full max-w-3xl">

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/60">
            ARTICLE #{post.id}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>5 min read</span>
            <span>•</span>
            <span>Just now</span>
          </div>
        </header>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Body */}
        <section className="space-y-6">
          <p className="md:text-lg leading-8 text-white">
            {post.body}
          </p>
        </section>

        {/* Actions */}
        <footer className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button className="rounded-xl bg-white text-black px-6 py-3 font-medium hover:scale-105 transition">
            Save Article
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">
            Go Back
          </button>
        </footer>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Comments Section */}
        <CommentsSection postId={post.id} />

      </article>
    </main>
  );
};

export default Post;