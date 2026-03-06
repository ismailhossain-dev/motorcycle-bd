import Container from "@/components/Container";
import React from "react";

const AboutPage = () => {
  const features = [
    {
      title: "Quality Bikes",
      desc: "Imported ebong local best brands-er collection, curated for performance.",
      icon: "🏍️",
    },
    {
      title: "Expert Reviews",
      desc: "Kinar agey jene nin konta apnar jonno best with our in-depth analysis.",
      icon: "🛡️",
    },
    {
      title: "After Sales",
      desc: "24/7 technical support ebong service advice directly from experts.",
      icon: "🛠️",
    },
  ];

  const stats = [
    { label: "Happy Riders", value: "5000+" },
    { label: "Cities Covered", value: "20+" },
    { label: "Top Brands", value: "50+" },
  ];

  return (
    <Container>
      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
        {/* Banner / Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden border-b border-gray-900">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* Background pattern বা গ্রিড চাইলে এখানে দিতে পারেন */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic">
              Born to Ride, <span className="text-blue-600">Built for Adventure</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Bangladesh-er bikers-der jonno ekta bishas-er thikana. We don't just sell bikes; we
              build a community of riders.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#141414] p-8 rounded-2xl border border-gray-800 hover:border-blue-600 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-500 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section (Milestones) */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-5xl font-black text-white mb-1">{stat.value}</span>
                  <span className="text-blue-100 uppercase tracking-widest text-sm font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story / Mission Section (Extra adds to hierarchy) */}
        <section className="py-20 px-6 container mx-auto text-center border-t border-gray-900">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-[1.8]">
            Amader lokkho holo Bangladesh-er rasta-e protyekti rider-er safety ebong performance
            nishchit kora. Premium quality bike ebong trusted service-er maddhome amra apnar bike
            kinar journey-ke korbo shohoj ebong unforgettable.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default AboutPage;
