import bodyImage from "../../assets/BodyImage/body1.jpg";
import bodyImage1 from "../../assets/BodyImage/pexels-mikhail-nilov-7820321.jpg";
const Body1 = () => {
  return (
    <section className="bg-[#ececee] mt-24  rounded rounded-[rgb(27, 28, 30] p-3 dark:bg-gray-900 py-10">
      <div className="container mx-w-7xl mx-auto px-6">
        <div className="xl:flex xl:items-center xl:-mx-4">
          <div className="xl:w-1/2 mb-36  text-center  xl:mx-4">
            <h1 className="text-2xl  font-semibold text-gray-800 font-yeseva capitalize lg:text-4xl dark:text-white">
              Finest Luxury <br />
              Hotels in Dhaka
            </h1>
            <p className="max-w-xl ml-5 mr-4 text-center mt-4 text-gray-500 dark:text-gray-300">
              "Experience the finest luxury hotels in Dhaka, where elegance
              meets comfort. <br />
              Indulge in world-class amenities, exquisite dining, and
              unparalleled hospitality, <br />
              all in the heart of Bangladesh’s vibrant capital."
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-cover h-[450px] rounded-xl aspect-square"
                src={bodyImage}
                alt="John Doe"
              />
            </div>

            <div className="relative">
              <img
                className="object-cover h-[450px] rounded-xl aspect-square"
                src={bodyImage1}
                alt="Mia"
              />
              <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 font-yeseva font-bold text-white text-3xl rounded-xl">
                25 <br /> YEARS <br /> of <br />  Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body1;
