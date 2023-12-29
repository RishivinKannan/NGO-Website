
// import { useState } from 'react'
import Map from "./map"



export default function Contact() {
//   const [agreed, setAgreed] = useState(false)

  return (
    <div className="px-6 py-24 bg-white lg:px-8">
      
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
      </div>
      <div className="lg:grid sm:block lg:grid-cols-2">
            <form action="#" method="POST" className="max-w-lg mt-16 sm:mt-20 sm:ml-16 md:ml-44 lg:ml-4">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                
                <div className="sm:col-span-2">
            
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="YOUR NAME"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="w-full sm:col-span-2">
                    
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YOUR EMAIL"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    
                    <div className="relative mt-2.5">
                    <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="YOUR PHONE NUMBER"
                        className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="MESSAGE"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                    </div>
                </div>
                
                </div>
                <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    SEND MESSAGE
                </button>
                </div>
            </form>
            <Map/>
        </div>
    </div>
  )
}
