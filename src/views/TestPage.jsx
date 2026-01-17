'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue } from 'framer-motion';
import { ChevronDown, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const TestPage = () => {
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const cardsRef = useRef(null);
  const cards2Ref = useRef(null);
  const buttonsRef = useRef(null);

  // Scroll progress for various sections
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  return (
    <div className="relative">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection ref={heroRef} scrollYProgress={heroScroll} />

      {/* Info Section */}
      <InfoSection ref={infoRef} />

      {/* Cards Section 1 */}
      <CardsSection1 ref={cardsRef} />

      {/* Cards Section 2 */}
      <CardsSection2 ref={cards2Ref} />

      {/* Buttons Section */}
      <ButtonsSection ref={buttonsRef} />
    </div>
  );
};

// Fixed Header Component
const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] bg-[#C5DFDF] shadow-[0_-30px_10px_rgba(0,0,0,0.5)]"
      style={{
        minHeight: '6vh',
        width: '100%',
        boxSizing: 'border-box'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4" style={{ width: '90%', maxWidth: '100%' }}>
        <div className="flex flex-row items-center justify-between h-full" style={{ minHeight: '6vh' }}>
          {/* Logo Container - 15% width */}
          <div className="flex items-end" style={{ width: '15%' }}>
            <Link href="/" className="hidden md:block">
              <motion.img
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOFtennissitelogo.svg"
                alt="TOF Tennis Logo"
                className="h-[60px] w-auto"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>
          </div>

          {/* Menu Container - 70% width */}
          <div className="flex items-center justify-center" style={{ width: '70%' }}>
            <nav className="hidden md:flex items-end gap-4">
              <a href="#part2" className="text-[#1B144C] font-poppins text-[0.7em] hover:text-[#1B144C] px-[10px] border-b border-dashed border-[#1B144C]">
                Menu Item 1
              </a>
              <a href="#part3" className="text-[#1B144C] font-poppins text-[0.7em] hover:text-[#1B144C] px-[10px] border-b border-dashed border-[#1B144C]">
                Menu Item 2
              </a>
              <a href="#part4" className="text-[#1B144C] font-poppins text-[0.7em] hover:text-[#1B144C] px-[10px] border-b border-dashed border-[#1B144C]">
                Menu Item 3
              </a>
            </nav>
            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-[#1B144C] text-xl">
              ☰
            </button>
          </div>

          {/* Social Icons Container - 15% width */}
          <div className="flex items-start justify-end" style={{ width: '15%' }}>
            <div className="hidden md:flex items-center gap-[15px]">
              <a href="https://www.instagram.com/toftennis/" target="_blank" rel="noopener noreferrer" className="text-[#1B144C] hover:text-[#F2A41E] transition-colors">
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Instagram className="w-[30px] h-[30px]" />
                </motion.div>
              </a>
              <a href="https://www.facebook.com/toftennis/" target="_blank" rel="noopener noreferrer" className="text-[#1B144C] hover:text-[#F2A41E] transition-colors">
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Facebook className="w-[30px] h-[30px]" />
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Hero Section Component
const HeroSection = React.forwardRef((props, ref) => {
  const { scrollYProgress } = props || {};
  const heroInView = useInView(ref, { once: false, amount: 0.3 });

  // Create fallback motion value if scrollYProgress is not available
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress || defaultProgress;

  // Background gradient with motion effects
  const bgScale = useTransform(progress, [0, 1], [1.08, 0.88]);
  const bgBlur = useTransform(progress, [0, 1], [0, 3]);

  return (
    <section
      ref={ref}
      id="part1"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #B4FFC8 0%, #B4FFC8 57%, transparent 0%)',
        backgroundSize: '93vw 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #C5DFDF 0%, #C5DFDF 24%, #EEEEEE 13%, transparent 100%)',
          y: 251,
          opacity: 1,
          scale: bgScale,
          filter: `blur(${bgBlur}px)`
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full" style={{ marginTop: '50px' }}>
        {/* TOFTennis Container */}
        <motion.div
          className="flex flex-col items-center justify-center overflow-hidden"
          style={{ width: '712px', maxWidth: '90%' }}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6, delay: 0.2 }}
            style={{ marginBottom: '-32px' }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg"
                  alt="TOF Logo"
                  className="w-[350px] md:w-[350px]"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Tennis Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="text-right font-poppins font-bold text-[8em] md:text-[8em] text-[#1B144C]"
            style={{ marginTop: '-13px', alignSelf: 'flex-end' }}
          >
            Tennis
          </motion.h1>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-right font-poppins font-medium text-[1.6em] text-[#1B144C]"
            style={{ marginTop: '-16px', alignSelf: 'flex-end' }}
          >
            Official KNLTB Tenniskids partner
          </motion.h3>
        </motion.div>

        {/* Tennis Ball with Curve Section */}
        <div
          className="relative w-full flex items-end justify-center"
          style={{
            minHeight: '30vh',
            marginTop: '0%'
          }}
        >
          {/* Tennis Ball Image */}
          <TennisBallImage scrollYProgress={scrollYProgress} />

          {/* Curved Shape Divider */}
          <div className="absolute bottom-0 left-0 right-0" style={{ width: '200%', height: '500px', transform: 'translateX(-25%) scaleX(-1)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,500 Q250,0 500,250 T1000,250 L1000,500 L0,500 Z"
                fill="#EEEEEE"
                style={{ transform: 'scaleY(-1)' }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part2"
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 text-[#1B144C]"
        style={{ fontSize: '35px' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-[35px] w-[35px]" />
        </motion.div>
      </motion.a>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';

// Tennis Ball Image Component
const TennisBallImage = ({ scrollYProgress }) => {
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress || defaultProgress;
  const x = useTransform(progress, [0, 1], [326, -100]);
  const rotate = useTransform(progress, [0, 1], [0, -360 * 3.7]);

  return (
    <motion.div
      className="absolute"
      style={{
        right: 0,
        bottom: 0,
        x: x,
        rotate: rotate
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.5 }}
      >
        <img
          src="https://toftennis.nl/wp-content/uploads/2024/05/3.png"
          alt="Tennis Ball"
          className="w-[228px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

// Info Section Component
const InfoSection = React.forwardRef((props, ref) => {
  const sectionInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="part2"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: '#1B144C',
        backgroundImage: 'url(https://toftennis.nl/wp-content/uploads/2024/04/Blauwe-bal-150x150.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '80px 80px',
        paddingTop: '300px',
        paddingBottom: '300px'
      }}
    >
      {/* Background Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(62, 200, 188, 0.93) 0%, rgba(62, 200, 188, 0.93) 64%, rgba(180, 255, 200, 1) 100%)',
          opacity: 0.93
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4" style={{ width: '90%', maxWidth: '100%' }}>
        <div className="flex flex-col items-center justify-center" style={{ marginTop: '150px' }}>
          {/* Text Container */}
          <motion.div
            className="bg-white rounded-[15px] p-[35px] flex flex-col items-center justify-center"
            style={{
              minHeight: '350px',
              width: '60%',
              maxWidth: '800px',
              marginTop: '-150px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-8">
              <p className="font-poppins text-[#1B144C] text-[1.5em] leading-relaxed">
                Jeugdprogramma direct op scherp met de kant-en-klare oefenformats en spelvormen voor padel en tennis.
              </p>
            </div>
            <motion.a
              href="#part3"
              className="bg-[#1B144C] text-white font-poppins font-bold px-[50px] py-[20px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors text-[1.2em]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bekijk onze producten
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part3"
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 text-white"
        style={{ fontSize: '35px' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-[35px] w-[35px]" />
        </motion.div>
      </motion.a>
    </section>
  );
});
InfoSection.displayName = 'InfoSection';

// Cards Section 1 Component
const CardsSection1 = React.forwardRef((props, ref) => {
  const sectionInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="part3"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white"
      style={{
        paddingTop: '150px',
        paddingBottom: '150px',
        width: '1600px',
        maxWidth: '100%',
        margin: '0 auto'
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-row items-stretch justify-center gap-0">
          {/* Text Container - 50% */}
          <div className="w-1/2 p-[35px]">
            <div className="sticky top-[150px]">
              <h1 className="font-poppins font-bold text-[2.5em] text-[#1B144C] mb-6">
                Drie producten die een belangrijk onderdeel vormen van het programma:
              </h1>
              <div className="font-poppins text-[#1B144C]">
                <p>
                  De spelerskaarten met keycords en handboeken zijn gratis te bestellen op de website van de KNLTB. Voor bestellen en meer informatie over{' '}
                  <a href="https://www.centrecourt.nl/alles-voor-verenigingen/jeugd/tenniskids/tenniskids-tof/" target="_blank" rel="noopener noreferrer" className="underline">
                    Tenniskids TOF
                  </a>{' '}
                  kijk op: www.centrecourt.nl/tenniskids-tof
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>KNLTB Tenniskids TOF</strong> vormt de basis voor iedere vereniging die met Tenniskids werkt.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Container - 50% */}
          <div className="w-1/2 flex flex-col items-end justify-start gap-0 relative" style={{ minHeight: '100vh' }}>
            {/* Card 1 - Spelen */}
            <motion.div
              className="rounded-[50px] p-[35px] flex flex-col justify-between sticky"
              style={{
                width: '470px',
                maxWidth: '90%',
                minHeight: '300px',
                background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                zIndex: 1,
                marginBottom: '20px',
                transform: 'rotate(-5deg)',
                top: '150px'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: '-3deg' }}
            >
              <div>
                <h2 className="font-poppins font-bold text-[3em] text-white mb-4">
                  Spelen
                </h2>
                <div className="font-poppins text-white text-[1.2em] mb-4 leading-relaxed">
                  <div>• Magneetposters met spelvormen in bewaarkoker</div>
                  <div>• Magneetbuttons</div>
                  <div>• Whiteboard stiften en markers</div>
                </div>
              </div>
              <button className="bg-[#1B144C] text-white font-poppins px-[35px] py-[15px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors">
                Meer info
              </button>
            </motion.div>

            {/* Card 2 - Leren */}
            <motion.div
              className="rounded-[50px] p-[35px] flex flex-col justify-between sticky"
              style={{
                width: '450px',
                maxWidth: '85%',
                minHeight: '300px',
                background: 'linear-gradient(135deg, #10B981, #34D399)',
                zIndex: 2,
                marginBottom: '20px',
                marginLeft: '-50px',
                top: '175px'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h2 className="font-poppins font-bold text-[3em] text-white mb-4">
                  Leren
                </h2>
                <div className="font-poppins text-white text-[1.2em] mb-4 leading-relaxed">
                  <div>• Kennis producten</div>
                  <div>• Ja-Nee kaarten</div>
                  <div>• Zoek de schat</div>
                </div>
              </div>
              <a href="https://www.centrecourt.nl/alles-voor-verenigingen/jeugd/tenniskids/tenniskids-tof/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1B144C] text-white font-poppins px-[35px] py-[15px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors">
                  Meer info
                </button>
              </a>
            </motion.div>

            {/* Card 3 - Sparen */}
            <motion.div
              className="rounded-[50px] p-[35px] flex flex-col justify-between sticky"
              style={{
                width: '430px',
                maxWidth: '80%',
                minHeight: '300px',
                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                zIndex: 2,
                marginLeft: '-50px',
                transform: 'rotate(5deg)',
                top: '200px'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotate: '3deg' }}
            >
              <div>
                <h2 className="font-poppins font-bold text-[3em] text-white mb-4">
                  Sparen
                </h2>
                <div className="font-poppins text-white text-[1.2em] mb-4 leading-relaxed">
                  <div>• TOF score in de KNLTB leraren app</div>
                  <div>• Buttons en bandjes</div>
                </div>
              </div>
              <a href="https://www.centrecourt.nl/alles-voor-verenigingen/jeugd/tenniskids/tenniskids-tof/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1B144C] text-white font-poppins px-[35px] py-[15px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors">
                  Meer info
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part4"
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 text-[#1B144C]"
        style={{ fontSize: '35px' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-[35px] w-[35px]" />
        </motion.div>
      </motion.a>
    </section>
  );
});
CardsSection1.displayName = 'CardsSection1';

// Cards Section 2 Component
const CardsSection2 = React.forwardRef((props, ref) => {
  const sectionInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="part4"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white"
      style={{
        paddingTop: '150px',
        paddingBottom: '150px'
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-row items-stretch justify-center gap-0">
          {/* Cards Container - 50% */}
          <div className="w-1/2 flex flex-col items-start justify-start gap-0 relative" style={{ minHeight: '100vh' }}>
            {/* Card 1 - Tof Score */}
            <FlipCard
              title="Tof Score"
              description="Je kunt een tenniswedstrijd winnen of verliezen waarbij blijdschap en teleurstelling dicht bij elkaar liggen. Bij TOFscore telt elke punt ongeacht winst of verlies. Hoe vaak je speelt is belangrijker dan hoe vaak je wint. 'Wat is jouw TOF score status?' Op naar XP 500 of zelfs XP 1000. Kinderen worden hierdoor gemotiveerd om deel te nemen aan alle events waar TOF score aan gekoppeld is. Hoe tof is dat?!"
              buttonText="Meer info"
              buttonLink="https://toftennis.nl/bestellen/"
              imageUrl="https://toftennis.nl/wp-content/uploads/2024/05/Pasted-Graphic-184x300.png"
              gradientFrom="#FFAA00"
              gradientTo="#FFFF00"
              width="470px"
              zIndex={1}
              transform="rotate(-5deg)"
              delay={0.2}
              inView={sectionInView}
            />

            {/* Card 2 - TOF awards */}
            <FlipCard
              title="TOF awards"
              description="Een beloningssysteem met polsbandjes waarbij kinderen beoordeeld worden op inzet en gedrag en er niet alleen gekeken wordt naar het tennisniveau en de uitslag van de wedstrijd."
              buttonText="Meer info"
              buttonLink="https://toftennis.nl/bestellen/"
              imageUrl="https://toftennis.nl/wp-content/uploads/2024/05/RESPECT-300x270.png"
              gradientFrom="#FFAAD2"
              gradientTo="#F05A00"
              width="450px"
              zIndex={2}
              transform=""
              delay={0.4}
              inView={sectionInView}
              marginLeft="-50px"
            />

            {/* Card 3 - TOF magneetbord */}
            <FlipCard
              title="TOF magneetbord"
              description="Magneetbord voor op de vereniging voor verschillende toepassingen waaronder georganiseerde oefensessies. Een heel belangrijk onderdeel van het totale aanbod op jouw vereniging; het georganiseerd vrij spelen."
              buttonText="Meer info"
              buttonLink="https://toftennis.nl/bestellen/"
              imageUrl="https://toftennis.nl/wp-content/uploads/2024/05/Kopie-van-Kopie-van-Standaard-bord-2023_1.png"
              gradientFrom="#00C8FF"
              gradientTo="#A0FAFA"
              width="430px"
              zIndex={2}
              transform="rotate(5deg)"
              delay={0.6}
              inView={sectionInView}
              marginLeft="-50px"
            />
          </div>

          {/* Text Container - 50% */}
          <div className="w-1/2 p-[35px]">
            <div className="sticky top-[150px]">
              <h1 className="font-poppins font-bold text-[2.5em] text-[#1B144C] mb-6">
                TOF Tennis next level
              </h1>
              <div className="font-poppins text-[#1B144C]">
                <p>
                  Staat jouw basis en wil je met jouw tennisorganisatie of vereniging naar een next level? Kijk dan verder met welke producten we jou kunnen ondersteunen en onderscheid je hiermee ten opzichte van andere verenigingen. Maak jouw jeugdprogramma nog leuker, leerzamer en zichtbaarder voor iedereen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
CardsSection2.displayName = 'CardsSection2';

// Flip Card Component
const FlipCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  gradientFrom,
  gradientTo,
  width,
  zIndex,
  transform,
  delay,
  inView,
  marginLeft = '0'
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative"
      style={{
        width: width,
        maxWidth: '90%',
        minHeight: '300px',
        zIndex: zIndex,
        marginBottom: '20px',
        marginLeft: marginLeft,
        transform: transform,
        perspective: '1000px'
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: delay }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-[50px] p-[35px] flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <h2 className="font-poppins font-bold text-[3em] text-white mb-4">
            {title}
          </h2>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#1B144C] text-white font-poppins px-[35px] py-[15px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-[50px] p-[35px] flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex-1 flex items-center">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="font-poppins text-white text-sm mb-4">{description}</p>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#1B144C] text-white font-poppins px-[35px] py-[15px] rounded-[50px] hover:bg-[#1B144C]/90 transition-colors">
              {buttonText}
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Buttons Section Component
const ButtonsSection = React.forwardRef((props, ref) => {
  const sectionInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center bg-[#1B144C]"
      style={{
        minHeight: '410px',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-row items-center justify-center flex-wrap gap-4" style={{ marginTop: '100px' }}>
          {/* Button 1 - Speler */}
          <AnimatedButton
            title="Ik ben een speler"
            link="/URLlkjhsdf"
            gradientFrom="#FFAA00"
            gradientTo="#FFFF00"
            hoverColors={['#FFAA00', '#FFFF00', '#6FC6C5']}
            delay={0}
            inView={sectionInView}
          />

          {/* Button 2 - Coach */}
          <AnimatedButton
            title="Ik ben een COach"
            link="/URLlkjhsdf"
            gradientFrom="#F05A00"
            gradientTo="#FFAAD2"
            hoverColors={['#FFAAD2', '#F05A00', '#FFFF00']}
            delay={0.2}
            inView={sectionInView}
          />

          {/* Button 3 - Leraar */}
          <AnimatedButton
            title="Ik ben een Leraar"
            link="/URLlkjhsdf"
            gradientFrom="#00C8FF"
            gradientTo="#A0FAFA"
            hoverColors={['#A0FAFA', '#FFAAD2', '#F05A00']}
            delay={0.4}
            inView={sectionInView}
          />
        </div>
      </div>
    </section>
  );
});

// Animated Button Component
const AnimatedButton = ({ title, link, gradientFrom, gradientTo, hoverColors, delay, inView }) => {
  const buttonRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.setProperty('--first-color', hoverColors[0]);
      buttonRef.current.style.setProperty('--second-color', hoverColors[1]);
      buttonRef.current.style.setProperty('--third-color', hoverColors[2]);
    }
  }, [hoverColors]);

  return (
    <motion.a
      ref={buttonRef}
      href={link}
      className="animated-button relative rounded-[50px] overflow-hidden"
      style={{
        width: '32%',
        minWidth: '200px',
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        padding: '15px',
        '--first-color': hoverColors[0],
        '--second-color': hoverColors[1],
        '--third-color': hoverColors[2]
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay, type: "spring" }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <h2 className="font-poppins font-bold text-[2.3em] text-[#1B144C] text-center uppercase hover-translate">
          {title}
        </h2>
      </div>
    </motion.a>
  );
};
ButtonsSection.displayName = 'ButtonsSection';

export default TestPage;

