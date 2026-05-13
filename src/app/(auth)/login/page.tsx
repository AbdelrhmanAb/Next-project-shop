'use client'
import { motion } from "framer-motion";

export default function Login() {
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
          <p className="mt-2 text-gray-600">Welcome back, please login</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-accent hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn btn-accent btn-lg w-full">Login</button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Login */}
        <div className="flex flex-col gap-4">
          <button className="btn btn-outline w-full">Login with Google</button>
          <button className="btn btn-outline w-full">Login with Facebook</button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </main>
  );
}