import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const speakingTopics = [
  {
    id: 1,
    title: "Leadership & Disruption",
    description: "How to lead in an era of constant change and uncertainty."
  },
  {
    id: 2,
    title: "The African Opportunity",
    description: "Why Africa is the world's next growth frontier."
  },
  {
    id: 3,
    title: "Entrepreneurship",
    description: "Building businesses that scale and create lasting impact."
  },
];

const Speaker = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Speaking</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Baz delivers keynotes on leadership, disruption, entrepreneurship, and the future of Africa. Each talk is tailored to the audience and event.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {speakingTopics.map((topic) => (
              <div key={topic.id} className="bg-white border border-gray-100 shadow-xl rounded-3xl  p-8">
                <h3 className="font-display text-xl font-bold text-ink-black mb-4">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Speaker;