
import React from 'react';
import { Users, Award, GraduationCap, Users2, Building, Globe2, Target } from 'lucide-react';
import about from '../../assets/Home/about.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
    
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
            alt="University"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Top University India</h1>
          <p className="text-xl text-gray-200 max-w-2xl mt-4">
            A prestigious institution committed to empowering future leaders through excellence in education and research.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Our Values</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At Top University India, we are dedicated to fostering a supportive and inclusive learning community that values diversity, integrity, and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Users className="w-12 h-12 text-blue-600" />, title: "Our Team", description: "Distinguished faculty and passionate educators shaping the future." },
            { icon: <Target className="w-12 h-12 text-blue-600" />, title: "Our Mission", description: "To provide accessible, world-class education to all students." },
            { icon: <Award className="w-12 h-12 text-blue-600" />, title: "Excellence", description: "Committed to academic and research excellence through innovation." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatisticCard icon={Users2} value="50,000+" label="Students" />
          <StatisticCard icon={GraduationCap} value="200,000+" label="Alumni Worldwide" />
          <StatisticCard icon={Award} value="500+" label="Awards & Recognitions" />
          <StatisticCard icon={Building} value="100+" label="Research Centers" />
        </div>
      </div>

      {/* What Our Students Say */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">What Our Students Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-12"
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="text-yellow-400 w-6 h-6" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Top University India helped me achieve my career goals with world-class education and excellent faculty. The
                  campus is great, and the infrastructure is top-notch."
                </p>
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-gray-600">Computer Science Graduate</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global Presence */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Global Presence</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "International Collaborations", description: "Partnering with top universities worldwide for research and student exchange." },
            { title: "Research Network", description: "Innovative global research tackling pressing world challenges." },
            { title: "Alumni Network", description: "A strong alumni presence in over 100+ countries." }
          ].map((item, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md text-center hover:shadow-xl transition-all">
              <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatisticCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mx-auto mb-3" />
      <div className="text-2xl sm:text-4xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm sm:text-base text-gray-600">{label}</div>
    </div>
  );
}
  