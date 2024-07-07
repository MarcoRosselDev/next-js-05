import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  return (
    <section className="container mx-auto">
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an account</h1> 
          <p>OR</p>
          <span className="items-center inline-flex"><AiFillGithub className='mr-3 text-4xl cursor-pointer text-black dark:text-white'/>|<FcGoogle className='ml-3 text-4xl cursor-pointer'/></span>
        </div>

        <form className="space-y-4 md:space-y-6">
          <input type="email" name="email" placeholder="name@company.com" required className="border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none"/>
          <input type="name" name="name" placeholder="Homero simpson" required className="border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none" />
          <input type="password" name="password" placeholder="password" minLength={6} required className="border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none" />
        </form>
        <button className="text-blue-700 underline">login</button>
      </div>
    </section>
  )
}