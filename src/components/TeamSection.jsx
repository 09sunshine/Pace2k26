import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
/* ================= TE IMAGES ================= */
import te1 from "../assets/TE-shivani.jpeg";
import te2 from "../assets/TE-pandu.jpeg";
import te3 from "../assets/TE-me2.jpeg";
import te4 from "../assets/TE-mahala.jpeg";
import te5 from "../assets/TE-piyush.jpeg";
import te6 from "../assets/TE-keshuu.jpeg";
import te7 from "../assets/TE-ayush.jpeg";
import te8 from "../assets/TE-rahul.jpeg";
import te9 from "../assets/TE-shivang1.jpeg";
import te10 from "../assets/TE-kuldeep.png";
import te11 from "../assets/TE-lalit.jpeg";
import te12 from "../assets/TE-param.jpeg";
import te13 from "../assets/TE-divyanshi.jpeg";
import te14 from "../assets/TE-akash.jpeg";

/* ================= FACULTY ================= */
import fac1 from "../assets/FAC-pd.jpeg";
import fac2 from "../assets/FAC-ash.jpeg";
import fac3 from "../assets/FAC-swati.jpeg";

/* ================= SE IMAGES ================= */
import se1 from "../assets/SE-himanshu.jpeg";
import se2 from "../assets/SE-sagar.jpeg";
import se3 from "../assets/SE-yogesh.jpeg";
import se4 from "../assets/SE-ritika.jpeg";
import se5 from "../assets/SE-mah.jpeg";
import se6 from "../assets/SE-shomya.jpeg";
import se7 from "../assets/SE-lokesh.jpeg";
import se8 from "../assets/SE-ayesha.png";
import se9 from "../assets/SE-siddhi.png";
import se10 from "../assets/SE-navdeep.png";
import se11 from "../assets/SE-puneet.png";
import se12 from "../assets/SE-manjeet.jpeg";
import se13 from "../assets/SE-rahul.jpeg";
import se14 from "../assets/SE-rohan.jpeg";
import se15 from "../assets/SE-lakshya.jpeg";
import se16 from "../assets/SE-anagha.png";
import se17 from "../assets/SE-akash.png";
import se18 from "../assets/SE-shivansh.jpeg";
import se19 from "../assets/SE-tanu.jpeg";

/* ================= EVENT HEADS ================= */
import eh1 from "../assets/EH-akash.jpeg";
import eh2 from "../assets/EH-millan.jpeg";
import eh3 from "../assets/EH-ajay.jpeg";
import eh4 from "../assets/EH-ritika.jpeg";
import eh5 from "../assets/EH-shivani.jpeg";
import eh6 from "../assets/EH-sunandha.jpeg";
import eh7 from "../assets/EH-manish.jpeg";
import eh8 from "../assets/EH-laxmi.jpeg";
import eh9 from "../assets/EH-mohitk.jpeg";
import eh10 from "../assets/EH-shweta.jpeg";
import eh11 from "../assets/EH-mohit.jpeg";
import eh12 from "../assets/EH-daksh.jpeg";
import eh13 from "../assets/EH-sonali.jpeg";
import eh14 from "../assets/EH-akashtt.jpeg";
import eh15 from "../assets/EH-pooja.jpeg";
import eh16 from "../assets/EH-rayan.jpeg";
import eh17 from "../assets/EH-kajal.jpeg";
import eh18 from "../assets/EH-anirudh.jpeg";

/* ---------------- TEAM DATA ---------------- */

