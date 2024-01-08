
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">

          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-[300px] bg-white dark:bg-gray-900 rounded-md ">
                
                {/* header popup */}
                <div className="flex justify-between items-center">
                    <h1>Order Now</h1>
                    <IoCloseOutline onClick={() => setOrderPopup(false)} className="cursor-pointer text-2xl"/>
                </div>

                {/* body popup */}
                <div className="mt-4">
                    <input type="text" placeholder="Name" className="rounded-full w-full px-2 py-1 dark:bg-gray-800 text-white border border-gray-300 dark:border-gray-500 mb-4" />

                    <input type="email" placeholder="Email" className="rounded-full w-full px-2 py-1 dark:bg-gray-800 text-white border border-gray-300 dark:border-gray-500  mb-4" />

                    <input type="text" placeholder="Adress" className="rounded-full w-full px-2 py-1 dark:bg-gray-800 text-white border border-gray-300 dark:border-gray-500 mb-4" />
                </div>

                <div className="flex justify-center items-center">
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white p-1 px-4 rounded-full">Order Now</button>
                </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Popup;
