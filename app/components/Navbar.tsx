import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 font-Poppins">
      <div className=" mx-auto flex items-center justify-between">
        
        <div className="shrink-0">
          <div className="relative w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-black rotate-45 transform scale-75 rounded-sm"></div>
            <span className="relative text-black font-bold text-[10px] tracking-tighter">Design</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8 ml-150">
          <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-blue-600 tracking-wide uppercase">
            Who We Serve
          </Link>
          <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-blue-600 tracking-wide uppercase">
            Solutions
          </Link>
          <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-blue-600 tracking-wide uppercase">
            Resources
          </Link>
          <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-blue-600 tracking-wide uppercase">
            About Us
          </Link>
          <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-blue-600 tracking-wide uppercase">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-slate-800">
          <button className="hover:text-blue-600 transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-[13px] font-bold uppercase tracking-wider">Ind</span>
            <ChevronDown size={16} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-[13px] font-bold uppercase tracking-wider">English</span>
            <ChevronDown size={16} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;