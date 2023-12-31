import profile from "../assets/profile.jpg"

const team = [
    {
        "id":1,
    "name":"Team Member 1",
    "image":profile,
},
{
    "id":2,
    "name":"Team Member 2",
    "image":profile,
},
{
    "id":3,
    "name":"Team Member 3",
    "image":profile,
},
{
    "id":4,
    "name":"Team Member 4",
    "image":profile,
},
]

export default function Teams(){
    return(
        <div className="mx-6 my-12 lg:mx-14" >
            <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 trackinlg-tight lg:text-4xl">
            Team Members </h3>
    
            <div className="flex flex-wrap justify-start px-8">
            {
                team.map((member)=>{
                    return(
                        <div className="inline-block px-4 py-8 text-center lg:px-12 lg:mr-10 md:px-8 " key={member.id}>
                            <div >
                                <img src={member.image} width="120px" className="rounded-xl"/>
                            </div>
                            <span className="inline-block mt-6 text-base font-semibold leading-7 text-gray-500 tracking-2">{member.name}</span>
                        </div>
                    )
                })
            }
            </div>
            
            </div>

    )
}