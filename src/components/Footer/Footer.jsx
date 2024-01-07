import footerLogo from '../../assets/logo.png' 
import Banner from '../../assets/website/footer-pattern.jpg'

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from 'react-icons/fa'

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepaet: 'no-repaet',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
      },
      {
        title: "About",
        link: "/#about",
      },
      {
        title: "Contact",
        link: "/#contact",
      },
      {
        title: "Blog",
        link: "/#blog",
      },
]


const Footer = () => {
  return (
    <div style={BannerImage} className='text-white'>

        <div className='container'>

            <div className='grid md:grid-cols-3 pb-44 pt-5'>

                {/* company details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={footerLogo} alt="" className='max-w-[50px]' />
                        Shopsy
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate harum iure voluptatem?</p>
                </div>

                {/* Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

                  {/* Footer Link Importan Link */}
                  <div>

                    <div className='py-8 px-4'>
                      <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                      <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((data,index) => (
                          <li key={index} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                            <a href={data.link}>{data.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                  
                  {/* Footer Link Link */}
                  <div>
                    
                    <div className='py-8 px-4'>
                      <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                      <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((data) => (
                          <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                            <a href={data.link}>{data.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                  
                  {/* Social Links */}
                  <div>

                    <div className='flex items-center gap-3 mt-7'>

                      <a href="#">
                        <FaInstagram className='text-3xl' />
                      </a>

                      <a href="#">
                        <FaFacebook className='text-3xl' />
                      </a>

                      <a href="#">
                        <FaLinkedin className='text-3xl' />
                      </a>

                    </div>

                    <div className='mt-6'>

                      <div className='flex items-center gap-3'>
                        <FaLocationArrow />
                        <p>Azerbaijan, Baku</p>
                      </div>

                      <div className='mt-6'>
                       <div className='flex items-center gap-3'>
                         <FaMobileAlt />
                          <p>+99455423353</p>
                       </div>
                      </div>

                    </div>

                  </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer