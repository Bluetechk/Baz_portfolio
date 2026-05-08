import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import baz1 from "@/assets/baz1.jpeg";
import baz2 from "@/assets/baz2.jpeg";
import baz4 from "@/assets/baz4.jpeg";
import baz5 from "@/assets/baz5.jpeg";
import baz7 from "@/assets/baz7.jpeg";
import baz8 from "@/assets/baz8.jpeg";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Disruption",
      description: "How innovation and bold thinking can reshape entire industries and create new markets.",
      image: baz1
    },
    {
      id: 2,
      title: "Why Africa Will Lead",
      description: "Understanding the economic potential and future opportunities in African markets and entrepreneurship.",
      image: baz2
    },
    {
      id: 3,
      title: "Lessons From Failure",
      description: "What we learn when things don't go according to plan and how failure builds resilience.",
      image: baz4
    },
    {
      id: 4,
      title: "The Investor Mindset",
      description: "Key principles and strategies for making smart investment decisions and building wealth.",
      image: baz5
    },
    {
      id: 5,
      title: "Building Legacy",
      description: "Creating lasting impact through business, philanthropy, and meaningful contributions.",
      image: baz7
    },
    {
      id: 6,
      title: "Beyond the Stage",
      description: "Life lessons learned from speaking engagements and public platforms.",
      image: baz8
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Diary of a Thriving Man</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Insights, stories, and lessons from the world of business, investing, and leadership.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 flex flex-col group">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-64 sm:h-72 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow bg-white relative z-10">
                  <span className="text-royal-blue font-black text-xs tracking-widest uppercase mb-2">ARTICLE</span>
                  <h3 className="font-display text-xl font-black text-ink-black mb-2 leading-tight group-hover:text-royal-blue transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-2">{post.description}</p>
                  <span className="text-royal-blue text-sm font-black tracking-wide">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;