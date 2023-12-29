import blogPhoto from "../assets/cause-1.jpg"

const blogs =[
    {
        "id":1,
        "date":"Sept 10,2018",
        "title":"Hurricane Irma has devastated Florida",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":blogPhoto,
    },
    {
        "id":2,
        "date":"Sept 10,2018",
        "title":"Hurricane Irma has devastated Florida",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":blogPhoto,
    },
    {
        "id":3,
        "date":"Sept 10,2018",
        "title":"Hurricane Irma has devastated Florida",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":blogPhoto,
    },
];
export default function Blog (){
    return(
        <>
            <div className="my-8 ml-8 mt-44">
                <h3 className="mb-8 text-2xl font-bold text-gray-900 trackinlg-tight lg:text-4xl">
            Recent from blogs</h3>
            <div className="mt-16 lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid">
            {
                blogs.map((blog)=>{
                    return(
                        <div className="relative mt-8 rounded shadow-lg ml-14 w-80 h-128 lg:ml-0" key={blog.id} >
                            <div className="w-full h-50"> <img src={blog.image} className="w-full h-full rounded-t"/> </div>
                            <div className="absolute w-10/12 px-8 py-4 bg-white h-11/12 top-44 left-6">
                                <span className="inline-block mt-2 text-xs tracking-wide text-gray-500">{blog.date}</span>
                                <h4 className="mt-2 text-lg font-semibold tracking-wide">
                                <a href="#" className="hover:text-indigo-600">
                                    {blog.title}</a></h4>
                                <span className="inline-block mt-2 text-sm tracking-wider">{blog.subtitle}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
               <div className="mt-12 ml-44 lg:mr-24 lg:float-right lg:ml-0 md:ml-96"> 
                    <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                   More <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            
        </>
    )
}