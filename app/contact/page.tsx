export default function Contact() {
    async function handleFormSubmit (){
        "use server"
    }
    return (
        <main className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 mt-12 w-3/4 lg:w-1/2">
            <h1 className="font-inter font-medium text-4xl lg:text-3xl mt-4 text-center lg:text-left">Contact me📥</h1>
            <div className="flex flex-col mt-2">
                <form className="flex flex-col gap-y-3" action={handleFormSubmit}>
                    <div className="">
                        <label className="font-inter" htmlFor="name">Your name</label>
                        <input className="w-full px-4 py-4 box-border border-2 border-solid border-[#ccc] rounded-[0.4rem] bg-[#f8f8f8] font-inter resize-none" type="text" name="name" id="name" placeholder="Rejoice"/>
                    </div>

                    <div className="">
                        <label className="font-inter" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="rejoice@kmutt.ac.th" className="w-full px-4 py-4 box-border border-2 border-solid border-[#ccc] rounded-[0.4rem] bg-[#f8f8f8] font-inter resize-none" />
                    </div>

                    <label className="font-inter" htmlFor="inq">Inquiries</label>
                    <textarea className="w-full h-36 px-4 py-5 box-border border-2 border-solid rounded-[0.4rem] border-[#ccc] bg-[#f8f8f8] text-base resize-none font-inter" name="inq" id="inq" placeholder="Your inquiries here..."></textarea>
                    <div className="cf-turnstile" data-sitekey="0x4AAAAAAAvXnnK23N9-hzOZ"></div>
                    <button id="submit-btn" className="inline-block outline-0 border-none cursor-pointer rounded-[0.4rem] text-base font-inter h-10 bg-[#0000000d] hover:bg-[#0000001a] text-[#0e0e10] px-4" type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}