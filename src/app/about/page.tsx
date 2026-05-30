
import heroPic from '../../../public/images/product-2.jpg'
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-base-100 py-12 w-full">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-secondary via-accent to-black text-white overflow-hidden">
        
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-8">

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <div className="relative w-full lg:w-125 lg:h-[350px] h-60 rounded-3xl overflow-hidden shadow-lg">
              
              <Image
                src={heroPic}
                alt="hero image"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">

            <h1 className="text-3xl lg:text-6xl font-extrabold mb-6">
              About Alpha
            </h1>

            <p className="text-lg leading-relaxed mb-8">
              Alpha is redefining the shopping experience.
              We combine premium products, cutting-edge design,
              and innovation to inspire confidence and elevate
              everyday living.
            </p>

            <button className="btn btn-accent btn-lg">
              Discover More
            </button>

          </div>

        </div>

      </section>

      {/* Values Section */}
      <section className="py-24 bg-base-100">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-primary mb-12">
            Our Core Values
          </h2>

          <div className="grid gap-12 grid-cols-1 md:grid-cols-3">

            {["Quality", "Innovation", "Trust"].map((value) => (
              
              <div
                key={value}
                className="card bg-base-200 shadow-xl p-8 hover:scale-105 transition-transform duration-300"
              >
                
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {value}
                </h3>

                <p className="text-base">
                  {value === "Quality" &&
                    "We prioritize excellence in every product we deliver."}

                  {value === "Innovation" &&
                    "We constantly evolve to bring modern, stylish solutions."}

                  {value === "Trust" &&
                    "We build long-term relationships with our customers."}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-base-200">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Journey
          </h2>

          <div className="space-y-12">

            {[
              {
                year: "2015",
                text: "Alpha was founded with a vision for quality."
              },
              {
                year: "2018",
                text: "Expanded globally with curated collections."
              },
              {
                year: "2022",
                text: "Launched digital-first shopping experience."
              },
            ].map((item) => (

              <div
                key={item.year}
                className="flex items-center gap-8 bg-base-100 p-6 rounded-xl shadow-md"
              >
                
                <div className="text-3xl font-bold text-accent">
                  {item.year}
                </div>

                <p className="text-lg">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary-content text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-lg leading-relaxed">
            We envision a future where shopping is seamless,
            inspiring, and empowering. Alpha aims to expand globally,
            offering products that resonate with diverse lifestyles
            while maintaining our commitment to quality and innovation.
          </p>

        </div>

      </section>

    </main>
  );
}