import Container from "@/components/Container";

const featuredBikes = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    price: "$4,500",
    image: "./R15.avif",
    tag: "Hot",
    specs: { engine: "155cc", power: "18.4 HP", mileage: "45 kmpl" },
  },
  {
    id: 2,
    name: "Kawasaki Ninja 400",
    price: "$5,200",
    image: "./kawasaki.avif",
    tag: "New",
    specs: { engine: "399cc", power: "45 HP", mileage: "25 kmpl" },
  },
  {
    id: 3,
    name: "Honda CBR 150R",
    price: "$4,100",
    image: "./honda.avif",
    tag: "Featured",
    specs: { engine: "149cc", power: "17.1 HP", mileage: "40 kmpl" },
  },
];

export default function FeaturedSection() {
  return (
    <Container>
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-blue-600 pl-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Featured <span className="text-blue-600">Machines</span>
              </h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Top-tier performance and engineering. Choose your beast from our exclusive
                collection.
              </p>
            </div>
            <div className="hidden md:block text-gray-500 font-mono text-sm">
              / 03 Models Available
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBikes.map((bike) => (
              <div
                key={bike.id}
                className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] focus-within:ring-2 focus-within:ring-blue-500 outline-none"
                tabIndex="0"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm skew-x-[-12deg]">
                    {bike.tag}
                  </span>
                </div>

                {/* Image with Zoom & Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent z-10 opacity-60"></div>
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="p-8 relative z-20 -mt-10">
                  <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                    {bike.name}
                  </h3>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-2 mt-6 py-4 border-y border-gray-800/50">
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Engine</p>
                      <p className="text-sm font-semibold text-gray-200">{bike.specs.engine}</p>
                    </div>
                    <div className="text-center border-x border-gray-800/50">
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Power</p>
                      <p className="text-sm font-semibold text-gray-200">{bike.specs.power}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Mileage</p>
                      <p className="text-sm font-semibold text-gray-200">{bike.specs.mileage}</p>
                    </div>
                  </div>

                  {/* Price Label */}
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-gray-400 text-sm italic">Starting at</span>
                    <span className="text-3xl font-black text-white tracking-tight">
                      {bike.price}
                    </span>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
