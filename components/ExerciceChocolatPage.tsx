import React from 'react';
import { StepCard } from './StepCard';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, CheckCircle2, AlertTriangle, Calculator, ShoppingBag, Factory } from 'lucide-react';

interface ExerciceChocolatPageProps {
  onBack: () => void;
}

export const ExerciceChocolatPage: React.FC<ExerciceChocolatPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #01</span>
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
            <BookCheck className="w-8 h-8 text-amber-800" />
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-widest uppercase border border-amber-200">
              Les Mécanismes du Marché
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché du Chocolat
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse fondamentale en concurrence parfaite : Identification des courbes, calcul d'équilibre et intervention de l'État.
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
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 opacity-10 rounded-bl-full"></div>
                   
                   <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                     <Calculator className="text-amber-700"/>
                     Données de l'Exercice
                   </h3>

                   <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Les économistes ont modélisé le marché des tablettes de chocolat avec deux fonctions linéaires (<span className="font-bold">P</span> en DH, <span className="font-bold">Q</span> en unités) :
                   </p>

                   <div className="space-y-4 font-mono text-lg">
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction A</span>
                         <span className="font-bold text-slate-900">Q = 300 - 20P</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction B</span>
                         <span className="font-bold text-slate-900">Q = 60 + 40P</span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-100">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <ul className="space-y-3 text-sm font-medium text-slate-700">
                       <li className="flex gap-3">
                         <span className="bg-amber-100 text-amber-800 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">1</span>
                         Identifier l'Offre et la Demande.
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-amber-100 text-amber-800 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">2</span>
                         Calculer l'équilibre (P* et Q*).
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-amber-100 text-amber-800 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">3</span>
                         L'État fixe le prix à 3 DH. Conséquences ?
                       </li>
                     </ul>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Solution Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-amber-500/0 via-slate-300 to-orange-500/0 hidden md:block"></div>

            {/* QUESTION 1: Identification */}
            <StepCard
              stepNumber={1}
              title="Identification des Fonctions"
              gradient="from-amber-600 to-orange-600"
              explanation="On attribue chaque équation en analysant le coefficient du Prix (P). Positif = Producteur (Offre), Négatif = Consommateur (Demande)."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-amber-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">Q = 300 <span className="text-red-500">- 20</span>P</span>
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                       <ShoppingBag size={12}/> Consommateur
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Coefficient négatif (-20). Quand le prix monte, la quantité baisse. C'est la loi de la demande.
                  </p>
                  <div className="mt-2 font-bold text-red-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est la Demande (D)
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-green-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">Q = 60 <span className="text-green-600">+ 40</span>P</span>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <Factory size={12}/> Producteur
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Coefficient positif (+40). Quand le prix monte, la quantité augmente. C'est le comportement d'offre.
                  </p>
                  <div className="mt-2 font-bold text-green-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est l'Offre (O)
                  </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 2: Equilibrium */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Équilibre"
              gradient="from-orange-500 to-amber-500"
              explanation="L'équilibre est le point où Q_demande = Q_offre. On résout l'équation pour trouver P*."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full text-center">
                
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-lg">
                  <span className="text-red-600">300 - 20P</span> = <span className="text-green-600">60 + 40P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center text-slate-400 text-sm gap-2 items-center">
                   <span>Regrouper P à droite</span>
                   <ArrowLeft size={14} className="rotate-180"/>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono">
                  300 - 60 = 40P + 20P
                  <br/>
                  <span className="font-bold text-slate-900 text-xl">240 = 60P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex gap-4 mt-4">
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Prix (P*)</div>
                      <div className="text-3xl font-black">4 <span className="text-sm">DH</span></div>
                      <div className="text-xs opacity-50 font-mono">240 / 60</div>
                   </div>
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Quantité (Q*)</div>
                      <div className="text-3xl font-black">220</div>
                      <div className="text-xs opacity-50 font-mono">300 - 20(4)</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 3: Analysis at 3 DH */}
            <StepCard
              stepNumber={3}
              title="Intervention Étatique (P = 3 DH)"
              gradient="from-red-500 to-rose-600"
              explanation="L'État impose un prix de 3 DH. Comme 3 < 4 (Prix équilibre), le marché ne s'ajuste pas naturellement. Calculons les écarts."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Demande */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Demande (Acheteurs)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 300 - 20(3)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 300 - 60</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qd = 240</div>
                        <p className="text-xs text-slate-400 mt-2">Prix bas = Forte consommation</p>
                     </motion.div>

                     {/* Offre */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Offre (Vendeurs)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = 60 + 40(3)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = 60 + 120</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qo = 180</div>
                        <p className="text-xs text-slate-400 mt-2">Prix bas = Faible production</p>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                     
                     <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-red-800 font-bold uppercase tracking-widest mb-2">
                           <AlertTriangle size={18} />
                           Diagnostic : Pénurie
                        </div>
                        <div className="text-4xl font-black text-red-600 mb-2">
                           60 <span className="text-lg text-red-400 font-medium">unités manquantes</span>
                        </div>
                        <div className="flex justify-center gap-4 text-xs font-mono text-red-800 mt-2">
                           <span>Demande : 240</span>
                           <span>-</span>
                           <span>Offre : 180</span>
                        </div>
                        <p className="text-red-700/80 text-sm font-medium mt-4 max-w-md mx-auto italic">
                           "Premier arrivé, premier servi." - Risque de files d'attente et de marché noir.
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