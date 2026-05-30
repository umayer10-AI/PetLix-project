'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

type Inputs = {
  name: string,
  email: string,
  image: string,
  password: string,
};

export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const router = useRouter()

    const a = async (v:Inputs) => {
        console.log(v)

        // const { data, error } = await authClient.signUp.email({
        //     name: v.name,
        //     email: v.email,
        //     password: v.password,
        //     image: v.image,
        //     callbackURL: "/",
        // });

        // if(data){
        //     alert("Data Successfully")
        //     router.push('/')
        // }
        // if(error){
        //     alert(error.message)
        // }
    }

  return (
    <div className="flex items-center justify-center p-4 mt-5">
      <div className="w-full max-w-md  bg-[#101214] border border-red-800 rounded-2xl shadow-lg p-8 shadow-red-800">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(a)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="url"
              {...register("image", { required: true })}
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-red-700 to-[#220b34] hover:scale-98 transition duration-300 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-red-800 transition"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        <p className="text-center mt-5 text-sm">
          Already have an account?
          <Link href={'/login'} className="text-red-800 font-semibold cursor-pointer ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}