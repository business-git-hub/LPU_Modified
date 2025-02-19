import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918885307365"; // Use international format without the +
    const message = `Hello Top University India Team,
   My name is ${formData.name} and you can reach me at ${formData.email}. I have a query ${formData.message}. 
  I look forward to your response. Thank you!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-black/40" />
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
              alt="Contact"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="animate-fade-in-up px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with our team
            </p>
          </div>
        </div>
      </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Contact Form Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-blue-600" />,
                    title: "Email",
                    content: "info@topuniversityindia.com",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-blue-600" />,
                    title: "Phone",
                    content: "+91 8885307365",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-blue-600" />,
                    title: "Address",
                    content: "Phase 1, Workflows by OYO, Chennai, Tamil Nadu",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            {/* Contact Form */}
            <form onSubmit={sendToWhatsApp} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 p-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message on WhatsApp
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 