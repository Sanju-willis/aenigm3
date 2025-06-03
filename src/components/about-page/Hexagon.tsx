// src\components\about-page\Hexagon.tsx
import { useState } from "react";
import Image from "next/image";

const hexData = [
  {
    id: 1,
    image: "/hexagons/Icons-1.png",
    title: "Aenigm3 Labs",
    content: "Aenigm3 Labs didn’t start as some grand vision. It started with a phone call during the pandemic—a simple chat about investing in a digital agency to help with other ventures. But the more we looked around, the more we realized something was off.\n\nEvery agency looked good on the outside… but when it came to real, meaningful results? They just weren’t there. So we thought: why not build something better ourselves?"
  },
  {
    id: 2,
    image: "/hexagons/Icons-2.png",
    title: "Where We Began: Digital, Like Everyone Else",
    content: "We started as a traditional digital marketing agency. Ads, content, social media—the usual stuff. We brought in experienced people, ran campaigns, followed the playbook.\n\nBut two years in, we hit a wall.\n\nDespite the effort, we kept seeing the same pattern—businesses spending more and getting less. Digital marketing was starting to feel more like an expense than an investment. We weren’t okay with that."
  },
  {
    id: 3,
    image: "/hexagons/Icons-3.png",
    title: "Our First Big Shift: Growth Marketing",
    content: "So in early 2024, we scrapped the fluff and rebuilt around one goal:**growth**.\n\nWe stopped focusing on vanity metrics and started caring about what actually mattered—revenue, leads, engagement that meant something. We mapped out the full funnel, started measuring everything, and put ROI at the center of our strategy.\n\nThings started clicking. Clients saw the difference. We finally felt like we were solving the right problems.\n\nBut then… things changed again."
  },
  {
    id: 4,
    image: "/hexagons/Icons-4.png",
    title: "A Setback That Shifted Our Focus",
    content: "Around this time, one of our co-founders stepped away to focus on another venture.\n\nIt was a hard moment. Losing a piece of the original team always hits a little deeper than you expect. And for a bit, we slowed down.\n\nBut that pause gave us space to ask, _what’s next?_"
  },
  {
    id: 5,
    image: "/hexagons/Icons-5.png",
    title: "The Second Pivot: From More Traffic to More Conversions",
    content: `That’s when we realized: most businesses don’t need more traffic—they need more from the traffic they already have.\n\nWe shifted again—this time, into **Conversion Rate Optimization (CRO)**. We started diving deep into:\n\n- What’s stopping people from buying?\n- Where are users dropping off?\n- How do we design smarter, not just prettier?\n\nIt wasn’t just about attracting attention anymore. It was about turning that attention into action. And it worked.`
  },
  {
    id: 6,
    image: "/hexagons/Icons-6.png",
    title: "Now: Where CRO Meets AI",
    content: "Once we had CRO in place, the next step became obvious: **scale needed intelligence.** And in today’s world, that means one thing—**AI.**\n\nEverything around us is evolving with AI. Marketing, development, customer experience—none of it can truly scale without it anymore. And the businesses that don’t adapt? They’ll be left behind.\n\nAt Aenigm3 Labs, we’ve embraced that reality. We’re integrating AI into every layer of what we do:\n\n- Smarter A/B testing\n- Predictive audience targeting\n- Real-time behavioral insights\n- Automated CRO workflows\n- Hyper-personalized content delivery\n\nAI isn’t a tool—it’s the engine that drives **scalable, sustainable growth.** And it’s the core of where we’re headed next."
  },
  {
    id: 7,
    image: "/hexagons/Icons-7.png",
    title: "Why We’ve Evolved (More Than Once)",
    content: `Simple: we’ve never been okay with "just good enough."

                - Digital wasn’t enough → we pivoted to growth  
                - Growth without conversions? → we focused on CRO  
                - CRO needed scale → we brought in AI

               We’ll keep shifting, testing, and improving—because that's what real growth looks like.`
  },
  {
    id: 8,
    image: "/hexagons/Icons-8.png",
    title: "What Keeps Us Going",
    content: `-Solving problems with real data (not guesses)\n- Building systems that keep working long after we step back\n- Staying ahead of trends, tools, and tech\n- And always asking, how can we do this better?\n\nWe’re not here to just "manage" marketing. We’re here to make it **matter.**`
  },
  {
    id: 9,
    image: "/hexagons/Icons-9.png",
    title: "Looking Ahead",
    content: `Our goal? To become one of the top CRO and AI-led marketing labs in the world.

              We’re building for what’s next:

               - Smarter websites 
               - Smarter campaigns 
               - Smarter decisions

              We help brands go from seen to remembered, from clicked to converted, and from busy to **better.**

               And we’re just getting started.`
  },
];

const renderFormattedText = (text: string) => {
  return text.split('\n\n').map((para, i) => {
    // Check if it's a list block
    if (para.trim().startsWith('-')) {
      const items = para.split('\n').filter(line => line.trim().startsWith('-'));
      return (
        <ul key={i} className="list-disc list-inside mb-4 text-gray-700">
          {items.map((item, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/^- /, '')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // bold
                  .replace(/_(.*?)_/g, '<em>$1</em>') // italic
              }}
            />
          ))}
        </ul>
      );
    }

    // Normal paragraph
    const html = para
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // bold
      .replace(/_(.*?)_/g, '<em>$1</em>'); // italic

    return (
      <p key={i} className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: html }} />
    );
  });
};


export default function HexagonGrid() {
  interface HexItem {
    id: number;
    image: string;
    title: string;
    content: string;
  }
  const [activeHex, setActiveHex] = useState<HexItem | null>(null);

  const rowGroups = [
    hexData.slice(0, 4),
    hexData.slice(4, 7),
    hexData.slice(7, 9),
  ];

  return (
    <section className="global-section">
      <div className="relative flex flex-col items-center gap-8 mt-5 px-4">
        {rowGroups.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap justify-center gap-3
            ${rowIndex === 1 ? 'mt-[-30px] sm:mt-[-40px]' : ''}
            ${rowIndex === 2 ? 'mt-[-30px] sm:mt-[-40px]' : ''}`}
          >
            {row.map((hex) => (
              <div
                key={hex.id}
                className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveHex(hex)}
              >
                <Image src={hex.image} alt={hex.title} fill className="object-contain" />
              </div>
            ))}
          </div>
        ))}

        {activeHex && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50 px-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg max-w-lg w-full text-center relative">
              <button
                className="absolute top-2 right-2 text-black text-xl"
                onClick={() => setActiveHex(null)}
              >
                &times;
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-boldpink  mb-4">{activeHex.title}</h2>
              <div className="text-sm sm:text-base text-gray-700 text-left">
                {renderFormattedText(activeHex.content)}
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-500 mt-10 mb-6">
          Aenigma3 decodes what others miss!<br/>
          Just Like the Enigma before it.
        </h2>
        
      </div>
    </section>

  );
}
