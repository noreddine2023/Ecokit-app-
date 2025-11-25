import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PageView } from '../App';
import { TrendingUp, Scale, AlertTriangle, ArrowRight, Zap, PlayCircle, BarChart2, Smile, ArrowRightLeft, PenTool } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: PageView) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const modules = [
    {
      id: 'calculator',
      title: "Équilibre du Marché",
      description: "Visualiser et calculer le point d'intersection entre l'offre et la demande.",
      icon: Scale,
      color: "from-cyan-500 to-blue-600",
      active: true,
      tag: "Fondamental",
      target: 'calculator' as const
    },
    {
      id: 'law',
      title: "Loi Offre & Demande",
      description: "Comprendre mathématiquement les relations inverses et directes avec le prix.",
      icon: BarChart2,
      color: "from-green-500 to-emerald-600",
      active: true,
      tag: "Théorie",
      target: 'law' as const
    },
    {
      id: 'utility',
      title: "Théorie de l'Utilité",
      description: "Calcul de l'Utilité Totale et Marginale, loi des rendements décroissants.",
      icon: Smile,
      color: "from-indigo-500 to-violet-600",
      active: true,
      tag: "Consommateur",
      target: 'utility' as const
    },
    {
      id: 'tms',
      title: "Le TMS",
      description: "Taux Marginal de Substitution : l'arbitrage et l'échange entre deux biens.",
      icon: ArrowRightLeft,
      color: "from-emerald-400 to-teal-500",
      active: true,
      tag: "Consommateur",
      target: 'tms' as const
    },
    {
      id: 'disequilibrium',
      title: "Excédent & Pénurie",
      description: "Analyser les déséquilibres du marché : calculs des écarts et pressions sur les prix.",
      icon: AlertTriangle,
      color: "from-amber-500 to-red-500",
      active: true,
      tag: "Avancé",
      target: 'disequilibrium' as const
    },
    {
      id: 'elasticity',
      title: "Élasticité Prix",
      description: "Comprendre la sensibilité de la demande aux variations de prix.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-600",
      active: false,
      tag: "Bientôt",
      target: null
    }
  ];

  // Drag to Scroll Logic
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    // Small timeout to prevent immediate click trigger after drag release
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    
    // Determine if user is actually dragging (moved more than 5px)
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[100px] opacity-60"></div>

      {/* Main Header */}
      <nav className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-center max-w-[1400px] mx-auto">
         <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-slate-900 text-white p-2 rounded-lg">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">EcoKit</span>
         </div>
         <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
            <span className="text-slate-900 cursor-pointer">Accueil</span>
            
            {/* New EcoSolve Link in Header */}
            <div 
              onClick={() => onNavigate('ecosolve')}
              className="flex items-center gap-1.5 hover:text-indigo-600 cursor-pointer transition-colors"
            >
              <PenTool size={16} />
              <span>EcoSolve</span>
            </div>
            
            <span className="hover:text-slate-900 cursor-pointer transition-colors">À Propos</span>
         </div>
         <button 
           onClick={() => onNavigate('calculator')}
           className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
         >
            Commencer
         </button>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col min-h-screen justify-center pt-32">
        
        {/* Hero Section */}
        <div className="mb-16 md:mb-20 select-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100"
          >
            <span className="font-bold text-indigo-600 text-sm tracking-wide uppercase">La référence pédagogique</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6"
          >
            EcoKit.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">L'économie simplifiée.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed"
          >
            Une suite d'outils interactifs et de fiches pratiques pour maîtriser les fondamentaux de la microéconomie sans effort.
          </motion.p>
        </div>

        {/* Carousel / Cards Grid */}
        <motion.div 
          ref={scrollContainerRef}
          className={`
            flex gap-8 overflow-x-auto pb-12 hide-scrollbar select-none
            ${isDown ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {modules.map((module, index) => (
            <div 
              key={module.id} 
              className="min-w-[300px] md:min-w-[380px]"
            >
              <div 
                onClick={(e) => {
                  if (!isDragging && module.active && module.target) {
                    onNavigate(module.target);
                  }
                }}
                className={`
                  group relative h-[450px] rounded-[2.5rem] p-8 flex flex-col justify-between
                  bg-white border border-slate-100 shadow-xl transition-all duration-500
                  ${module.active ? 'hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-100 cursor-pointer' : 'opacity-70 grayscale-[0.5]'}
                `}
              >
                {/* Gradient Blob inside card */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-10 rounded-bl-[4rem] transition-all group-hover:scale-110`}></div>

                <div className="pointer-events-none">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg
                      bg-gradient-to-br ${module.color} group-hover:scale-110 transition-transform duration-300
                    `}>
                      <module.icon size={28} />
                    </div>
                    <span className={`
                      text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border
                      ${module.active ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-slate-100 text-slate-400 border-slate-200'}
                    `}>
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {module.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-6 pointer-events-none">
                  {module.active ? (
                    <>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <PlayCircle size={18} className="text-indigo-600"/>
                        <span>Ouvrir le module</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bientôt disponible</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Padding Card for Scroll */}
          <div className="min-w-[50px]"></div>
        </motion.div>

      </div>
    </div>
  );
};