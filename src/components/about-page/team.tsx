"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Linkedin } from "lucide-react";

// Define the type for each team member
interface TeamMember {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    description: string;
    quote: string;
    quotename?: string; // Optional, in case some members don't have a quote
}

const team: TeamMember[] = [
    {
        name: "Sanju Peramuna Arachchi",
        role: "Chief Executive Officer | AI Strategist | Product Innovator",
        image: "/team/sanju.jpg",
        linkedin: "https://www.linkedin.com/in/sanju-peramuna-arachchi/",
        description:
            `Sanju is the driving force behind Aenigm3 Labs’ bold transformation from a traditional digital marketing agency into a future-focused, AI-powered CRO powerhouse. With a strong background in web and software development, he now leads the vision, strategy, and development of in-house AI products that align directly with the agency’s mission—helping clients achieve practical, measurable, and ROI-focused growth.
             As CEO, Sanju doesn’t just oversee operations—he builds and innovates. His work in AI product development and testing plays a crucial role in how the agency continuously adapts to industry shifts and stays ahead of the curve. He is also responsible for leading high-value client acquisition and driving partnerships across both local and global markets.
            Beyond strategy and innovation, Sanju is passionate about mentoring. He takes a hands-on approach to team development, empowering every member at Aenigm3 Labs to think bigger, stay agile, and sharpen their skills. His experience as a Venture Partner at Founder Institute South Asia also reflects his dedication to supporting emerging founders and building ecosystems that fuel innovation across the region.`,
        quote: `“Disruption doesn’t scare me—stagnation does.” – Sanju Peramuna Arachchi`,
        quotename: "-Sanju Peramuna Arachchi"

    },
    {
        name: "Chamo Hewawasam",
        role: `Chief Operating Officer | Prompt Engineer | People-Centered Strategist`,
        image: "/team/chamo.jpeg",
        linkedin: "https://www.linkedin.com/in/chamo-hewawasam/",
        description:
            `Chamo is the backbone of Aenigm3 Labs’ operations, ensuring that strategy meets execution across every project. As COO, she oversees the day-to-day workflow of the agency—coordinating teams, monitoring performance, and ensuring that everything from campaign execution to website development is delivered with precision and purpose.
             Her work goes beyond traditional operations. With a strong understanding of AI tools and prompt engineering, Chamo stays ahead of industry changes, constantly monitoring AI updates and adapting the agency’s offerings to match. She plays a key role in integrating AI features into internal processes, campaign strategies, and client services—making sure the technology works not just in theory, but in real-world application.
             Chamo’s people-first mindset ensures that client relationships remain strong, transparent, and productive. She’s deeply involved in project onboarding, strategy sessions, and performance reviews, while also managing contracts, freelancers, and internal processes with clarity and care. Her unique ability to balance structure, creativity, and empathy makes her an essential part of Aenigm3 Labs’ growth journey.`,
        quote: `“Stay curious, stay steady—because growth only happens when you lean into change.” `,
        quotename: "- Chamo Hewawasam"

    },
    {
        name: "Chrislo Perera",
        role: `Chief Administrative Officer | Tech-Savvy Strategist | Sales & Systems Integrator`,
        image: "/team/chrislo.jpeg",
        linkedin: "https://www.linkedin.com/in/chrislo-perera/",
        description:
            `Chrislo is the steady hand behind Aenigm3 Labs' internal structure, ensuring that the engine of the company runs smoothly while also playing a vital role in driving sales. With a background in Business Information Systems and years of experience in both sales and IT infrastructure, Chrislo bridges the gap between internal operations and external growth.
             As CAO, he oversees core administrative functions—including HR, IT, and legal—making sure every part of the business is aligned, compliant, and efficient. But his impact doesn't stop there. Chrislo is also an active and essential part of the sales team, contributing to client acquisition strategies and bringing a technical edge to customer interactions and solution-building.
             Before joining Aenigm3 Labs, Chrislo worked across the IT and hospitality technology space, where he gained experience in systems installation, ERP implementation, and network configuration. That foundation gives him a sharp eye for process improvement and the ability to support fast-growing teams with reliable systems and clear workflows.
             Whether he's resolving an operational challenge, contributing to a sales pitch, or setting up infrastructure for scale, Chrislo is always working behind the scenes to keep the business moving forward—quietly powerful, tech-savvy, and results-oriented.`,

        quote: `“The right system doesn't just make things easier—it makes everything possible.”`,
        quotename: "- Chrislo Perera"

    },
    {
        name: "Sandali Perera",
        role: `Project and Administrative Manager`,
        image: "/team/sandali1.jpg",
        linkedin: "https://www.linkedin.com/in/sandali-perera-6708ba324/",
        description:
            `With a background rooted in education and a natural talent for problem-solving, Sandali plays a vital role in keeping the internal gears of Aenigm3 Labs turning smoothly. She supports the leadership and project teams by managing task coordination, internal scheduling, and administrative operations, ensuring everything stays organized and on track.
             Her experience as a primary school teacher has sharpened her adaptability, patience, and communication skills—traits that now translate into her work managing internal resources, updating progress across departments, and keeping documentation aligned. Sandali is also a key point of contact across HR, internal training, and backend coordination—ensuring our growing team stays focused, supported, and in sync.`,

        quote: `“Behind every smooth operation is someone making sure nothing gets left behind.” `,
        quotename: "- Sandali Perera"

    },
    {
        name: "Anjana Kalpa",
        role: `Creative Designer & Director`,
        image: "/team/anjana.jpeg",
        linkedin: "https://www.linkedin.com/in/anjana-kalpa-77892b358/",
        description:
            `Anjana is the visionary behind Aenigm3 Labs’ creative output. With over a decade of multidisciplinary experience spanning photography, UI/UX, visual communication, and software engineering, he crafts brand identities, digital experiences, and campaign visuals that not only look good—but convert.
             From developing visual storyboards and ad creatives to designing intuitive interfaces and marketing visuals, Anjana ensures that each creative asset reflects the agency’s values and the client’s voice. He draws from his background in both design and technology, making him uniquely positioned to bridge aesthetics with functionality. Whether it’s a social media campaign, a landing page, or a full-blown product concept, Anjana approaches every project with detail, emotion, and creative strategy.`,

        quote: `“Design isn’t just how it looks—it’s how it makes people feel, think, and act.” `,
        quotename: "- Anjana Kalpa"

    },
    {
        name: "Lashen Yasawardhana",
        role: `Junior Software & Product Developer`,
        image: "/team/lashen1.jpg",
        linkedin: "https://www.linkedin.com/in/lashen-yasawardhana-855352261/",
        description:
            `At just 19 years old, Lashen is one of Aenigm3 Labs’ most promising young talents. With a deep interest in AI, machine learning, and software development, he has rapidly gained experience in tools like Python, HTML, CSS, and sentiment analysis models—most of which he pursued through self-learning and online certifications from institutions like IBM and the University of Moratuwa.
             Lashen is actively involved in the research and prototyping of AI-powered tools within the agency, supporting the development of intelligent systems that align with client goals and CRO strategies. His participation in hackathons and project-based learning reflects not just technical competence but also initiative and a strong drive to grow in a fast-paced tech landscape. His energy, curiosity, and futuristic thinking bring fresh perspective and youthful momentum to the product team.`,

        quote: `“The future belongs to those who build it—one line of code at a time.” `,
        quotename: "- Lashen Yasawardhana"

    },
    
];