const teams = {
  te: [
    { name: "Shivani Dogra", role: "Secretary", image: te1, instagram: "https://www.instagram.com/__shivani.8888" },
    { name: "Dheeraj Pandey", role: "Secretary", image: te2, instagram: "https://www.instagram.com/dheerajpandey5513" },
    { name: "Sanshey", role: "Technical Head", image: te3, instagram: "https://www.instagram.com/09_s.unshine" },
    { name: "Aditya Mahala", role: "Technical Head", image: te4, instagram: "https://www.instagram.com/viper_2324" },
    { name: "Piyush Kumar", role: "Management Head", image: te5, instagram: "https://www.instagram.com/piyushkumar__7" },
    { name: "Keshav Dangi", role: "Social Media Head", image: te6, instagram: "https://www.instagram.com/keshavv_choudhary12" },
    { name: "Ayush Bajetha", role: "Social Media Head", image: te7, instagram: "https://www.instagram.com/ayush_bajetha" },
    { name: "Rahul Tripathi", role: "Technical Head", image: te8, instagram: "https://www.instagram.com/_rahul2k4" },
    { name: "Shivang", role: "Sponsorship Head", image: te9, instagram: "https://www.instagram.com/shiv_xng22" },
    { name: "Kuldeep Bishnoi", role: "Designing Head", image: te10, instagram: "https://www.instagram.com/_rk_15_03" },
    { name: "Lalit Singh", role: "Registration Head", image: te11, instagram: "https://www.instagram.com/lalitsingh2004" },
    { name: "Paramjeet Singh", role: "Treasurer", image: te12, instagram: "https://www.instagram.com/paramjeet.20" },
    { name: "Divyanshi", role: "Management Head", image: te13, instagram: "https://www.instagram.com/_diva_.314" },
    { name: "Aakash", role: "PR Head", image: te14, instagram: "https://www.instagram.com/aakashxyadav_" },
  ],

  faculty: [
    { name: "Mr. Vishal Pardeshi", role: "Physical Director", image: fac1 },
    { name: "Prof. Asha Sathe", role: "Faculty Incharge", image: fac2 },
    { name: "Mrs. Swati Salunkhe", role: "Faculty Member", image: fac3 },
  ],

  se: [
  { name: "Himanshu", role: "Joint Secretary", image: se1, instagram: "https://www.instagram.com/himanshu_r27" },
  { name: "Sagar", role: "Joint Secretary", image: se2, instagram: "https://www.instagram.com/sagar_d_2803" },
  { name: "Yogesh", role: "Joint Secretary", image: se3, instagram: "https://www.instagram.com/jakhar_37" },
  { name: "Ritika", role: "Joint Secretary", image: se4, instagram: "https://www.instagram.com/ritikagautam375" },
  { name: "Mahinder", role: "Joint Secretary", image: se5, instagram: "https://www.instagram.com/jani_the0036" },
  { name: "Shomya", role: "Joint Secretary", image: se6, instagram: "https://www.instagram.com/ranjan.shomya" },
  { name: "Lokesh", role: "Joint Secretary", image: se7, instagram: "https://www.instagram.com/_lokesh_vats" },
  { name: "Aysha", role: "Joint Secretary", image: se8, instagram: "https://www.instagram.com/ayshabisht_12" },
  { name: "Sidhi", role: "Joint Secretary", image: se9, instagram: "https://www.instagram.com/_.siddhiii06" },
  { name: "Navdeep", role: "Joint Secretary", image: se10, instagram: "https://www.instagram.com/_bynv_" },
  { name: "Punit", role: "Joint Secretary", image: se11, instagram: "https://www.instagram.com/punit_phogat16" },
  { name: "Manjeet", role: "Joint Secretary", image: se12, instagram: "https://www.instagram.com/manusingh090" },
  { name: "Rahul", role: "Joint Secretary", image: se13, instagram: "https://www.instagram.com/r.ahul_0018" },
  { name: "Rohan", role: "Joint Secretary", image: se14, instagram: "https://www.instagram.com/rohanchoudhary21" },
  { name: "Lakshya", role: "Joint Secretary", image: se15, instagram: "https://www.instagram.com/lakshya.y_" },
  { name: "Anagha", role: "Joint Secretary", image: se16, instagram: "https://www.instagram.com/_a_nagha_._" },
  { name: "Akash", role: "Joint Secretary", image: se17, instagram: "https://www.instagram.com" },
  { name: "Shivansh", role: "Joint Secretary", image: se18, instagram: "https://www.instagram.com/shivanshhh_28" },
  { name: "Tanu", role: "Joint Secretary", image: se19, instagram: "#" },
],

  event: [
    { name: "Akash", role: "Kabaddi Head", image: eh1 },
    { name: "Millan", role: "Basketball Head", image: eh2 },
    { name: "Ajay", role: "Basketball Head", image: eh3 },
    { name: "Ritika", role: "Squash Head", image: eh4 },
    { name: "Shivani", role: "Badminton Head", image: eh5 },
    { name: "Sunandha", role: "Football Head", image: eh6 },
    { name: "Manish", role: "Football Head", image: eh7 },
    { name: "Laxmi", role: "Volleyball Head", image: eh8 },
    { name: "Mohit", role: "Volleyball Head", image: eh9 },
    { name: "Sweta", role: "Cricket Head", image: eh10 },
    { name: "Mohit", role: "Cricket Head", image: eh11 },
    { name: "Daksh", role: "Badminton Head", image: eh12 },
    { name: "Sonali", role: "Table Tennis Head", image: eh13 },
    { name: "Akash", role: "Table Tennis Head", image: eh14 },
    { name: "Pooja", role: "Lawn Tennis Head", image: eh15 },
    { name: "Rayan", role: "Lawn Tennis Head", image: eh16 },
    { name: "Kajal", role: "Chess Head", image: eh17 },
    { name: "Anirudh", role: "Chess Head", image: eh18 },
  ],
};


/* ---------------- COMPONENT ---------------- */

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("te");
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
    <section id="team-section" className="py-20 px-4">
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
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["te", "faculty", "se","event"].map((tab) => (
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
              {tab === "te"
                ? "TE Members"
                : tab === "faculty"
                ? "Faculty Members"
                : tab === "se"
                ? "SE Members"
              : "Event Heads"}
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
    <div className="relative h-[360px] rounded-2xl overflow-hidden group shadow-xl">
      
      {/* Background Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom Info Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">
            {member.name}
          </h3>
          <p className="text-xs text-zinc-500">
            {member.role}
          </p>
        </div>

        <a
          href={member.instagram}
          target="_blank"
          className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-blue-500 transition"
        >
          <Instagram className="w-4 h-4" />
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
