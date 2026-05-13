export const dynamic = "force-dynamic";
import { postsList } from '@/data/posts';
import Link from 'next/link';

const ProductPage = async () => {
    const posts = await postsList();
    console.log(posts);


    return (
        <div className='grid grid-cols-1 m-auto md:grid-cols-2 lg:grid-cols-4 gap-8 p-10'>
            {posts?.slice(0, 12).map((i) => {
                return (
                    <div key={i.userId} className='border rounded-2xl p-5 flex flex-col gap-5 items-center'>
                        <h3 className='text-2xl text-[#468432] line-clamp-1'>{i.title}</h3>
                        <p className='text-xl text-[#468432] line-clamp-3'>{i.body} </p>
                        <Link href={`/`}>learn more</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductPage;