import history from "../assets/history.jpg"

export default function History(){
    return(
        <div className="py-16 pt-24 sm:my-24 lg:grid lg:grid-cols-2">
            <div className="hidden mt-10 ml-8 lg:grid"><img src={history} width="500" className=""/></div>
            
            <div className="flex flex-col items-center justify-center mx-4">
                <h3 className="mb-8 text-2xl font-bold text-gray-900 trackinlg-tight lg:text-4xl">
                    Welcome to Welfare Stablished Since 2008
                </h3>

                <p className="mr-8 text-base font-semibold leading-7 text-gray-500 tracking-2">
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.On her way she met a copy.<br/><br/>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                    </p>
            </div>
        </div>
    )
}