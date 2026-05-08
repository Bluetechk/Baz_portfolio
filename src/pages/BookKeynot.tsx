import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookKeynote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white" />

        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-vivid-azure mb-6 drop-shadow-sm">
              BOOK BAZ
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Bring Baz's electrifying presence to your next event or get in touch with our team.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Contact Info Column */}
            <div className="lg:col-span-1 bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-royal-blue to-vivid-azure"></div>
              <h2 className="font-display text-2xl font-black text-ink-black mb-10">Direct Contact</h2>
              <div className="space-y-8 mt-auto mb-auto">
                <div>
                  <p className="text-royal-blue text-xs font-black tracking-widest uppercase mb-2">Email</p>
                  <p className="text-ink-black font-medium text-lg break-words">bazemmanuelbarzon<br/>@gmail.com</p>
                </div>
                <div>
                  <p className="text-royal-blue text-xs font-black tracking-widest uppercase mb-2">Phone</p>
                  <p className="text-ink-black font-medium text-lg">+231 77 065 6789</p>
                </div>
                <div>
                  <p className="text-royal-blue text-xs font-black tracking-widest uppercase mb-2">Office Location</p>
                  <p className="text-ink-black font-medium text-lg">Monrovia, Liberia</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2 bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl font-black text-ink-black mb-8">Send a Request</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                  <input type="text" placeholder="Organisation" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                  <input type="tel" placeholder="Phone" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                </div>
                <input type="text" placeholder="Event Name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" />
                <textarea rows={5} placeholder="Tell us about your event" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-ink-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all resize-none" />
                <div className="pt-4">
                  <button type="submit" className="w-full bg-gradient-to-r from-royal-blue to-vivid-azure text-white py-4 md:py-5 text-sm tracking-widest font-black rounded-full hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:scale-[1.02] transition-all duration-300">
                    SUBMIT BOOKING REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default BookKeynote;