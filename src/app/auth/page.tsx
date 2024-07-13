'use client'

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {       email: '',  name: '', password: ''    }

export default function Auth() {

  const [formData, setFormData] = useState(defaultFormData)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }
  async function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try{
      console.log(formData);
    } catch(error){
      console.log(error);
    } finally{
      setFormData(defaultFormData)
    }
  }
  const class_name_input = "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none"

  return (

    <section className="container mx-auto">
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>

        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Login</h1>
          <p>OR</p>
          <Link href="/register">Create an account</Link>
          {/* <span className="items-center inline-flex"><AiFillGithub className='mr-3 text-4xl cursor-pointer text-black dark:text-white'/>|<FcGoogle className='ml-3 text-4xl cursor-pointer'/></span> */}
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="name@company.com" required className={class_name_input}/>
          {/* <input value={formData.name} onChange={handleChange} type="name" name="name" placeholder="Homero simpson" required className={class_name_input} /> */}
          <input value={formData.password} onChange={handleChange} type="password" name="password" placeholder="password" minLength={6} required className={class_name_input} />
          <button type='submit' className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login</button>
        </form>

        <button className="text-blue-700 underline">Register</button>

      </div>
    </section>
  )
}