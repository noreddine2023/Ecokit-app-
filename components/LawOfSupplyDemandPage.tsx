import React from 'react';
import { MarketParams } from '../types';
import { StepCard } from './StepCard';
import { LawChart } from './LawChart';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, TrendingUp, TrendingDown, Minus, Plus } from 'lucide-react';

interface LawOfSupplyDemandPageProps {
  onBack: () => void;
}

export const LawOfSupplyDemandPage: React.FC<LawOfSupplyDemandPageProps> = ({ onBack }) => {
  const params: MarketParams = {
    demandIntercept: 100,
    demandSlope: 5,
    supplyIntercept: 20,
    supplySlope: 3
  };

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
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Loi de l'Offre et la Demande</span>
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
            <BookOpen className="w-8 h-8 text-green-600" />
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase border border-green-200">
              Module Théorique
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            La Loi de l'Offre et de la Demande
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Démonstration mathématique de la réaction des acheteurs et des vendeurs face aux variations de prix.
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
                <LawChart params={params} />
                
                {/* Context Box */}
                <div className="mt-6 bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-slate-100 rounded-lg"><Minus size={16}/></div>
                      <p><strong>Pente Négative (Demande) :</strong> Quand le prix monte, on achète moins.</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg"><Plus size={16}/></div>
                      <p><strong>Pente Positive (Offre) :</strong> Quand le prix monte, on produit plus.</p>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-green-500/0 via-slate-300 to-blue-500/0 hidden md:block"></div>

            {/* STEP 1: Law of Demand */}
            <StepCard
              stepNumber={1}
              title="La Loi de la Demande"
              gradient="from-cyan-500 to-blue-600"
              explanation="La relation entre le Prix et la Quantité Demandée est inverse. Si le prix augmente, la demande diminue."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex justify-between items-center bg-cyan-50 p-4 rounded-xl border border-cyan-100 text-cyan-800 font-mono font-bold">
                   <span>Équation</span>
                   <span>Qd = 100 - 5P</span>
                </motion.div>

                {/* Scenario A: Low Price */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-2 opacity-10 font-black text-4xl">5€</div>
                   <h4 className="font-bold text-slate-900 mb-2">Cas 1 : Prix Bas (P = 5)</h4>
                   <div className="font-mono text-slate-600">
                     Qd = 100 - 5(5) = 100 - 25
                   </div>
                   <div className="font-mono text-2xl font-black text-cyan-600 mt-2">
                     Qd = 75
                   </div>
                </motion.div>

                {/* Scenario B: High Price */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-2 opacity-10 font-black text-4xl">15€</div>
                   <h4 className="font-bold text-slate-900 mb-2">Cas 2 : Prix Haut (P = 15)</h4>
                   <div className="font-mono text-slate-600">
                     Qd = 100 - 5(15) = 100 - 75
                   </div>
                   <div className="font-mono text-2xl font-black text-cyan-600 mt-2">
                     Qd = 25
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 bg-slate-100 py-2 rounded-lg">
                   <TrendingUp size={16} className="text-red-500" /> Prix x3 
                   <span className="mx-2">→</span>
                   <TrendingDown size={16} className="text-cyan-600" /> Demande ÷3
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Law of Supply */}
            <StepCard
              stepNumber={2}
              title="La Loi de l'Offre"
              gradient="from-fuchsia-500 to-purple-600"
              explanation="La relation entre le Prix et la Quantité Offerte est directe. Si le prix augmente, il est plus rentable de produire, donc l'offre augmente."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex justify-between items-center bg-fuchsia-50 p-4 rounded-xl border border-fuchsia-100 text-fuchsia-800 font-mono font-bold">
                   <span>Équation</span>
                   <span>Qo = 20 + 3P</span>
                </motion.div>

                {/* Scenario A: Low Price */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-2 opacity-10 font-black text-4xl">5€</div>
                   <h4 className="font-bold text-slate-900 mb-2">Cas 1 : Prix Bas (P = 5)</h4>
                   <div className="font-mono text-slate-600">
                     Qo = 20 + 3(5) = 20 + 15
                   </div>
                   <div className="font-mono text-2xl font-black text-fuchsia-600 mt-2">
                     Qo = 35
                   </div>
                </motion.div>

                {/* Scenario B: High Price */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-2 opacity-10 font-black text-4xl">15€</div>
                   <h4 className="font-bold text-slate-900 mb-2">Cas 2 : Prix Haut (P = 15)</h4>
                   <div className="font-mono text-slate-600">
                     Qo = 20 + 3(15) = 20 + 45
                   </div>
                   <div className="font-mono text-2xl font-black text-fuchsia-600 mt-2">
                     Qo = 65
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 bg-slate-100 py-2 rounded-lg">
                   <TrendingUp size={16} className="text-red-500" /> Prix Augmente
                   <span className="mx-2">→</span>
                   <TrendingUp size={16} className="text-fuchsia-600" /> Offre Augmente
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Synthesis */}
            <StepCard
              stepNumber={3}
              title="Conclusion"
              gradient="from-slate-700 to-slate-900"
              explanation="Le marché cherche naturellement un prix où les quantités s'égalisent. Les comportements opposés des acheteurs et vendeurs permettent cet équilibre."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="w-full text-center">
                  <motion.div variants={itemVariant} className="grid grid-cols-2 gap-4">
                     <div className="bg-cyan-500 text-white p-4 rounded-2xl shadow-lg">
                        <div className="text-xs uppercase font-bold opacity-80 mb-1">Acheteurs</div>
                        <div className="font-bold">Cherchent le prix le plus bas</div>
                     </div>
                     <div className="bg-fuchsia-500 text-white p-4 rounded-2xl shadow-lg">
                        <div className="text-xs uppercase font-bold opacity-80 mb-1">Vendeurs</div>
                        <div className="font-bold">Cherchent le prix le plus haut</div>
                     </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariant} className="mt-8 p-6 bg-slate-100 rounded-2xl border border-slate-200">
                    <p className="text-slate-600 italic font-medium">
                      "Ceteris paribus (toutes choses étant égales par ailleurs), la variation du prix entraîne un déplacement le long de la courbe."
                    </p>
                  </motion.div>
               </motion.div>
            </StepCard>

          </div>
        </div>
      </div>
    </div>
  );
};
