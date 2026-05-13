'use client'
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <main className="bg-base-100 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-base-200 rounded-xl shadow-2xl p-10"
      >
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary">Alpha</h1>
          <p className="mt-2 text-gray-600">Create your account</p>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-accent btn-lg w-full">Sign Up</button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Sign Up */}
        <div className="flex flex-col gap-4">
          <button className="btn btn-outline w-full">Sign up with Google</button>
          <button className="btn btn-outline w-full">Sign up with Facebook</button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </main>
  );
}