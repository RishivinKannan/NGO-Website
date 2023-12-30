import { MapPinIcon,PhoneIcon,EnvelopeIcon } from '@heroicons/react/24/outline'
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/#about' },
    { name: 'Project', href: '/projects' },
    { name: 'Event', href: '/events' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact us', href: '/#Contact' },
  ]
  
export default function Footer(){
    return (
        
        <div className="text-white bg-zinc-800 h-96">
            <div className="flex items-center justify-around p-16">
                <div className="hidden lg:block">
                    <h3 className="mb-4 text-xl font-semibold underline underline-offset-8 trackinlg-tight lg:text-2xl">
                    About us</h3>
                    <span className="inline-block w-64 text-sm font-semibold text-gray-400 sm:text-base">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </span>
                </div>
                
                <div className="hidden lg:block">
                    <h3 className="mb-4 text-xl font-semibold underline underline-offset-8 trackinlg-tight lg:text-2xl">
                    Site Links</h3>
                    <div className="flex flex-col gap-2">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-400 ">
                        {item.name}
                    </a>
                    ))}</div>
                </div>
                
                <div>
                    <h3 className="mb-4 text-xl font-semibold underline underline-offset-8 trackinlg-tight lg:text-2xl">
                    Have A Questions?</h3>
                    <div className="flex flex-col gap-6 mt-2">
                        <div className="flex items-center justify-center "><MapPinIcon className="inline w-6 h-6 mr-6"/>
                        <span className="inline-block w-64 font-semibold text-gray-400">
                        203 Fake St. Mountain View, San Francisco, California, USA
                        </span></div>
                        <div  className="flex items-center justify-center "><PhoneIcon className="inline w-6 h-6 mr-6"/>
                        <span className="inline-block w-64 font-semibold text-gray-400">
                        +2 392 3929 210</span></div>
                        <div  className="flex items-center justify-center ">
                        <EnvelopeIcon className="inline w-6 h-6 mr-6"/>
                        <span className="inline-block w-64 font-semibold text-gray-400">
                        info@yourdomain.com
                        </span></div>
                    <div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}