export default function LeadershipTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const firstRow = team.slice(0, 4);
  const secondRow = team.slice(4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center" id="leadership-team">
      <h2 className="text-4xl font-bold mb-12">
        Meet Our <span className="text-pink-600">Leadership Team</span>
      </h2>

      {/* First row: 4 members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {firstRow.map((member, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer p-4 rounded-lg hover:shadow-lg transition border w-full max-w-xs flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="mt-3 text-base font-medium text-center">{member.name}</h3>
            <p className="text-sm text-gray-500 text-center">{member.role}</p>
            <div className="mt-2">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-blue-600 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second row: center 2 remaining members */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {secondRow.map((member, idx) => (
          <div
            key={idx + 4}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer p-4 rounded-lg hover:shadow-lg transition border w-full max-w-xs flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="mt-3 text-base font-medium text-center">{member.name}</h3>
            <p className="text-sm text-gray-500 text-center">{member.role}</p>
            <div className="mt-2">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-blue-600 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Dialog */}
      <Dialog
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4 bg-black/40">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-5xl w-full overflow-y-auto max-h-[100vh] relative">
            {selectedMember && (
              <>
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <Dialog.Title className="text-xl font-bold text-center">
                  {selectedMember.name}
                </Dialog.Title>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {selectedMember.role}
                </p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {selectedMember.description}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {selectedMember.quote}
                </h3>
                <p className="text-sm text-gray-500 text-right mt-2">
                  {selectedMember.quotename || "– " + selectedMember.name} 
                </p>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-black"
                  onClick={() => setSelectedMember(null)}
                >
                  ✕
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Prevent Scroll When Modal Open */}
      <style>{`
        body { overflow: ${selectedMember ? "hidden" : "auto"}; }
      `}</style>
    </section>
  );
}
