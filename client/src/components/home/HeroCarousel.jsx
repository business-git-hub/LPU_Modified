import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const slides = [
  {
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    "title": "Expand Your Academic Horizons",
    "description": "Collaborate with top universities to enhance learning and research opportunities."
  },
  {
    "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    "title": "Shape Future Leaders",
    "description": "Partner with world-class institutions to foster innovation and excellence in education."
  },
  {
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    "title": "Global University Collaborations",
    "description": "Connect with renowned universities to promote research, knowledge sharing, and student exchange."
  }
  ];
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }, []);return (
        <div className="relative h-screen w-full overflow-hidden">
          {/* Carousel */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-700 translate-y-0 opacity-100">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200" >
                      Get Started
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {/* Navigation Buttons */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
    
          {/* Indicators */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      );
    }