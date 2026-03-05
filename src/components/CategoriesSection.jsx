export const CategoriesSection = () => {
  return (
    <section className="bg-[#111111] text-white py-16 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-center mb-12">Our Categories</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white text-black rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-3">KIDS BIKES</h3>
          <p className="text-sm text-gray-600 mb-4">Colorful and safe bikes for kids</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Discover More</button>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-3">ACCESSORIES</h3>
          <p className="text-sm text-gray-400 mb-4">Helmets, lights and more</p>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-3">MOUNTAIN BIKE</h3>
          <p className="text-sm text-gray-400 mb-4">Built for adventure rides</p>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
