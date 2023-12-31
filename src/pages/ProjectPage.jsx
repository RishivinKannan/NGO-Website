import projectPhoto from "../assets/project-1.jpg"
import Header from "../components/Header"
import { Menu } from '@headlessui/react'

import {useState} from 'react'

const projects =[
    {
        "id":1,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":projectPhoto,
        "category":"1",
    },
    {
        "id":2,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":projectPhoto,
        "category":'1',
    },
    {
        "id":3,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia." ,
        "image":projectPhoto,
        "category":"1",
        
    },
    {
        "id":4,
        "date":"Sept 10,2018",
        "title":"Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":projectPhoto,
        "category":"2",
    },
    {
        "id":5,
        "date":"Sept 10,2018",
        "title":"Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":projectPhoto,
        "category":"2",
    },
    {
        "id":6,
        "date":"Sept 10,2018",
        "title":"Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia." ,
        "image":projectPhoto,
        "category":"2",
        
    },
    
];
export default function Project(){
    
    
    const [filter,setFilter] = useState(projects);
    
    function listFilter(catego){
        
        const fil=projects.filter((f)=>{
            return f.category.includes(catego);
        })
        setFilter(fil);
    }
    
    return(
        <>
            <Header/>
            <div className="pt-16 my-8 ml-8 lg:ml-14">
            <div className="flex items-center justify-between mr-24">
                <h3 className="ml-12 text-2xl font-bold text-center text-gray-900 lg:mb-8 trackinlg-tight lg:text-4xl lg:ml-0">
            Projects</h3>
            
            <Menu >
                <Menu.Button className=" inline-block rounded-lg px-4 py-2.5 text-base font-semibold leading-7  hover:bg-indigo-500   text-white border-2 border-black-500   bg-indigo-600 ">
                    Fliter
                </Menu.Button>
                <Menu.Items className="absolute z-50 inline-flex flex-col bg-white border rounded top-44 right-24 border-grey-80">
                    <Menu.Item>
                        <a
                        className="inline-block px-4 py-2.5"
                        href="#all"
                        onClick= {()=>{
                            
                            listFilter("")
                        }}
                        >
                       All
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                    
                        <a
                        className="inline-block px-4 py-2.5 "
                        href="#category1"
                        onClick={()=>{
                            
                            listFilter("1")
                        }

                        }
                        >
                        Category 1
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                        className="inline-block px-4 py-2.5"
                        href="#category2"
                        onClick= {()=>{
                            
                            listFilter("2")
                        }}
                        >
                        Category 2
                        </a>
                    </Menu.Item>
                    
                </Menu.Items>
            </Menu>
            </div>
            <div className="mt-1 mb-12 lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid">
            {
              filter.map((project)=>{
                    return(
                        <div className="relative mt-8 rounded shadow-lg ml-14 w-80 h-128 lg:ml-0" key={project.id} >
                            <div className="w-full h-50"> <img src={project.image} className="w-full h-full rounded-t"/> </div>
                            <div className="absolute w-10/12 px-8 py-4 bg-white h-11/12 top-44 left-6">
                                <span className="inline-block mt-2 text-xs tracking-wide text-gray-500">{project.date}</span>
                                <h4 className="mt-2 text-lg font-semibold tracking-wide">
                                    <a href="#" className="hover:text-indigo-600">{project.title}</a>
                                </h4>
                                <span className="inline-block mt-2 text-sm tracking-wider">{project.subtitle}</span>
                                
                            </div>
                        </div>
                    )
                })
            }
            </div>
               
            </div>
            
        </>
    )
}