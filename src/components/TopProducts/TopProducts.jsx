import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'

import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  return (
    <div >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-24">
          <p  data-aos='fade-up'  className="text-sm text-primary">Top Tated Products for you</p>
          <h1  data-aos='fade-up'  className="text-3xl font-bold">Best Product</h1>
        </div>

        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
                <div  data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-800 group max-w-[300px] transition-all'>

                    {/* image section */}
                    <div className='h-[100px]'>
                    <img  src={data.img} alt=""  className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                    </div>

                    {/* detail section */}
                    <div className='p-4 text-center'>

                        {/* start rating */}
                        <div className='w-full flex items-center justify-center gap-1 '>
                            <FaStar className='text-yellow-500 ' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                        </div>

                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 group-hover:line-clamp-none '>{data.description}</p>

                        <button className='bg-primary text-white py-1 px-4 rounded-full mt-4 hover:scale-105 duration-300 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                    </div>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
