import React from 'react';
import banner2 from '../assets/bannerr/2.png';
import banner3 from '../assets/bannerr/3.png';
import banner4 from '../assets/bannerr/4.png';
import { CheckCircle2 } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: banner2,
    title: "How to Setup a",
    highlight: "Printer",
    steps: [
      "Unbox the printer and remove all packaging materials",
      "Connect the power cable and turn on the printer",
      "Install the ink or toner cartridges correctly",
      "Load paper into the paper tray",
      "Install the printer driver on your computer",
      "Print a test page to check the setup"
    ]
  },
  {
    id: 2,
    image: banner3,
    title: "How to Connect a Printer to",
    highlight: "Wi-Fi",
    steps: [
      "Turn on the printer and open the network settings",
      "Select the wireless setup option",
      "Choose your Wi-Fi network from the list",
      "Enter the Wi-Fi password",
      "Install the printer software on your device",
      "Print a test page to confirm the connection"
    ]
  }
  ,{
  id: 3,
  image: banner4,
  title: "How to Fix Printer",
  highlight: "Offline Issue",
  steps: [
    "Check USB or Wi-Fi connection",
    "Restart the printer and router",
    "Set the printer as Default Printer",
    "Disable “Use Printer Offline” option",
    "Update the printer drivers",
    "Run the printer troubleshooter"
  ]
}
];

const Hero2 = () => {
  // Function to open JivoChat
  const handleChatOpen = () => {
    if (window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <section className="w-full bg-white font-urbanist">
      {/* Container with 10px gap between banners */}
      <div className="w-full flex flex-col gap-[10px]">
        
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative w-full h-[600px] md:h-[750px] overflow-hidden group border-b border-slate-100"
          >
            {/* Full-width and Full-height Background Image */}
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover transition-transform duration-1000"
            />
            
            {/* Glassmorphism Content Box (Sharp, No Shadow, No Rounded Corners) */}
            <div className="absolute inset-0 flex items-center px-6 md:px-24 bg-black/10">
              {/* Added onMouseEnter to trigger chat */}
              <div 
                onMouseEnter={handleChatOpen}
                className="max-w-4xl p-10 md:p-10 bg-black/20 backdrop-blur-xl cursor-pointer transition-all hover:bg-black/50"
              >
                <div className="flex flex-col space-y-4">
                  {/* Title (Capitalized) */}
                  <h2 className="text-5xl md:text-[45px] font-black text-white capitalize">
                    {banner.title} <span className="text-amber-400">{banner.highlight}</span>
                  </h2>
                  
                  {/* Setup Steps (Bullet Points) */}
                  <ul className="space-y-1 pt-2">
                    {banner.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white">
                        <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-1" />
                        <span className="text-xl md:text-[18px] font-semibold">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Hero2;
