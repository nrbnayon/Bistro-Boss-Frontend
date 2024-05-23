import FeaturedImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed md:py-16"
      style={{
        backgroundImage: `url(${FeaturedImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="text-center my-4 p-5 rounded-lg font-cinzel text-white">
          <p className="text-lg text-[#D99904] font-semibold italic">
            ---CHECK IT OUT---
          </p>
          <div className="border-t-4 border-[#D99904] w-1/4 mx-auto my-4"></div>
          <h3 className="text-3xl mt-3 font-bold">FEATURED ITEM</h3>
          <div className="border-t-4 border-[#D99904] w-1/4 mx-auto my-4"></div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={FeaturedImg}
                className="w-full h-auto rounded-lg shadow-lg"
                alt="Featured Item"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-2">
                March 25, 2024 WHERE CAN I GET SOME?
              </h3>
              <p>Where Can I Get Some?</p>
              <p className="mb-4">
                Indulge in our chef&apos;s special, crafted with the finest
                ingredients to tantalize your taste buds. Experience the perfect
                blend of flavors and textures in this exquisite dish, a must-try
                for food enthusiasts.
              </p>

              <button className=" border-b-4 bg-opacity-75 border-b-primary font-cinzel font-bold  py-2 px-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
