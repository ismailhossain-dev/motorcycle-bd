"use client";
import React from "react";
import { ContactUser } from "../api/contact/route";

const ContactPage = () => {
  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const contactInfo = {
      name,
      email,
      subject,
      message,
    };

    ContactUser(contactInfo);
    // form.reset();
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Have a question or want to book a test ride? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info (আগের মতোই থাকবে) */}
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black mb-6 border-l-4 border-blue-600 pl-4 uppercase italic">
                Contact <span className="text-blue-600">Info</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have questions about a specific bike model or want to schedule a showroom visit?
                Amader team apnake shohojogita korar jonno prostut.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center p-5 bg-[#141414] rounded-2xl border border-gray-800 hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 uppercase text-xs tracking-widest mb-1">
                    Call Us Directly
                  </h4>
                  <p className="text-blue-500 font-bold text-lg">+880 1619-408991</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center p-5 bg-[#141414] rounded-2xl border border-gray-800 hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 uppercase text-xs tracking-widest mb-1">
                    Email Support
                  </h4>
                  <p className="text-blue-500 font-bold text-lg leading-none">
                    programmarsabbir@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center p-5 bg-[#141414] rounded-2xl border border-gray-800 hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 uppercase text-xs tracking-widest mb-1">
                    Our Showroom
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Plot 12, Road 5, Banani, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl">
            {/* ১. এখানে onSubmit ব্যবহার করা হয়েছে */}
            <form onSubmit={handleContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name" // ঠিক আছে
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" // ২. এখানে name="name" ছিল, ঠিক করে "email" করা হয়েছে
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject" // ৩. name যোগ করা হয়েছে
                  placeholder="Inquiry about Yamaha R15"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
