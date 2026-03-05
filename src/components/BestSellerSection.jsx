export const BestSellerSection = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-center mb-12">Best Sellers Products This Weeks</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-orange-500 text-white p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">The Most Popular Bike Of The Season</h3>
          <button className="bg-black text-white px-6 py-3 rounded-xl w-fit">See More</button>
        </div>

        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3">Super Deluxe Tandem 7i</h3>
            <p className="text-gray-500 mb-4">High quality modern design bike.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">Shop Now</button>
          </div>
          <img
            src="https://i.ibb.co/7QpKsCX/bike.png"
            alt="bike"
            className="w-56 object-contain mt-6 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};
