import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import videoTedx from "@/assets/video_tedx.png";
import videoWbf from "@/assets/video_wbf.png";
import videoCnbc from "@/assets/video_cnbc.png";
import videoMasterclass from "@/assets/video_masterclass.png";

const videoItems = [
  {
    id: 1,
    title: "TEDx Johannesburg",
    description: "A transformative talk on innovation and personal potential.",
    image: videoTedx
  },
  {
    id: 2,
    title: "World Business Forum",
    description: "Keynote address on leadership and business disruption.",
    image: videoWbf
  },
  {
    id: 3,
    title: "CNBC Africa Interview",
    description: "In-depth conversation on market trends and investing.",
    image: videoCnbc
  },
  {
    id: 4,
    title: "Leadership Masterclass",
    description: "Comprehensive masterclass on building high-performing teams.",
    image: videoMasterclass
  },
];

const Videos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Videos</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Watch Baz's keynotes, interviews, and behind-the-scenes content.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {videoItems.map((video) => (
              <div key={video.id} className="bg-white border border-gray-100 shadow-xl rounded-3xl  overflow-hidden">
                {video.image ? (
                  <img src={video.image} alt={video.title} className="w-full aspect-video object-cover object-top" />
                ) : (
                  <div className="aspect-video bg-gray-50 flex items-center justify-center text-gray-600">
                    <span>▶ Video - Add image {video.id}</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-ink-black mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Videos;