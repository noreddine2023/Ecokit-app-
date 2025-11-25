import React from 'react';
import { StepCard } from './StepCard';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, CheckCircle2, AlertTriangle, Calculator, ShoppingBag, Store, Users, TrendingDown } from 'lucide-react';

interface ExerciceCasquettePageProps {
  onBack: () => void;
}

export const ExerciceCasquettePage: React.FC<ExerciceCasquettePageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #04</span>
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
            <BookCheck className="w-8 h-8 text-teal-700" />
            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-widest uppercase border border-teal-200">
              Intervention de l'État
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché des Casquettes
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse complète : Définitions théoriques, calculs d'équilibre et conséquences concrètes d'un prix plafond.
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
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 opacity-10 rounded-bl-full"></div>
                   
                   <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                     <Calculator className="text-teal-600"/>
                     Données de l'Exercice
                   </h3>

                   <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Modélisation du marché estival des casquettes (<span className="font-bold">P</span> en DH, <span className="font-bold">Q</span> en unités) :
                   </p>

                   <div className="space-y-4 font-mono text-lg">
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction 1</span>
                         <span className="font-bold text-slate-900">Q = 100 + 30P</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction 2</span>
                         <span className="font-bold text-slate-900">Q = 400 - 20P</span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-100">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase mb-2">Partie 1 : Compréhension</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">1</span>
                               Définition du Marché.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">2</span>
                               Identifier Offre et Demande.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase mb-2">Partie 2 : Calculs</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">3</span>
                               Calcul de l'équilibre (P*, Q*).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">4</span>
                               Calcul avec Prix Plafond (4 DH).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase mb-2">Partie 3 : Réflexion</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">5</span>
                               Qualification du déséquilibre.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">6</span>
                               Conséquences à long terme.
                             </li>
                          </ul>
                        </div>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Solution Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-teal-500/0 via-slate-300 to-rose-500/0 hidden md:block"></div>

            {/* STEP 1: Definitions */}
            <StepCard
              stepNumber={1}
              title="Théorie & Identification"
              gradient="from-teal-500 to-cyan-600"
              explanation="Avant de calculer, il faut comprendre les concepts. Le marché est le lieu de rencontre de l'offre et la demande."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Market Definition */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Store size={18} className="text-teal-600"/> Qu'est-ce qu'un Marché ?
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Ce n'est pas forcément un lieu physique (comme un souk). C'est le <strong>lieu de rencontre</strong> (réel ou fictif) entre l'Offre et la Demande qui aboutit à la détermination d'un <strong>prix</strong> et d'une <strong>quantité</strong> d'échange.
                   </p>
                </motion.div>

                {/* Function ID */}
                <motion.div variants={itemVariant} className="grid grid-cols-1 gap-3">
                   <div className="bg-white p-4 rounded-xl border-l-4 border-teal-500 shadow-sm">
                      <div className="flex justify-between font-mono text-sm mb-1">
                        <span>Q = 100 <span className="font-bold text-teal-600">+ 30</span>P</span>
                        <span className="text-xs bg-teal-100 text-teal-800 px-2 rounded-full font-bold">Positif</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">C'est l'Offre (O)</div>
                      <div className="text-xs text-slate-500">Le producteur veut vendre plus si le prix monte.</div>
                   </div>

                   <div className="bg-white p-4 rounded-xl border-l-4 border-rose-500 shadow-sm">
                      <div className="flex justify-between font-mono text-sm mb-1">
                        <span>Q = 400 <span className="font-bold text-rose-500">- 20</span>P</span>
                        <span className="text-xs bg-rose-100 text-rose-800 px-2 rounded-full font-bold">Négatif</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">C'est la Demande (D)</div>
                      <div className="text-xs text-slate-500">Le consommateur achète moins si le prix monte.</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Equilibrium Calculation */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Équilibre"
              gradient="from-cyan-600 to-blue-600"
              explanation="L'équilibre se trouve à l'intersection des courbes : Offre = Demande."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full text-center">
                
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-lg">
                  <span className="text-teal-600">100 + 30P</span> = <span className="text-rose-600">400 - 20P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center text-slate-400 text-sm gap-2 items-center">
                   <span>Regrouper les termes</span>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono">
                  30P + 20P = 400 - 100
                  <br/>
                  <span className="font-bold text-slate-900 text-xl">50P = 300</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex gap-4 mt-4">
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Prix (P*)</div>
                      <div className="text-3xl font-black">6 <span className="text-sm">DH</span></div>
                      <div className="text-xs opacity-50 font-mono">300 / 50</div>
                   </div>
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Quantité (Q*)</div>
                      <div className="text-3xl font-black">280</div>
                      <div className="text-xs opacity-50 font-mono">100 + 30(6)</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: State Intervention */}
            <StepCard
              stepNumber={3}
              title="Intervention de l'État (4 DH)"
              gradient="from-rose-500 to-red-600"
              explanation="L'État impose un prix plafond de 4 DH (inférieur à l'équilibre de 6 DH). Calculons le déséquilibre qui en résulte."
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Demande */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-rose-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Demande (Qd)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 400 - 20(4)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 400 - 80</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qd = 320</div>
                     </motion.div>

                     {/* Offre */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Offre (Qo)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = 100 + 30(4)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = 100 + 120</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qo = 220</div>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-center relative">
                     
                     <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-rose-800 font-bold uppercase tracking-widest mb-2">
                           <AlertTriangle size={18} />
                           Résultat : Pénurie
                        </div>
                        <div className="text-4xl font-black text-rose-600 mb-2">
                           100 <span className="text-lg text-rose-500 font-medium">unités manquantes</span>
                        </div>
                        <div className="flex justify-center gap-4 text-xs font-mono text-rose-800 mt-2">
                           <span>Demande : 320</span>
                           <span>-</span>
                           <span>Offre : 220</span>
                        </div>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* STEP 4: Economic Reflection */}
            <StepCard
              stepNumber={4}
              title="Conséquences Économiques"
              gradient="from-slate-700 to-slate-900"
              explanation="Au-delà des chiffres, quelles sont les répercussions concrètes d'un blocage des prix à long terme ?"
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg">
                   <h5 className="font-bold text-slate-900 mb-4 flex gap-2 items-center">
                     <Users size={20} className="text-slate-600"/>
                     Les Effets Pervers (Analyse)
                   </h5>
                   <ul className="space-y-4">
                      <li className="flex gap-3 items-start">
                         <div className="mt-1 p-1 bg-rose-100 rounded text-rose-600"><ShoppingBag size={14}/></div>
                         <div>
                            <span className="font-bold text-slate-800 block text-sm">Marché Noir</span>
                            <span className="text-xs text-slate-500">Revendre les casquettes achetées 4 DH beaucoup plus cher à ceux qui n'en trouvent pas.</span>
                         </div>
                      </li>
                      <li className="flex gap-3 items-start">
                         <div className="mt-1 p-1 bg-rose-100 rounded text-rose-600"><TrendingDown size={14}/></div>
                         <div>
                            <span className="font-bold text-slate-800 block text-sm">Baisse de Qualité</span>
                            <span className="text-xs text-slate-500">Les producteurs réduisent les coûts pour survivre au prix imposé (matériaux bas de gamme).</span>
                         </div>
                      </li>
                      <li className="flex gap-3 items-start">
                         <div className="mt-1 p-1 bg-rose-100 rounded text-rose-600"><Store size={14}/></div>
                         <div>
                            <span className="font-bold text-slate-800 block text-sm">Rationnement</span>
                            <span className="text-xs text-slate-500">Files d'attente interminables, limite de "1 par personne".</span>
                         </div>
                      </li>
                   </ul>
                </motion.div>

              </motion.div>
            </StepCard>

          </div>
        </div>
      </div>
    </div>
  );
};