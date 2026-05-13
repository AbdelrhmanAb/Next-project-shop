import Image from "next/image"

import heroPic from '../../../public/images/product-2.jpg'

import {postsList} from '@/data/posts'

// pages/index.js
 const  HomePage =  async()=> {

    const posts = await postsList()
    console.log(posts);
    

  return (
    <main className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-12">
          {/* Image placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-125 h-87.5  rounded-3xl border border-accent shadow-lg flex items-center justify-center">
        <Image
         src={heroPic}
          alt="hero image"
           fill
           className="object-cover "
           />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-6xl font-extrabold text-primary mb-6">
              Welcome to Alpha
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              Elevate your shopping experience with Alpha. Premium products,
              modern designs, and unmatched quality — all curated to fit your
              lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-accent btn-lg">Shop Now</button>
              <button className="btn btn-outline btn-primary btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-base-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Featured Products</h2>
          <p className="mt-4 text-lg">Handpicked items just for you</p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 px-8">
          {posts.slice(0,6).map((item) => (
            <div key={item.id} className="card bg-base-300 border-r border-b shadow-xl">
              <figure className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <Image
         src={heroPic}
          alt="hero image"
           fill
           className="object-cover "
           />
              </figure>
              <div className="card-body">
                <h3 className="card-title line-clamp-1 ">{item.title}</h3>
                <p className="line-clamp-2 text-primary">{item.body} </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent m-auto mt-4">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">About Alpha</h2>
          <p className="text-lg leading-relaxed">
            At Alpha, we believe shopping should be more than just a transaction.
            Our mission is to deliver products that inspire confidence and
            elevate everyday life. With a focus on quality and innovation, Alpha
            is your trusted partner in style and convenience.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">What Our Customers Say</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 px-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-200 shadow-lg p-6">
              <p className="italic mb-4">
                Alpha products exceeded my expectations. The quality is
                outstanding and the shopping experience was seamless.
              </p>
              <h4 className="font-bold text-accent">Customer {item}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage