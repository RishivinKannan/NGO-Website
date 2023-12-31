import eventPhoto from "../assets/event-1.jpg"
import Header from "../components/Header";
const events =[
    {
        "id":1,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":2,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":3,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":4,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":5,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":6,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    {
        "id":7,
        "date":"Sept 10,2018",
        "title":"World Wide Donation",
        "subtitle":"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        "image":eventPhoto,
    },
    
];
export default function EventPage(){
    return(
        <>
            <Header/>
            <div className="pt-16 my-8 ml-8 lg:ml-14">
                <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 trackinlg-tight lg:text-4xl">
            Events</h3>
            <div className="mt-1 mb-12 lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid">
            {
               events.map((event)=>{
                    return(
                        <div className="relative mt-8 rounded shadow-lg ml-14 w-80 h-128 lg:ml-0" key={event.id}>
                            <div className="w-full h-50"> <img src={event.image} className="w-full h-full rounded-t"/> </div>
                            <div className="absolute w-10/12 px-8 py-4 bg-white h-11/12 top-44 left-6">
                                <span className="inline-block mt-2 text-xs tracking-wide text-gray-500">{event.date}</span>
                                <h4 className="mt-2 text-lg font-semibold tracking-wide">
                                    {event.title} 
                                </h4>
                                <span className="inline-block mt-2 text-sm tracking-wider">{event.subtitle}</span>
                                <br/><br/>
                                <a
                                href="#"
                                className="rounded-md text-indigo-600 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white "
                                >
                                Join event<span aria-hidden="true">&rarr;</span>
                                </a>
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