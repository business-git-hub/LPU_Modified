import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCreateContact from "../../hooks/Contact/useCreateContact";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X, Send, Loader2 } from "lucide-react";
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
function FloatingRegistration() {
  const [isOpen, setIsOpen] = useState(false);
  const { contactMassages, register, handleSubmit, onSubmit, errors, isLoading, error } = useCreateContact();
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 shadow-xl z-[1000] focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquarePlus className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center z-[1001] p-4 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <motion.div
              className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden my-8 sm:my-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
              <div className="p-4 sm:p-6 md:p-8">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.button>
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Get in Touch</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">We'd love to hear from you!</p>
                </div>
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 sm:gap-4">
                    <div>
                      <label className="form-label">First Name</label>
                      <input {...register("firstName", { required: "First name is required" })} className="input-field" placeholder="John" />
                      {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Last Name</label>
                      <input {...register("lastName", { required: "Last name is required" })} className="input-field" placeholder="Doe" />
                      {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 sm:gap-4">
                    <div>
                      <label className="form-label">Email</label>
                      <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} className="input-field" placeholder="john.doe@example.com" type="email" />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        {...register("phoneNumber", {
                          required: "Phone number is required",
                          pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" }
                        })}
                        className="input-field"
                        placeholder="1234567890"
                        type="tel"
                      />
                      {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                    </div>
                  </div>
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                  <div>
                    <label className="form-label">Qualification</label>
                    <input
                      {...register("qualification", { required: "Qualification is required" })}
                      className="input-field"
                      placeholder="Bachelor's in Computer Science"
                    />
                    {errors.qualification && <p className="error-message">{errors.qualification.message}</p>}
                  </div>
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                  <div>
                    <label className="form-label">Message</label>
                    <textarea {...register("message", { required: "Message is required" })} rows={2} className="input-field" placeholder="How can we help you?" />
                    {errors.message && <p className="error-message">{errors.message.message}</p>}
                  </div>
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                  <motion.button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isLoading ? (<Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />) : (<Send className="h-4 w-4 sm:h-5 sm:w-5" />)}
                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735

export default FloatingRegistration;