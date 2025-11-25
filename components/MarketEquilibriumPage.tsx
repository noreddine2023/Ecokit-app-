import React from 'react';
import { MarketParams } from '../types';
import { calculateEquilibrium } from '../utils/economics';
import { StepCard } from './StepCard';
import { InteractiveChart } from './InteractiveChart';
import { motion } from 'framer-motion';
import { BookOpen, ArrowDown, ArrowLeft } from 'lucide-react';

interface MarketEquilibriumPageProps {
  onBack: () => void;
}

export const MarketEquilibriumPage: React.FC<MarketEquilibriumPageProps> = ({ onBack }) => {
  // Fixed parameters based on the source image
  const params: MarketParams = {
    demandIntercept: 100,
    demandSlope: 5,
    supplyIntercept: 20,
    supplySlope: 3
  };

  const result = calculateEquilibrium(params);

  // Animation variants for text elements
  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  // Wrapper variant to propagate stagger effect to children
  const containerVariant = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-50 text-slate-900 pb-20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </button>
          <div className="h-6 w-px bg-slate-300 mx-2"></div>
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Calculateur de Marché</span>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Title Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24 border-b border-slate-200 pb-8"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-cyan-600" />
            <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase border border-cyan-200">
              Module Éducatif
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Calculer l'Équilibre du Marché
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Guide étape par étape pour résoudre l'équilibre entre l'offre et la demande.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Sticky Fixed Graph */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-[2rem] opacity-20 blur-lg"></div>
                <div className="relative">
                  <InteractiveChart params={params} result={result} />
                  
                  {/* Legend / Key Data */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur border border-slate-200 p-4 rounded-xl shadow-sm">
                      <div className="text-xs text-cyan-600 font-bold uppercase tracking-wider mb-1">Demande (D)</div>
                      <div className="font-mono text-slate-900 text-lg">Qd = 100 - 5P</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur border border-slate-200 p-4 rounded-xl shadow-sm">
                      <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Offre (O)</div>
                      <div className="font-mono text-slate-900 text-lg">Qo = 20 + 3P</div>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT COLUMN: Scrolling Explanation Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-slate-300 to-purple-500/0 hidden md:block"></div>

            {/* STEP 1 */}
            <StepCard
              stepNumber={1}
              title="Poser les Équations"
              gradient="from-blue-600 to-cyan-500"
              explanation="Définir les fonctions de demande (Qd) et d'offre (Qo) en fonction du Prix (P)."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full text-left">
                <motion.div variants={itemVariant} className="bg-slate-50 p-6 rounded-xl border-l-4 border-cyan-500 shadow-sm border-y border-r border-slate-200">
                  <span className="text-xs text-cyan-600 font-bold tracking-widest uppercase block mb-2">Fonction de Demande (D)</span>
                  <span className="text-3xl font-mono font-bold text-slate-900 tracking-tight">Qd = 100 - 5P</span>
                </motion.div>
                
                <motion.div variants={itemVariant} className="bg-slate-50 p-6 rounded-xl border-l-4 border-fuchsia-500 shadow-sm border-y border-r border-slate-200">
                  <span className="text-xs text-fuchsia-600 font-bold tracking-widest uppercase block mb-2">Fonction d'Offre (O)</span>
                  <span className="text-3xl font-mono font-bold text-slate-900 tracking-tight">Qo = 20 + 3P</span>
                </motion.div>
              </motion.div>
            </StepCard>

            {/* STEP 2 */}
            <StepCard
              stepNumber={2}
              title="Égaliser les Quantités"
              gradient="from-emerald-500 to-teal-500"
              explanation="À l'équilibre, la quantité demandée est égale à la quantité offerte. Poser Qd = Qo."
            >
              <motion.div variants={containerVariant} className="w-full text-center space-y-8">
                <motion.div variants={itemVariant}>
                  <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg font-mono font-bold text-xl mb-4 border border-emerald-200">Qd = Qo</div>
                </motion.div>
                
                <motion.div variants={itemVariant} className="relative">
                  <div className="text-3xl md:text-5xl font-mono font-bold text-slate-900 tracking-tight leading-tight">
                    100 - 5P <span className="text-emerald-500 mx-2">=</span> 20 + 3P
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariant} className="flex justify-center gap-8 text-sm text-slate-500">
                  <div className="flex flex-col items-center">
                    <ArrowDown className="mb-2 text-cyan-500" />
                    <span>Demande</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowDown className="mb-2 text-fuchsia-500" />
                    <span>Offre</span>
                  </div>
                </motion.div>
              </motion.div>
            </StepCard>

            {/* STEP 3 */}
            <StepCard
              stepNumber={3}
              title="Résoudre pour le Prix (Pe)"
              gradient="from-violet-500 to-purple-500"
              explanation="Isoler P pour trouver le Prix d'équilibre (Pe). Ici, Pe = 10."
            >
              <motion.div variants={containerVariant} className="space-y-6 font-mono text-lg w-full">
                <motion.div variants={itemVariant} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                   <span className="text-slate-500">Regrouper les termes</span>
                   <span className="text-xl font-bold text-slate-900">100 - 20 = 3P + 5P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                   <span className="text-slate-500">Simplifier</span>
                   <span className="text-xl font-bold text-violet-600">80 = 8P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                   <span className="text-slate-500">Isoler P</span>
                   <span className="text-xl font-bold text-slate-900">Pe = 80 / 8</span>
                </motion.div>

                <motion.div variants={itemVariant} className="mt-8 bg-violet-600 p-8 rounded-2xl text-center shadow-[0_10px_30px_rgba(124,58,237,0.3)] text-white">
                  <span className="text-white/80 text-sm uppercase tracking-wider block mb-2">Prix d'Équilibre</span>
                  <span className="text-5xl font-black">Pe = 10</span>
                </motion.div>
              </motion.div>
            </StepCard>

            {/* STEP 4 */}
            <StepCard
              stepNumber={4}
              title="Calculer la Quantité (Qe)"
              gradient="from-orange-500 to-amber-500"
              explanation="Remplacer Pe dans l'une des équations pour trouver le Quantité d'équilibre (Qe). Ici, Qe = 50."
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                <div className="grid grid-cols-1 gap-4">
                  
                  <motion.div variants={itemVariant} className="group relative overflow-hidden bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-orange-500/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05] font-black text-6xl text-slate-900">D</div>
                    <span className="text-xs text-orange-600 font-bold block mb-3 uppercase tracking-wider">Dans la demande (D)</span>
                    <div className="font-mono text-xl text-slate-500 mb-2">
                      Qe = 100 - 5(<span className="text-slate-900 font-bold text-2xl">10</span>)
                    </div>
                    <div className="font-mono text-xl text-slate-900 font-bold">
                      Qe = 100 - 50 = <span className="text-orange-600 text-3xl">50</span>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariant} className="group relative overflow-hidden bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-orange-500/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05] font-black text-6xl text-slate-900">O</div>
                    <span className="text-xs text-orange-600 font-bold block mb-3 uppercase tracking-wider">Dans l'offre (O)</span>
                    <div className="font-mono text-xl text-slate-500 mb-2">
                      Qe = 20 + 3(<span className="text-slate-900 font-bold text-2xl">10</span>)
                    </div>
                    <div className="font-mono text-xl text-slate-900 font-bold">
                      Qe = 20 + 30 = <span className="text-orange-600 text-3xl">50</span>
                    </div>
                  </motion.div>

                </div>

                <motion.div 
                   variants={itemVariant}
                   className="mt-6 flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 to-amber-600 p-6 rounded-xl shadow-xl text-white"
                >
                  <div className="text-right">
                    <div className="text-xs text-white/90 uppercase font-bold">Prix (Pe)</div>
                    <div className="text-3xl font-black">10</div>
                  </div>
                  <div className="h-10 w-px bg-white/30"></div>
                  <div className="text-left">
                    <div className="text-xs text-white/90 uppercase font-bold">Quantité (Qe)</div>
                    <div className="text-3xl font-black">50</div>
                  </div>
                </motion.div>
              </motion.div>
            </StepCard>

          </div>
        </div>
      </div>
    </div>
  );
};