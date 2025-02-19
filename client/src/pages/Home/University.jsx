import { BookOpen, GraduationCap, Library } from 'lucide-react';
import UniversitySection from '../../components/University/UniversitySection';
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function University() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
       {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-indigo-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-black/40" />
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
              alt="University Campus"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="animate-fade-in-up px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Our University</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover a world of opportunities and excellence in education
            </p>
          </div>
        </div>
      </div>
      <UniversitySection />
      {/* Programs Section */}
       {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-purple-600" />,
                title: "Undergraduate",
                description: "Comprehensive bachelor's programs across multiple disciplines."
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
                title: "Graduate Studies",
                description: "Advanced degrees and research opportunities."
              },
              {
                icon: <Library className="w-12 h-12 text-purple-600" />,
                title: "Research",
                description: "World-class research facilities and opportunities."
              }
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 