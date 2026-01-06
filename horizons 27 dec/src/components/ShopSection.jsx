'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const ShopSection = () => {
  const items = [
    {
      id: 1,
      name: "PIRAMIDE TENNIS",
      price: "€79,95",
      image: "https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Piramide%2021-1.png",
      link: "/webshop?category=tennis"
    },
    {
      id: 2,
      name: "4 OP EEN RIJ",
      price: "€84,95",
      image: "https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%204%20OP%201%20RIJ-1.png",
      link: "/webshop?category=tennis"
    },
    {
      id: 3,
      name: "PADEL PIRAMIDE",
      price: "€79,95",
      image: "https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20Piramide%2021-1.png",
      link: "/webshop?category=padel"
    }
  ];

  return (
    <section className="py-24 relative">
       {/* Clearly visible background pattern - Distinct from Products section */}
      <div className="absolute inset-0 bg-indigo-50/80 z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(79, 70, 229, 0.15) 1.5px, transparent 1.5px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-12">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Onze Webshop</h2>
              <p className="text-gray-500 text-lg">Professionele uitrusting voor elke speler</p>
           </motion.div>
           
           <Button asChild variant="outline" className="hidden md:flex gap-2 bg-white/50 backdrop-blur-sm border-slate-300 hover:bg-white">
             <Link href="/webshop">
               Bekijk alle artikelen <ArrowRight className="h-4 w-4"/>
             </Link>
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
             <Link key={item.id} href={item.link}>
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group cursor-pointer"
               >
                 <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md mb-4 border border-indigo-100">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <Button size="icon" className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full h-10 w-10 shadow-lg z-10">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900">{item.name}</h3>
                 <p className="text-blue-600 font-semibold">{item.price}</p>
               </motion.div>
             </Link>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Button asChild className="w-full gap-2" size="lg">
             <Link href="/webshop">
               Bekijk alle artikelen <ArrowRight className="h-4 w-4"/>
             </Link>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;