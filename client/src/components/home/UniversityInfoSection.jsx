import { useState, useEffect } from 'react';
import mockeup from "../../assets/Home/mockeup.svg";
// import mockeup from "../../assets/logobg.svg";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import { BookOpen, Users, GraduationCap, Building } from 'lucide-react';

export default function UniversityInfoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const courses = [
    {
      icon: GraduationCap,
      title: "Management Studies",
      description: "Comprehensive programs in Business Administration, Finance, Marketing, and Human Resources Management with industry-focused curriculum.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Building,
      title: "Engineering",
      description: "Cutting-edge programs in Computer Science, Mechanical, Electrical, and Civil Engineering with hands-on practical experience.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Architecture",
      description: "Creative programs focusing on sustainable design, urban planning, and innovative architectural solutions.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "Medical Sciences",
      description: "Advanced medical programs with state-of-the-art facilities and experienced faculty from around the world.",
      color: "from-orange-400 to-pink-600"
    }
  ];

  // Auto-advance carousel
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2 text-2xl sm:text-3xl md:text-4xl">
              Discover Our Premier Programs
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Experience world-class education with our diverse range of academic programs
            designed to nurture talent and create future leaders.
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                // src={mockeup}
                // src='https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg.webp'
                src='https://happenings.lpu.in/wp-content/uploads/2024/01/lpu.jpg'
                alt="University Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    State-of-the-Art Campus
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Modern facilities equipped with the latest technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section - Right Side */}
              {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px]">
              {/* Carousel Content */}
              <div className="relative h-full">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
                    ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                  >
                    <div className="bg-white h-full rounded-2xl p-8 shadow-xl">
                      <div className={`bg-gradient-to-r ${course.color} w-20 h-20 rounded-xl p-5 mb-6`}>
                        <course.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation */}
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300
                    ${currentSlide === index
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % courses.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}