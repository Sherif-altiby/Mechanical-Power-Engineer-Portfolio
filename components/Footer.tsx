"use client";
import React from 'react';
import Link from 'next/link';
import { TbFileDownload, TbBrandLinkedin, TbBrandFacebook, TbMail } from 'react-icons/tb';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="group cursor-default mb-6">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-black tracking-tighter text-2xl uppercase leading-none">
                  Mohamed
                </span>
                <span className="text-zinc-500 font-light tracking-tighter text-2xl uppercase leading-none">
                  Hadhoud
                </span>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 tracking-[0.4em] uppercase mt-2">
                Mechanical_BIM_Engineer
              </p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Specialized in high-end mechanical coordination and digital twins through BIM methodologies.
            </p>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-xs   tracking-widest mb-8 text-zinc-700">Connect</h4>
            <div className="flex flex-col gap-4">
              <Link href="https://www.linkedin.com/in/mohamed-hadhoud-360844293/" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-[#d4ff3f] transition-all">
                <TbBrandLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono   tracking-widest">LinkedIn</span>
              </Link>
              <Link href="https://www.facebook.com/share/1GQuQ8fbxZ/" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-[#d4ff3f] transition-all">
                <TbBrandFacebook size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono   tracking-widest">Facebook</span>
              </Link>
              <Link href="mailto:meltiebe@gmail.com" className="group flex items-center gap-3 text-zinc-400 hover:text-[#d4ff3f] transition-all">
                <TbMail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono   tracking-widest"> meltiebe@gmail.com  </span>
              </Link>
            </div>
          </div>

          {/* CV / Action Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 text-zinc-700">Resources</h4>
            <Link 
              href="https://drive.google.com/file/d/1vC3Bl3I67jCp-gW48HckaLKvsTUYq57B/view?usp=sharing" 
              target="_blank"
              className="group flex items-center justify-between p-4 border border-white/5 rounded-2xl bg-white/[0.02] hover:border-[#d4ff3f]/40 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Curriculum Vitae</span>
                <span className="text-zinc-600 text-[9px] font-mono uppercase">PDF // 2.4MB</span>
              </div>
              <TbFileDownload className="text-zinc-500 group-hover:text-[#d4ff3f] transition-colors" size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex   justify-center items-center gap-4">
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">
            © {currentYear} // All_Rights_Reserved
          </p>
          {/* <div className="flex items-center gap-6">
            <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">
              Built_by: <span className="text-white">Sherif_Altiby</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff3f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff3f]"></span>
              </span>
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">Server_Active</span>
            </div>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;