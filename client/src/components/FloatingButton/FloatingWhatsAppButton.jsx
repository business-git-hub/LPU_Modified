import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
function FloatingWhatsAppButton() {
  const phoneNumber = import.meta.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918885307365";
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  return (
    <>
      {/* Floating WhatsApp Button */}
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      <motion.button
        onClick={openWhatsAppChat}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6  bg-green-600 hover:bg-green-700 text-white rounded-full p-1 sm:p-3 shadow-xl z-[1000] focus:outline-none focus:ring-4 focus:ring-green-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.084.53 4.041 1.537 5.783L0 24l6.417-1.535A11.977 11.977 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.744-.5-5.354-1.43l-.384-.227-3.802.91 1.047-3.739-.251-.395A9.927 9.927 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.107-7.937c-.272-.136-1.617-.797-1.87-.89-.253-.093-.437-.136-.621.136s-.712.89-.874 1.073c-.161.184-.323.204-.595.068-.272-.136-1.15-.423-2.192-1.347-.81-.725-1.357-1.621-1.516-1.894-.16-.272-.017-.419.119-.552.122-.12.272-.32.408-.48.136-.16.182-.272.273-.454.092-.183.045-.34-.023-.48-.068-.136-.621-1.494-.85-2.045-.224-.534-.453-.463-.622-.471-.161-.007-.34-.009-.52-.009s-.48.068-.731.34c-.253.273-.989.967-.989 2.356 0 1.389 1.012 2.734 1.154 2.922.136.184 1.997 3.048 4.839 4.145 1.803.74 2.51.799 3.409.673.52-.08 1.617-.662 1.844-1.3.227-.636.227-1.181.16-1.299-.068-.118-.248-.183-.52-.318z" />
        </svg>
      </motion.button>
    </>
  );
}
//  dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 
export default FloatingWhatsAppButton