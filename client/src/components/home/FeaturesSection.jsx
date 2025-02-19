import { BookOpen, Users, Trophy, Star, Globe, Award } from "lucide-react";
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Access to world-class curriculum and cutting-edge learning resources with innovative teaching methods.",
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professors and industry experts who bring real-world knowledge to the classroom.",
    color: "from-purple-500 to-purple-600",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Trophy,
    title: "Career Success",
    description: "Achieve your career goals with our excellent placement records and comprehensive career support services.",
    color: "from-green-500 to-green-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Star,
    title: "Research Excellence",
    description: "Engage in cutting-edge research projects with state-of-the-art facilities and expert guidance.",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Gain international perspective through exchange programs and collaborations with worldwide institutions.",
    color: "from-indigo-500 to-indigo-600",
    lightColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: Award,
    title: "Industry Connect",
    description: "Bridge the gap between academia and industry with regular workshops, internships, and industry visits.",
    color: "from-rose-500 to-rose-600",
    lightColor: "bg-rose-50",
    iconColor: "text-rose-600"
  }
];
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2 text-2xl sm:text-3xl md:text-4xl">
              Excellence in Every Aspect
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Discover the unique advantages that set us apart and make us the preferred choice
            for students seeking excellence in education.
          </p>
        </div>

        {/* Features Grid */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 
                       transition-all duration-300 hover:shadow-xl
                       border border-gray-100 hover:border-gray-200"
            >
              {/* Icon Container */}
              {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <div className={`${feature.lightColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                            transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 
                           group-hover:${feature.iconColor} transition-colors duration-300`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Student Satisfaction" },
            { number: "50+", label: "Years of Excellence" },
            { number: "100+", label: "Global Partners" },
            { number: "25K+", label: "Success Stories" }
          ].map((stat, index) => (
            <div key={index}
              className="text-center p-6 bg-white rounded-3xl border border-gray-100 
                          hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="mt-20 relative overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                Ready to Join Our Excellence Journey?
              </h3>
              <p className="text-blue-100 text-center mb-8">
                Take the first step towards your successful future with us.
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold 
                                 hover:bg-blue-50 transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
            {/* Decorative Elements */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
          </div>
        </div>
      </div>
    </section>
  );
}