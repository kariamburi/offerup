import MenuList from "./menu-list";

export default function Menumobile() {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 m-1 gap-1">
        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/vehicles`}>
              <img
                className="w-full h-16 rounded-full"
                src="vehicle.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Vehicles</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/property`}>
              <img
                className="w-full h-16 rounded-full"
                src="real-estate.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Property</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/mobile`}>
              <img
                className="w-16 h-16 rounded-full"
                src="mobile.png"
                alt="Menu Image"
              />
            </a>
            <h2 className="text-sm">Mobile Phones & Tablets</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/electronics`}>
              <img
                className="w-16 h-16 rounded-full"
                src="electronics.png"
                alt="Menu Image"
              />
            </a>
            <h2 className="text-sm">Computers & Electronics</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/furniture`}>
              <img
                className="w-16 h-16 rounded-full"
                src="home.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Home, Furniture & Appliances</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/health`}>
              <img
                className="w-16 h-16 rounded-full"
                src="beauty.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Health & Beauty</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/fashion`}>
              <img
                className="w-16 h-16 rounded-full"
                src="fashion.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Fashion</h2>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center cursor-pointer border-0 border-emerald-300 hover:bg-emerald-100 ">
          <div className="flex flex-col items-center justify-center">
            <a href={`/category/hobbies`}>
              <img
                className="w-16 h-16 rounded-full"
                src="hobbies.png"
                alt="Menu Image"
              />
            </a>

            <h2 className="text-sm">Sports, Arts & Outdoors</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
