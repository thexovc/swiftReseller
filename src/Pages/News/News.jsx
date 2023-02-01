import './News.css'

const News = () => {
    return (
        <div className='news'>
            <div className="news__con text-left">
                <div className="news__header flex gap-5 items-center">
                    <p className='bg-[#F04E31] p-2 text-white font-bold rounded-lg'>NEWS</p>
                    <p className='text-[#777777]'>June 29, 2022</p>
                </div>
                <div className="flex flex-col gap-5 text-left">
                    <h1 className='font-bold text-xl'>Buy Social Media Accounts From The Market</h1>
                    <p className='text-xl'>Instagram, Twitter, Facebook and lots more</p>
                </div>

                <div className="pt-5 w-full md:px-10 px-2">
                    <div className="bg-pink-400 w-full md:h-[620px] h-[250px] rounded-xl">

                    </div>

                    <div className="news__text pt-5 flex flex-col gap-2">
                        <p>blablu blablu blablu blablu blablu blablu blablu</p>
                        <p>blablu blablu blablu blablu blablu blablu blablu</p>
                        <p>blablu blablu blablu blablu blablu blablu blablu</p>
                        <p>blablu blablu blablu blablu blablu blablu blablu</p>
                        <p>blablu blablu blablu blablu blablu blablu blablu</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default News