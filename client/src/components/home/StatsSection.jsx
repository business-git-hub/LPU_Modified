import { BookOpen, Users, Trophy, Award, Globe, Building, ArrowUpRight } from 'lucide-react';

export default function StatsSection() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section with enhanced typography and animation */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24 relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Top University India
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-3 text-3xl sm:text-4xl md:text-5xl">
                Empowering Minds, Shaping Futures
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed font-medium">
              Creating tomorrow's leaders through excellence in education,
              innovation, and research.
            </p>
          </div>

          {/* Primary Stats Grid with enhanced hover effects */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
            {[
              {
                icon: Trophy,
                number: '#1636',
                text: 'University Rankings worldwide',
                color: 'from-orange-400 to-pink-600'
              },
              {
                icon: Users,
                number: '25,000+',
                text: 'Students Enrolled',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: BookOpen,
                number: '150+',
                text: 'Academic Programs',
                color: 'from-green-400 to-emerald-600'
              },
              {
                icon: Globe,
                number: '136',
                text: 'International Partnerships',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Award,
                number: '95%',
                text: 'Graduate Employment Rate',
                color: 'from-yellow-400 to-orange-600'
              },
              {
                icon: Building,
                number: '50+',
                text: 'Research Centers',
                color: 'from-indigo-400 to-indigo-600'
              }
            ].map(({ icon: Icon, number, text, color }) => (
              <div
                key={text}
                className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm
                    hover:bg-white transition-all duration-500 ease-out
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                    border border-gray-100"
              >
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="p-8 sm:p-10">
                  <div className={`bg-gradient-to-r ${color} w-16 h-16 rounded-2xl p-3.5 mb-8
                                      transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4
                                     group-hover:text-transparent group-hover:bg-clip-text 
                                     group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600
                                     transition-all duration-300">
                    {number}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {text}
                  </p>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          {/* Placement Stats Card with glass morphism effect */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden
                              border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-tight">
                Placement Statistics
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-between divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <div className="flex-1 p-8 sm:p-12 text-center hover:bg-blue-50/50 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">₹40,000</div>
                <p className="text-lg sm:text-xl text-gray-600 font-medium">Average Package</p>
                <p className="text-sm text-gray-500 mt-2">Per Month</p>
              </div>
              <div className="flex-1 p-8 sm:p-12 text-center hover:bg-blue-50/50 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">₹6,000</div>
                <p className="text-lg sm:text-xl text-gray-600 font-medium">Highest Package</p>
                <p className="text-sm text-gray-500 mt-2">Per Month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ } 