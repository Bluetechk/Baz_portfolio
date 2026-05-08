import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Contact</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-xl font-bold text-ink-black mb-6">Get in Touch</h2>
              <div className="space-y-4 text-gray-600">
                <p><span className="text-primary font-semibold">Email:</span> bazemmanuelbarzon@gmail.com</p>
                <p><span className="text-primary font-semibold">Phone:</span> +27 11 302 7500</p>
                <p><span className="text-primary font-semibold">Office:</span> Johannesburg, South Africa</p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl  px-4 py-3 text-ink-black placeholder:text-gray-600 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl  px-4 py-3 text-ink-black placeholder:text-gray-600 focus:outline-none focus:border-primary" />
              <select className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl  px-4 py-3 text-gray-600 focus:outline-none focus:border-primary">
                <option>Keynote Booking</option>
                <option>Media Enquiry</option>
                <option>Partnership</option>
                <option>General Enquiry</option>
              </select>
              <textarea rows={4} placeholder="Your Message" className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl  px-4 py-3 text-ink-black placeholder:text-gray-600 focus:outline-none focus:border-primary resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 font-semibold rounded-full hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
