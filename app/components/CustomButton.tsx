import { MoveRight } from 'lucide-react'
import React from 'react'

interface PropsInterface {
  text: string;
  icon?: boolean;
}

export const CustomButton:React.FC<PropsInterface> = ({text, icon}) => {
  return (
    <button className="relative w-fit group">
            {icon && <MoveRight className="absolute inset-0 flex items-center top-3 left-5 justify-center font-bold text-xs text-black" />}
            <svg
              width="206"
              height="49"
              viewBox="0 0 260 70"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-200"
            >
              <path
                d="M10 0 
                  H190 
                  Q200 0 205 10 
                  L250 60 
                  Q255 70 240 70 
                  H10 
                  Q0 70 0 60 
                  V10 
                  Q0 0 10 0 Z"
                fill="#FF7900"
                className="group-hover:fill-[#E66D00]"
              />
            </svg>

            <span className="absolute inset-0 flex items-center right-2 justify-center font-bold text-xs text-black">
              {text}
            </span>
          </button>
  )
}
