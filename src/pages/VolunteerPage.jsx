
import Header from "../components/Header";

export default function BlogPage (){
    return(
        <>
            <Header/>
            
            <div className="ml-0 lg:grid-cols-2 lg:grid mt-14 lg:ml-14 ">
                <h3 className="flex items-center mb-4 text-2xl font-bold text-center text-gray-900 trackinlg-tight lg:text-5xl lg:text-start">
            Become a Volunteer</h3>
            <div>
            <form action="#" method="POST" className="max-w-lg mt-16 sm:mt-20 sm:ml-16 md:ml-44 lg:ml-4">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">

            <div className="sm:col-span-2">

                <div className="mt-1.5">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="YOUR NAME"
                    className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="w-full sm:col-span-2">
                
                <div className="mt-1.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="YOUR EMAIL"
                    className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                
                <div className=" mt-1.5">
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    placeholder="YOUR PHONE NUMBER"
                    className="block w-full rounded-md border-0 px-3.5 py-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                
                <div className=" mt-1.5">
                <input
                    type="text"
                    name="contribution"
                    id="contribution"
                    placeholder="CONTRIBUTION"
                    className="block w-full rounded-md border-0 px-3.5 py-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            
          </div>
            <div className="mt-8">
            <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                SEND
            </button>
            </div>
            </form>
            </div>
            </div>
        </>
    )
}





