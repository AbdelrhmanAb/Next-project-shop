'use client'

import Link from "next/link";

interface Prop {
    error:  Error,
    reset:()=>void
}

const error = ({error, reset}:Prop) => {
 return (
    <div className="h-screen flex items-center justify-center bg-slate-100 px-4">
      
      <div className="text-center bg-white shadow-md rounded-2xl p-10 max-w-md w-full">
        
        <div className="text-5xl mb-4">⚠️</div>

        <h1 className="text-2xl font-bold text-red-500 mb-2">
          Something went wrong
        </h1>

        <p className="text-gray-500 mb-6">
          {error.message}
        </p>

        <button
        onClick={()=>reset()}

          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
          Try again
        </button>

      </div>

    </div>
  );
}

export default error