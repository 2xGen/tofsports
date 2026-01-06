'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Flywheel = () => {
  const [rotation, setRotation] = useState(0);

  const items = [
    { id: 1, label: 'Tennis skills' },
    { id: 2, label: 'Tennis voetenwerk' },
    { id: 3, label: 'Het punt starten' },
    { id: 4, label: 'Racketblad controle' },
    { id: 5, label: 'Plaats op de baan' },
    { id: 6, label: 'Play the game' },
    { id: 7, label: 'Ontvangen en zenden' },
    { id: 8, label: 'Netspel' },
    { id: 9, label: 'Fairplay' },
    { id: 10, label: 'Tennis boost' }
  ];

  const segmentAngle = 360 / items.length;
  const baseMaxRadius = 450;
  const minRadius = 80;
  const layersPerSlice = 5;
  const spiralDropTotal = 40;
  const spiralDropPerDegree = spiralDropTotal / 360;

  const handleNext = () => {
    setRotation(prev => prev - segmentAngle);
  };

  const handlePrev = () => {
    setRotation(prev => prev + segmentAngle);
  };

  return (
    <div className="relative group flex items-center justify-center">
      
      {/* Desktop Controls - Arrows at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 gap-6 hidden md:flex">
         <Button 
            size="icon" 
            variant="outline" 
            onClick={handlePrev} 
            className="rounded-full h-14 w-14 border-2 border-slate-300 bg-white hover:bg-slate-50 shadow-xl hover:scale-125 transition-transform duration-300"
         >
            <ArrowLeft className="h-6 w-6 text-slate-700" />
         </Button>
         <Button 
            size="icon" 
            variant="outline" 
            onClick={handleNext} 
            className="rounded-full h-14 w-14 border-2 border-slate-300 bg-white hover:bg-slate-50 shadow-xl hover:scale-125 transition-transform duration-300"
         >
            <ArrowRight className="h-6 w-6 text-slate-700" />
         </Button>
      </div>

      {/* 
        Mobile Wheel Container
      */}
      <div className="relative w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] md:w-[1000px] md:h-[1000px] lg:w-[1100px] lg:h-[1100px] -ml-[300px] sm:-ml-[250px] md:-ml-[500px] lg:-ml-[550px] overflow-visible transition-all duration-300 md:hover:scale-100 origin-center z-10 hover:z-50">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 30, damping: 25, mass: 1 }}
        >
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(10px 10px 30px rgba(0,0,0,0.15))' }}
          >
            {items.map((item, index) => {
              const startAngleDeg = (index * segmentAngle - 90);
              const endAngleDeg = ((index + 1) * segmentAngle - 90);
              
              const startAngleRad = startAngleDeg * (Math.PI / 180);
              const endAngleRad = endAngleDeg * (Math.PI / 180);

              const radiusAtStart = baseMaxRadius - (index * (segmentAngle * spiralDropPerDegree));
              const radiusAtEnd = baseMaxRadius - ((index + 1) * (segmentAngle * spiralDropPerDegree));

              const centerX = 500;
              const centerY = 500;

              const x1 = centerX + radiusAtStart * Math.cos(startAngleRad);
              const y1 = centerX + radiusAtStart * Math.sin(startAngleRad);
              const x2 = centerX + radiusAtEnd * Math.cos(endAngleRad);
              const y2 = centerX + radiusAtEnd * Math.sin(endAngleRad);
              
              const x3 = centerX + minRadius * Math.cos(endAngleRad);
              const y3 = centerX + minRadius * Math.sin(endAngleRad);
              const x4 = centerX + minRadius * Math.cos(startAngleRad);
              const y4 = centerX + minRadius * Math.sin(startAngleRad);

              const steps = [];
              
              for (let i = 1; i < layersPerSlice; i++) {
                 const ratio = i / layersPerSlice;
                 const rStart = radiusAtStart - (radiusAtStart - minRadius) * ratio;
                 const rEnd = radiusAtEnd - (radiusAtEnd - minRadius) * ratio;
                 
                 const sx = centerX + rStart * Math.cos(startAngleRad);
                 const sy = centerX + rStart * Math.sin(startAngleRad);
                 const ex = centerX + rEnd * Math.cos(endAngleRad);
                 const ey = centerX + rEnd * Math.sin(endAngleRad);
                 
                 steps.push(
                    <path
                        key={`step-${index}-${i}`}
                        d={`M ${sx} ${sy} A ${rEnd} ${rEnd} 0 0 1 ${ex} ${ey}`}
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        opacity="0.15"
                    />
                 );
              }

              const pathData = `
                M ${x1} ${y1}
                A ${radiusAtEnd} ${radiusAtEnd} 0 0 1 ${x2} ${y2}
                L ${x3} ${y3}
                A ${minRadius} ${minRadius} 0 0 0 ${x4} ${y4}
                Z
              `;
              
              const midAngleRad = startAngleRad + (segmentAngle * Math.PI / 180) / 2;
              const midRadius = (radiusAtStart + radiusAtEnd + minRadius + minRadius) / 4;
              const textRadius = midRadius + 20; 
              
              const textX = centerX + textRadius * Math.cos(midAngleRad);
              const textY = centerX + textRadius * Math.sin(midAngleRad);
              
              const segmentCenterAngle = (index * segmentAngle - 90 + segmentAngle/2);

              const isEven = index % 2 === 0;
              const baseColor = isEven ? '#7C9ADD' : '#8daed9';

              return (
                <g 
                  key={item.id} 
                  className="transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
                  style={{ transformOrigin: '500px 500px' }}
                >
                  <path
                    d={pathData}
                    fill={baseColor}
                    stroke="white"
                    strokeWidth="2"
                    className="transition-colors hover:brightness-110"
                  />
                  
                  {steps}

                  <text
                    x={textX}
                    y={textY}
                    fill="white"
                    fontSize="16" 
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${segmentCenterAngle}, ${textX}, ${textY})`}
                    className="pointer-events-none font-sans uppercase tracking-widest"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    <tspan x={textX} dy="0">{item.label}</tspan>
                  </text>
                </g>
              );
            })}
            
            <circle cx="500" cy="500" r="50" fill="#FFD93D" stroke="white" strokeWidth="4" />
            <circle cx="500" cy="500" r="20" fill="white" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Desktop Curved Arrow Overlay */}
        <svg 
            className="absolute inset-0 pointer-events-none overflow-visible z-20 hidden md:block" 
            viewBox="0 0 1000 1000"
        >
            <g 
                className="cursor-pointer pointer-events-auto group/arrow transition-all duration-300 hover:scale-125 origin-[980px_500px]"
                onClick={handleNext}
            >
                {/* Hit area */}
                <path
                    d="M 980 400 A 480 480 0 0 1 980 600"
                    fill="none"
                    stroke="transparent"
                    strokeWidth="80"
                />
                <path
                    d="M 980 400 A 480 480 0 0 1 980 600"
                    fill="none"
                    stroke="#7C9ADD"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="drop-shadow-lg group-hover/arrow:stroke-blue-600 transition-colors"
                />
                <path
                    d="M 980 600 L 950 565 L 1010 565 Z"
                    fill="#7C9ADD"
                    className="drop-shadow-lg group-hover/arrow:fill-blue-600 transition-colors"
                    transform="rotate(12, 980, 600)"
                />
            </g>
        </svg>

        {/* Mobile Arrow Button (Modified) */}
        {/* 
            Changes:
            - Moved further right (cx="980" instead of cx="940") 
            - Added slight curve matching wheel curvature
            - Made arrow narrower (strokeWidth="8") and longer (path extends further)
        */}
        <svg 
            className="absolute inset-0 pointer-events-none overflow-visible z-50 md:hidden" 
            viewBox="0 0 1000 1000"
        >
            <g 
               onClick={(e) => {
                 e.stopPropagation();
                 handleNext();
               }}
               className="pointer-events-auto cursor-pointer transition-transform duration-200 active:scale-90 hover:scale-125"
               style={{ transformOrigin: '980px 500px' }}
            >
               {/* Hit Area (Invisible but clickable) */}
               <rect 
                  x="920" y="420" width="120" height="160" 
                  fill="transparent" 
               />

               {/* Narrower, longer, slightly curved arrow pointing down */}
               <path 
                 d="M 980 440 Q 970 490 980 540" 
                 fill="none"
                 stroke="#7C9ADD"
                 strokeWidth="8"
                 strokeLinecap="round"
                 style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
               />
               
               {/* Arrow Head pointing down, aligned with end of path */}
               <path 
                 d="M 980 560 L 965 530 L 995 530 Z"
                 fill="#7C9ADD"
                 style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
               />
            </g>
        </svg>

      </div>
    </div>
  );
};

export default Flywheel;