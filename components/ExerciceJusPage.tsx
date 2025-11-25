import React from 'react';
import { StepCard } from './StepCard';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, CheckCircle2, AlertTriangle, Calculator, Citrus, TrendingDown, Scale } from 'lucide-react';

interface ExerciceJusPageProps {
  onBack: () => void;
}

export const ExerciceJusPage: React.FC<ExerciceJusPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={16} />
            Retour à EcoSolve
          </button>
          <div className="h-6 w-px bg-slate-300 mx-2"></div>
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #03</span>
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
            <BookCheck className="w-8 h-8 text-orange-600" />
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase border border-orange-200">
              Ajustements du Marché
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché du Jus d'Orange
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse d'un marché en concurrence : Calcul de l'équilibre, identification d'un excédent et mécanisme de retour à l'équilibre.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Context & Equations (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 opacity-10 rounded-bl-full"></div>
                   
                   <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                     <Calculator className="text-orange-600"/>
                     Données de l'Exercice
                   </h3>

                   <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Voici les fonctions représentant les consommateurs (assoiffés) et les producteurs (agriculteurs) de jus d'orange frais :
                   </p>

                   <div className="space-y-4 font-mono text-lg">
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction 1</span>
                         <span className="font-bold text-slate-900">Q = 200 - 10P</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction 2</span>
                         <span className="font-bold text-slate-900">Q = 50 + 15P</span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-100">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <ul className="space-y-3 text-sm font-medium text-slate-700">
                       <li className="flex gap-3">
                         <span className="bg-orange-100 text-orange-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">1</span>
                         Déterminer l'équilibre (P* et Q*).
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-orange-100 text-orange-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">2</span>
                         Analyser la situation si le prix est fixé à 8 DH.
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-orange-100 text-orange-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">3</span>
                         Expliquer le mécanisme d'ajustement naturel.
                       </li>
                     </ul>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Solution Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-orange-500/0 via-slate-300 to-yellow-500/0 hidden md:block"></div>

            {/* QUESTION 1: Equilibrium */}
            <StepCard
              stepNumber={1}
              title="Calcul de l'Équilibre"
              gradient="from-orange-500 to-amber-500"
              explanation="On identifie d'abord l'Offre (signe +) et la Demande (signe -), puis on égalise les quantités."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full text-center">
                
                <motion.div variants={itemVariant} className="flex gap-2 justify-center mb-2">
                   <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">Demande: 200 - 10P</span>
                   <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Offre: 50 + 15P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-lg">
                  200 - 10P = 50 + 15P
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center text-slate-400 text-sm gap-2 items-center">
                   <span>Regrouper les termes</span>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono">
                  200 - 50 = 15P + 10P
                  <br/>
                  <span className="font-bold text-slate-900 text-xl">150 = 25P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex gap-4 mt-4">
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Prix (P*)</div>
                      <div className="text-3xl font-black">6 <span className="text-sm">DH</span></div>
                      <div className="text-xs opacity-50 font-mono">150 / 25</div>
                   </div>
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Quantité (Q*)</div>
                      <div className="text-3xl font-black">140 <span className="text-sm">Litres</span></div>
                      <div className="text-xs opacity-50 font-mono">200 - 60</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 2: Analysis at 8 DH */}
            <StepCard
              stepNumber={2}
              title="Analyse du Déséquilibre (P = 8 DH)"
              gradient="from-amber-500 to-yellow-500"
              explanation="Le prix du marché (8) est supérieur au prix d'équilibre (6). Cela devrait créer un déséquilibre."
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Demande */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-slate-400 shadow-sm opacity-80">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Demande (Clients)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 200 - 10(8)</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qd = 120</div>
                     </motion.div>

                     {/* Offre */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-orange-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Offre (Vendeurs)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = 50 + 15(8)</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qo = 170</div>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center relative">
                     
                     <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-amber-800 font-bold uppercase tracking-widest mb-2">
                           <Scale size={18} />
                           Diagnostic : Excédent
                        </div>
                        <div className="text-4xl font-black text-amber-600 mb-2">
                           50 <span className="text-lg text-amber-500 font-medium">litres invendus</span>
                        </div>
                        <div className="flex justify-center gap-4 text-xs font-mono text-amber-800 mt-2">
                           <span>Offre : 170</span>
                           <span>-</span>
                           <span>Demande : 120</span>
                        </div>
                        <p className="text-amber-700/80 text-sm font-medium mt-4 max-w-md mx-auto italic">
                           "Trop de jus d'orange, pas assez d'acheteurs."
                        </p>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

             {/* QUESTION 3: Adjustment Mechanism */}
             <StepCard
              stepNumber={3}
              title="Mécanisme d'Ajustement"
              gradient="from-yellow-500 to-orange-600"
              explanation="Comment le marché résout-il le problème des stocks invendus sans intervention de l'État ?"
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex gap-4 overflow-x-auto pb-2">
                   
                   {/* Step A */}
                   <div className="min-w-[140px] bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-2 font-bold">1</div>
                      <div className="font-bold text-slate-900 text-sm mb-1">Stocks</div>
                      <div className="text-xs text-slate-500">Les invendus s'accumulent (50L).</div>
                   </div>

                   <ArrowLeft className="shrink-0 text-slate-300 mt-8 rotate-180" />

                   {/* Step B */}
                   <div className="min-w-[140px] bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-2 font-bold">2</div>
                      <div className="font-bold text-slate-900 text-sm mb-1">Concurrence</div>
                      <div className="text-xs text-slate-500">Les vendeurs bradent les prix.</div>
                   </div>

                   <ArrowLeft className="shrink-0 text-slate-300 mt-8 rotate-180" />

                   {/* Step C */}
                   <div className="min-w-[140px] bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2 font-bold">3</div>
                      <div className="font-bold text-slate-900 text-sm mb-1">Équilibre</div>
                      <div className="text-xs text-slate-500">Retour à P = 6 DH.</div>
                   </div>

                </motion.div>

                <motion.div variants={itemVariant} className="bg-slate-900 text-white p-4 rounded-xl flex items-center gap-4 shadow-lg">
                   <div className="p-2 bg-white/10 rounded-lg">
                     <TrendingDown size={24} className="text-orange-400"/>
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase text-orange-400">Loi de l'Offre et de la Demande</h4>
                     <p className="text-sm text-slate-300">
                       En situation d'excédent, la concurrence pousse les prix à la <strong>baisse</strong> jusqu'à disparition des stocks.
                     </p>
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