import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    
};


const Subscribe = () => {
  return (
    <section data-aos='zoom-in' style={BannerImg} className='container mb-20 bg-gray-100 dark:bg-gray-800 text-white' id='contact'>

        <div className=' backdrop-blur-sm py-10'>

            <div className='space-y-6 max-w-xl mx-auto'>

                <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>
                    Get Notified About New Products
                </h1>
                <input data-aos='fade-up' type="text" placeholder='Enter your email' className='w-full p-3 rounded-full outline-none  focus:outline-purple-400 text-black' />
            </div>
        </div>
    </section>
  )
}

export default Subscribe