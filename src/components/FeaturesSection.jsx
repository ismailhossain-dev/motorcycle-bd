export const FeaturesSection = () => {
  const features = [
    { title: "GPS Tracking", desc: "Real time bike tracking system" },
    { title: "Super Charging", desc: "Fast and reliable charging" },
    { title: "Increasing Speed", desc: "Optimized performance engine" },
    { title: "Powerful Tire", desc: "Durable and strong grip tire" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6  ">
        OUR FEATURES & FACILITIES
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-2xl hover:shadow-lg hover:shadow-orange-500/20 transition"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
              🚴
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
