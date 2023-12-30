import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/#about' },
  { name: 'Project', href: '/projects' },
  { name: 'Event', href: '/events' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact us', href: '/#Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      
      <header className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-90">
        <nav className="flex items-center justify-between p-4 lg:px-8 " aria-label="Global">
          <div className="flex lg:flex-1 lg:items-center" >
            <a href="#" className="text-2xl font-bold leading-6 tracking-wider text-gray-900">
              <span className="">WELFARE</span>
              
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden ml-12 lg:flex " >
            <a href="volunteer" className="text-sm font-semibold leading-6 text-white border-2 border-black-500 px-3 py-1.5 rounded-lg  bg-indigo-600 hover:bg-indigo-500 ">
              Get Involved <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 ">
                  
                  <a
                    href="/volunteer"
                    className="-mx-2 block rounded-lg px-2 py-2.5 text-base font-semibold leading-7  hover:bg-indigo-500   text-white border-2 border-black-500   bg-indigo-600"
                  >
                    <span className="flex justify-center">Get Involved &nbsp;<span aria-hidden="true">&rarr;</span></span>
                    
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      
    </div>
  )
}
