import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

/* ---------------- TEAM DATA ---------------- */

const teams = {
  faculty: [
    {
      name: "Dr. R. Sharma",
      role: "Faculty Coordinator",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      instagram: "https://www.instagram.com/aitsportsclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "Prof. A. Mehta",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      instagram: "#",
    },
    {
      name: "Prof. A. Mehta",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      instagram: "#",
    },
  ],

  te: [
    {
      name: "Alex Morgan",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      instagram: "#",
    },
    {
      name: "Melissa Tatcher",
      role: "Marketing",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      instagram: "#",
    },
    {
      name: "Stuart Ferrel",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      instagram: "#",
    },
    {
      name: "Eva Hudson",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      instagram: "#",
    },
    {
      name: "Jackie Sanders",
      role: "SEO",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      instagram: "#",
    },
    // add 5 more...
  ],

  se: [
    {
      name: "Ryan Cooper",
      role: "Frontend",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      instagram: "#",
    },
    {
      name: "Sophia Lee",
      role: "UI/UX",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b",
      instagram: "#",
    },
    {
      name: "Daniel Ross",
      role: "Backend",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      instagram: "#",
    },
    // add ~9 more...
  ],
};

/* ---------------- COMPONENT ---------------- */

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("faculty");
  const [index, setIndex] = useState(0);

  const teamMembers = teams[activeTab];

  const cardsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    if (index + cardsPerView < teamMembers.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIndex(0);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-lg uppercase font-[Genos] tracking-widest text-blue-500">
          Our Team Members
        </p>
        <h2 className="text-5xl font-[Genos] font-bold text-white mt-2">
          Our Sporty Team
        </h2>
        <p className="text-xl text-zinc-400  max-w-xl mx-auto mt-4">
          Meet the team that sets the pace.
        </p>

        {/* -------- TABS -------- */}
        <div className="flex justify-center gap-4 mt-8">
          {["faculty", "te", "se"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-full font-[Genos] text-sm uppercase tracking-wider transition
                ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
                }`}
            >
              {tab === "faculty"
                ? "Faculty"
                : tab === "te"
                ? "TE Members"
                : "SE Members"}
            </button>
          ))}
        </div>
      </div>

      {/* -------- SLIDER -------- */}
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                index * (100 / cardsPerView)
              }%)`,
            }}
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[33.3333%] px-4"
              >
                <div className="bg-zinc-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-500/10 transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-500"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-4 mt-4 text-zinc-400">
                    <a href={member.instagram} target="_blank">
                      <Instagram className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- CONTROLS -------- */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
          disabled={index === 0}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
          disabled={index + cardsPerView >= teamMembers.length}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
