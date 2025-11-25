import React from 'react';
import { StepCard } from './StepCard';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, CheckCircle2, AlertTriangle, Calculator, Library, TrendingUp, BookOpen } from 'lucide-react';

interface ExerciceCahierPageProps {
  onBack: () => void;
}

export const ExerciceCahierPage: React.FC<ExerciceCahierPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #06</span>
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
            <BookCheck className="w-8 h-8 text-indigo-700" />
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-widest uppercase border border-indigo-200">
              Théorie des Prix
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché des Cahiers Scolaires
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse de la rentrée scolaire : Définitions théoriques, calcul de l'équilibre et gestion d'un prix administré.
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
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-10 rounded-bl-full"></div>
                   
                   <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                     <Calculator className="text-indigo-600"/>
                     Données de l'Exercice
                   </h3>

                   <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Modélisation du marché des cahiers grand format (<span className="font-bold">P</span> en DH, <span className="font-bold">Q</span> en unités) :
                   </p>

                   <div className="space-y-4 font-mono text-lg">
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction A</span>
                         <span className="font-bold text-slate-900">Q = -50 + 50P</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Fonction B</span>
                         <span className="font-bold text-slate-900">Q = 400 - 40P</span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-100">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Partie 1 : Théorie</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-indigo-50 text-indigo-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-indigo-100">1</span>
                               Définition du Prix d'Équilibre.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-indigo-50 text-indigo-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-indigo-100">2</span>
                               Situation où Prix {'>'} Équilibre.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Partie 2 : Application</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-indigo-50 text-indigo-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-indigo-100">3</span>
                               Identifier Offre et Demande.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-indigo-50 text-indigo-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-indigo-100">4</span>
                               Calcul de l'équilibre (P*, Q*).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Partie 3 : Déséquilibre</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-indigo-50 text-indigo-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-indigo-100">5</span>
                               Analyse du prix fixé à 3 DH.
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-slate-300 to-purple-500/0 hidden md:block"></div>

            {/* STEP 1: Theory */}
            <StepCard
              stepNumber={1}
              title="Questions de Cours"
              gradient="from-indigo-500 to-purple-600"
              explanation="Compréhension des concepts fondamentaux avant le calcul."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <BookOpen size={18} className="text-indigo-600"/> Le Prix d'Équilibre
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     C'est le prix unique pour lequel les intentions d'achat (demande) coïncident exactement avec les intentions de vente (offre). À ce prix, <span className="font-mono font-bold text-slate-800">Qd = Qo</span>.
                   </p>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <TrendingUp size={18} className="text-indigo-600"/> Si le Prix est Trop Haut...
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed mb-2">
                     Si P {'>'} P*, alors l'Offre {'>'} Demande. Les vendeurs veulent vendre, mais c'est trop cher pour les acheteurs.
                   </p>
                   <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-full uppercase">
                     Situation : Excédent / Abondance
                   </span>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Identification */}
            <StepCard
              stepNumber={2}
              title="Identification des Fonctions"
              gradient="from-purple-500 to-indigo-600"
              explanation="On observe le signe du coefficient directeur devant P."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-purple-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">Q = -50 <span className="text-green-600">+ 50</span>P</span>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                       Positif
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    La quantité augmente avec le prix. C'est le comportement des producteurs.
                  </p>
                  <div className="mt-2 font-bold text-green-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est l'Offre (O)
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-red-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">Q = 400 <span className="text-red-500">- 40</span>P</span>
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      Négatif
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    La quantité diminue quand le prix augmente. C'est le comportement des consommateurs.
                  </p>
                  <div className="mt-2 font-bold text-red-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est la Demande (D)
                  </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Equilibrium Calculation */}
            <StepCard
              stepNumber={3}
              title="Calcul de l'Équilibre"
              gradient="from-indigo-600 to-blue-600"
              explanation="On pose Qd = Qo pour trouver le prix d'équilibre P*."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full text-center">
                
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-lg">
                  <span className="text-red-600">400 - 40P</span> = <span className="text-green-600">-50 + 50P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center text-slate-400 text-sm gap-2 items-center">
                   <span>Regrouper P à droite, Constantes à gauche</span>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono">
                  400 + 50 = 50P + 40P
                  <br/>
                  <span className="font-bold text-slate-900 text-xl">450 = 90P</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex gap-4 mt-4">
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Prix (P*)</div>
                      <div className="text-3xl font-black">5 <span className="text-sm">DH</span></div>
                      <div className="text-xs opacity-50 font-mono">450 / 90</div>
                   </div>
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Quantité (Q*)</div>
                      <div className="text-3xl font-black">200</div>
                      <div className="text-xs opacity-50 font-mono">400 - 40(5)</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 4: Analysis at 3 DH */}
            <StepCard
              stepNumber={4}
              title="Analyse du Déséquilibre (3 DH)"
              gradient="from-red-500 to-rose-600"
              explanation="Le prix est fixé à 3 DH, ce qui est inférieur à l'équilibre (5 DH). Cela va créer une pénurie."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Demande */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Demande (Qd)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 400 - 40(3)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qd = 400 - 120</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qd = 280</div>
                     </motion.div>

                     {/* Offre */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Offre (Qo)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = -50 + 50(3)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Qo = -50 + 150</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qo = 100</div>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center relative">
                     
                     <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-red-800 font-bold uppercase tracking-widest mb-2">
                           <AlertTriangle size={18} />
                           Résultat : Pénurie
                        </div>
                        <div className="text-4xl font-black text-red-600 mb-2">
                           180 <span className="text-lg text-red-400 font-medium">unités manquantes</span>
                        </div>
                        <div className="flex justify-center gap-4 text-xs font-mono text-red-800 mt-2">
                           <span>Demande : 280</span>
                           <span>-</span>
                           <span>Offre : 100</span>
                        </div>
                        <p className="text-red-700/80 text-sm font-medium mt-4 max-w-md mx-auto italic">
                           À ce prix faible, les clients se ruent sur les cahiers, mais les fabricants ne trouvent pas rentable d'en produire.
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