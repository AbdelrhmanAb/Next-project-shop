import { FormLogin } from "@/components/login/FormLogin";


export default function Login() {



  return (
    <main className="bg-base-100 min-h-screen flex items-center justify-center">
      
      <div className="w-full max-w-md bg-base-200 rounded-xl shadow-2xl p-10">
        
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary">Alpha</h1>
          <p className="mt-2 text-gray-600">
            Welcome back, please login
          </p>
        </div>

     <FormLogin/>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Login */}
        <div className="flex flex-col gap-4">

          <button className="btn btn-outline w-full">
            Login with Google
          </button>

          <button className="btn btn-outline w-full">
            Login with Facebook
          </button>

        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          
          <a
            href="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign up
          </a>

        </p>

      </div>
    </main>
  );
}