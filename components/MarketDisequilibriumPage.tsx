import React from 'react';
import { MarketParams } from '../types';
import { StepCard } from './StepCard';
import { DisequilibriumChart } from './DisequilibriumChart';
import { motion } from 'framer-motion';
import { BookOpen, ArrowDown, ArrowLeft, ArrowUp, TrendingDown, TrendingUp } from 'lucide-react';

interface MarketDisequilibriumPageProps {
  onBack: () => void;
}

export const MarketDisequilibriumPage: React.FC<MarketDisequilibriumPageProps> = ({ onBack }) => {
  // Using the same parameters for consistency
  const params: MarketParams = {
    demandIntercept: 100,
    demandSlope: 5,
    supplyIntercept: 20,
    supplySlope: 3
  };
  
  const equilibriumPrice = 10;

  // Animation variants
  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen relative bg-slate-50 text-slate-900 pb-20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Analyse de Déséquilibre</span>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24 border-b border-slate-200 pb-8"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-amber-600" />
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase border border-amber-200">
              Module Avancé
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Excédent & Pénurie
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Que se passe-t-il quand le prix n'est pas à l'équilibre ? Calcul et visualisation des écarts.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Sticky Chart */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <DisequilibriumChart params={params} equilibriumPrice={equilibriumPrice} />
                
                {/* Context Box */}
                <div className="mt-6 bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                  <p className="mb-2"><strong>Rappel des équations :</strong></p>
                  <div className="flex justify-between font-mono text-slate-900">
                    <span>Qd = 100 - 5P</span>
                    <span>Qo = 20 + 3P</span>
                  </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-amber-500/0 via-slate-300 to-red-500/0 hidden md:block"></div>

            {/* STEP 1: Introduction */}
            <StepCard
              stepNumber={1}
              title="Le Déséquilibre"
              gradient="from-slate-700 to-slate-900"
              explanation="Un déséquilibre survient lorsque le prix du marché est différent du prix d'équilibre (Pe = 10). Cela crée un écart entre la quantité offerte et demandée."
            >
              <motion.div variants={containerVariant} className="space-y-6 text-center">
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <p className="text-lg text-slate-600 font-medium">
                     Si <span className="font-bold text-slate-900">Prix ≠ 10</span>, alors <span className="font-bold text-slate-900">Qd ≠ Qo</span>.
                   </p>
                </motion.div>
                <div className="flex justify-center gap-4">
                  <motion.div variants={itemVariant} className="flex flex-col items-center p-4 bg-amber-50 rounded-xl border border-amber-100 w-1/2">
                    <ArrowUp className="text-amber-500 mb-2" />
                    <span className="font-bold text-amber-900 uppercase text-xs">Prix Trop Haut ({'>'} 10)</span>
                    <span className="text-amber-700 font-bold">Excédent</span>
                  </motion.div>
                  <motion.div variants={itemVariant} className="flex flex-col items-center p-4 bg-red-50 rounded-xl border border-red-100 w-1/2">
                    <ArrowDown className="text-red-500 mb-2" />
                    <span className="font-bold text-red-900 uppercase text-xs">Prix Trop Bas ({'<'} 10)</span>
                    <span className="text-red-700 font-bold">Pénurie</span>
                  </motion.div>
                </div>
              </motion.div>
            </StepCard>

            {/* STEP 2: Surplus Calculation */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Excédent"
              gradient="from-amber-400 to-orange-500"
              explanation="Lorsque le prix est supérieur à l'équilibre (ex: P=15), l'offre dépasse la demande. Les vendeurs n'arrivent pas à tout vendre."
            >
              <motion.div variants={containerVariant} className="w-full space-y-4">
                <motion.div variants={itemVariant} className="flex items-center gap-3 mb-2">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase">Hypothèse : Prix = 15</span>
                </motion.div>

                {/* Calculation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Demande (Qd)</div>
                    <div className="font-mono text-sm text-slate-600">100 - 5(15)</div>
                    <div className="font-mono text-2xl font-bold text-slate-900 mt-1">25</div>
                  </motion.div>
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Offre (Qo)</div>
                    <div className="font-mono text-sm text-slate-600">20 + 3(15)</div>
                    <div className="font-mono text-2xl font-bold text-slate-900 mt-1">65</div>
                  </motion.div>
                </div>

                {/* Result */}
                <motion.div variants={itemVariant} className="bg-amber-500 text-white p-6 rounded-2xl shadow-lg mt-4 text-center">
                   <div className="text-white/80 text-sm font-medium mb-1">Excédent (Offre - Demande)</div>
                   <div className="text-4xl font-black tracking-tight">65 - 25 = 40</div>
                   <div className="mt-4 flex items-center justify-center gap-2 text-xs bg-black/10 py-2 rounded-lg">
                      <TrendingDown size={14} />
                      <span>Pression à la baisse sur les prix</span>
                   </div>
                </motion.div>
              </motion.div>
            </StepCard>

            {/* STEP 3: Shortage Calculation */}
            <StepCard
              stepNumber={3}
              title="Calcul de la Pénurie"
              gradient="from-red-500 to-rose-600"
              explanation="Lorsque le prix est inférieur à l'équilibre (ex: P=5), la demande dépasse l'offre. Les acheteurs ne trouvent pas assez de produits."
              isLast={true}
            >
              <motion.div variants={containerVariant} className="w-full space-y-4">
                <motion.div variants={itemVariant} className="flex items-center gap-3 mb-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold uppercase">Hypothèse : Prix = 5</span>
                </motion.div>

                {/* Calculation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Demande (Qd)</div>
                    <div className="font-mono text-sm text-slate-600">100 - 5(5)</div>
                    <div className="font-mono text-2xl font-bold text-slate-900 mt-1">75</div>
                  </motion.div>
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Offre (Qo)</div>
                    <div className="font-mono text-sm text-slate-600">20 + 3(5)</div>
                    <div className="font-mono text-2xl font-bold text-slate-900 mt-1">35</div>
                  </motion.div>
                </div>

                {/* Result */}
                <motion.div variants={itemVariant} className="bg-red-500 text-white p-6 rounded-2xl shadow-lg mt-4 text-center">
                   <div className="text-white/80 text-sm font-medium mb-1">Pénurie (Demande - Offre)</div>
                   <div className="text-4xl font-black tracking-tight">75 - 35 = 40</div>
                   <div className="mt-4 flex items-center justify-center gap-2 text-xs bg-black/10 py-2 rounded-lg">
                      <TrendingUp size={14} />
                      <span>Pression à la hausse sur les prix</span>
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