import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function DemoVideoSection({ onOpenDemo }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF]" id="demo-video">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            See Neno Dialer In Action
          </h2>
          <p className="reveal-on-scroll text-sm sm:text-base text-[#475569] mt-2 stagger-1">
            A quick, real-time walkthrough experience of web-based calling workflows.
          </p>
        </div>

        {/* Video Player Mockup Container */}
        <div className="reveal-on-scroll max-w-4xl mx-auto bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-[#1E293B] stagger-2">
          
          {!isPlaying ? (
            /* Main Video Stage Cover */
            <div 
              onClick={() => setIsPlaying(true)}
              className="relative aspect-video w-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] flex flex-col items-center justify-center cursor-pointer group p-6"
            >
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

              {/* Play Button Icon */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-[#2563EB] group-hover:bg-[#1D4ED8] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg border-4 border-white/20 mb-4">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>

              <span className="relative z-10 text-xs font-mono tracking-widest text-white/80 uppercase font-bold group-hover:text-white transition-colors bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                ► Watch Product Overview Video
              </span>

              {/* Simulated UI background graphics */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] text-slate-400 font-mono pointer-events-none">
                <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">100% WebRTC Stream</span>
                <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">HD FLAC Audio</span>
              </div>
            </div>
          ) : (
            /* Live Video Player */
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video 
                src="/demo.mp4"
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
