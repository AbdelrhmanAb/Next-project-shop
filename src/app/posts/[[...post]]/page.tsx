export const dynamic = "force-dynamic";
import { postsList } from '@/data/posts';
import Link from 'next/link';

const ProductPage = async () => {
    const posts = await postsList();
    // console.log(posts);


    return (
        <main  className='py-20 flex flex-col gap-10 items-center'>
            <h2 className='text-6xl py-3 px-6 border-r border-b rounded-2xl shadow-sm  shadow-neutral-content'>Posts List</h2>
        <div className='grid grid-cols-1 m-auto md:grid-cols-2 lg:grid-cols-3 gap-8 p-10'>
            {posts?.slice(0, 12).map((i) => {
                return (
                    <div key={i.id} className='border rounded-2xl p-5 flex flex-col gap-5 items-center'>
                        <h3 className='text-2xl text-primary line-clamp-1'>{i.title}</h3>
                        <p className='text-xl text-secondary-content line-clamp-3'>{i.body} </p>
                        <Link href={`/posts/${i.id}`}>learn more</Link>
                    </div>
                );
            })}
        </div>
        </main>
    );
};

export default ProductPage;