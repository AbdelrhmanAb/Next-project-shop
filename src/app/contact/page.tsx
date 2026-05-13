'use client'

// pages/contact.js
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="bg-base-100">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-r  to-neutral text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-8"
        >
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions or need support? We’re here to help you with anything
            related to Alpha.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Send Us a Message
          </motion.h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 bg-base-200 p-10 rounded-xl shadow-lg"
          >
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered outline-none w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full outline-none"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full outline-none"
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button className="btn btn-accent btn-lg w-full">Send Message</button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-primary mb-12"
          >
            Contact Information
          </motion.h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card bg-base-100 shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>support@alpha.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card bg-base-100 shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+1 (234) 567-890</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card bg-base-100 shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>123 Alpha Street, New York, USA</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}