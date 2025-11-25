import React from 'react';
import { StepCard } from './StepCard';
import { AhmedChart } from './AhmedChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Calculator, ArrowRightLeft, TrendingDown, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';

interface ExerciceAhmedPageProps {
  onBack: () => void;
}

export const ExerciceAhmedPage: React.FC<ExerciceAhmedPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #13</span>
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
            <BookCheck className="w-8 h-8 text-sky-600" />
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase border border-sky-200">
              TMS Discret
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Les Courbes d'Ahmed
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprendre le taux d'échange et la convexité à travers un tableau de paniers équivalents.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Chart & Data (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden mb-6">
                  <AhmedChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Données (Même Satisfaction)
                   </h4>
                   <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200 text-center">
                      <div className="font-bold text-slate-400 uppercase border-b border-slate-200 pb-1">Panier</div>
                      <div className="font-bold text-slate-400 uppercase border-b border-slate-200 pb-1">X (Sandwichs)</div>
                      <div className="font-bold text-slate-400 uppercase border-b border-slate-200 pb-1">Y (Jus)</div>
                      
                      <div className="font-bold text-slate-900">A</div><div>1</div><div>13</div>
                      <div className="font-bold text-slate-900">B</div><div>2</div><div>9</div>
                      <div className="font-bold text-slate-900">C</div><div>3</div><div>6</div>
                      <div className="font-bold text-slate-900">D</div><div>4</div><div>4</div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-sky-600 uppercase mb-2">Partie 1 : Calculs</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">1</span>
                               Formule du TMS Discret.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">2</span>
                               Calcul du TMS de A vers B.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">3</span>
                               Calcul des TMS suivants (B→C, C→D).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-sky-600 uppercase mb-2">Partie 2 : Analyse</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">4</span>
                               Sens d'évolution du TMS.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">5</span>
                               Propriété géométrique déduite.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-sky-50 text-sky-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-sky-100">6</span>
                               Comparaison avec Panier E (3, 8).
                             </li>
                          </ul>
                        </div>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-sky-500/0 via-slate-300 to-teal-500/0 hidden md:block"></div>

            {/* STEP 1: Formula */}
            <StepCard
              stepNumber={1}
              title="Formule du TMS (Discret)"
              gradient="from-sky-500 to-blue-600"
              explanation="Lorsque les points sont discontinus (tableau), on utilise le rapport des variations."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="text-center p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                   <div className="font-mono text-lg opacity-80 mb-1">Formule</div>
                   <div className="text-2xl font-bold tracking-wider">
                     TMS = - <span className="text-red-400">ΔY</span> / <span className="text-emerald-400">ΔX</span>
                   </div>
                   <div className="text-xs text-slate-400 mt-2">
                     Rapport inverse des variations (combien je perds / combien je gagne)
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: A to B */}
            <StepCard
              stepNumber={2}
              title="Calcul : Passage A vers B"
              gradient="from-blue-500 to-cyan-600"
              explanation="Ahmed gagne 1 sandwich mais doit sacrifier des jus pour rester sur la même courbe."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">De A(1, 13) vers B(2, 9)</h4>
                   
                   <div className="space-y-3 font-mono text-sm">
                      <div className="flex justify-between">
                         <span className="text-slate-500">Variation Y (Jus)</span>
                         <span className="text-red-600 bg-red-50 px-2 rounded font-bold">9 - 13 = -4</span>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-slate-500">Variation X (Sandwichs)</span>
                         <span className="text-emerald-600 bg-emerald-50 px-2 rounded font-bold">2 - 1 = +1</span>
                      </div>
                   </div>

                   <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                      <span className="text-sm font-bold text-slate-400 uppercase block mb-1">TMS (A → B)</span>
                      <span className="text-4xl font-black text-cyan-600">4</span>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 bg-cyan-50 p-3 rounded-lg text-cyan-800 text-sm font-medium">
                   <ArrowRightLeft size={16}/>
                   Il est prêt à donner <strong>4 Jus</strong> pour <strong>1 Sandwich</strong>.
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Other Calculations */}
            <StepCard
              stepNumber={3}
              title="Calculs Suivants"
              gradient="from-cyan-600 to-teal-600"
              explanation="Calculons le taux d'échange pour les étapes suivantes."
            >
               <motion.div variants={containerVariant} className="space-y-4 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2">De B(2, 9) vers C(3, 6)</div>
                     <div className="flex justify-between items-center font-mono text-sm">
                        <div>
                           <div className="text-red-500">ΔY = -3</div>
                           <div className="text-emerald-600">ΔX = +1</div>
                        </div>
                        <div className="text-2xl font-black text-teal-600">TMS = 3</div>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2">De C(3, 6) vers D(4, 4)</div>
                     <div className="flex justify-between items-center font-mono text-sm">
                        <div>
                           <div className="text-red-500">ΔY = -2</div>
                           <div className="text-emerald-600">ΔX = +1</div>
                        </div>
                        <div className="text-2xl font-black text-teal-600">TMS = 2</div>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* STEP 4: Analysis */}
            <StepCard
              stepNumber={4}
              title="Analyse des Propriétés"
              gradient="from-teal-600 to-emerald-600"
              explanation="Observation de l'évolution du TMS et déduction de la forme de la courbe."
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="flex items-center justify-center gap-4 bg-slate-100 p-4 rounded-xl border border-slate-200">
                     <div className="font-black text-slate-400 text-lg">4</div>
                     <ArrowUpRight size={20} className="text-slate-400 rotate-90" />
                     <div className="font-black text-slate-600 text-xl">3</div>
                     <ArrowUpRight size={20} className="text-slate-400 rotate-90" />
                     <div className="font-black text-emerald-600 text-2xl">2</div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="text-center">
                     <h5 className="font-bold text-slate-900 mb-1">Le TMS est Décroissant</h5>
                     <p className="text-sm text-slate-600 mb-3">
                        Plus Ahmed a de sandwichs, moins il est prêt à sacrifier de jus pour en avoir un de plus.
                     </p>
                     <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Propriété : Convexité
                     </span>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* STEP 5: Basket E */}
            <StepCard
              stepNumber={5}
              title="Comparaison Panier E (3, 8)"
              gradient="from-emerald-500 to-lime-600"
              explanation="Question 6 : Où se situe le panier E par rapport à la courbe ?"
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg">
                     <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                        <div className="text-center">
                           <span className="block text-xs font-bold text-slate-400 uppercase">Panier C</span>
                           <span className="font-mono font-bold text-slate-900">3 X, 6 Y</span>
                        </div>
                        <div className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">VS</div>
                        <div className="text-center">
                           <span className="block text-xs font-bold text-amber-500 uppercase">Panier E</span>
                           <span className="font-mono font-bold text-amber-600">3 X, 8 Y</span>
                        </div>
                     </div>
                     
                     <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
                        <h5 className="font-bold text-amber-900 mb-1 flex items-center justify-center gap-2">
                           <CheckCircle2 size={16}/> E est Préféré à C
                        </h5>
                        <p className="text-xs text-amber-800 mb-2">
                           Même quantité de sandwichs, mais <strong>plus de jus</strong> (+2).
                        </p>
                        <div className="text-xs font-medium text-amber-700 bg-white/50 inline-block px-2 py-1 rounded">
                           Axiome de Non-Saturation
                        </div>
                     </div>
                     <p className="text-xs text-slate-500 text-center mt-3 italic">
                        Le point E se situe sur une courbe d'indifférence <strong>plus élevée</strong> (au-dessus de la courbe actuelle).
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