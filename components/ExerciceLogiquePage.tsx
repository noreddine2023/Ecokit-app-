import React from 'react';
import { StepCard } from './StepCard';
import { LogiqueChart } from './LogiqueChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Brain, Calculator, ArrowRightLeft, TrendingDown, Ban, HelpCircle, CheckCircle2 } from 'lucide-react';

interface ExerciceLogiquePageProps {
  onBack: () => void;
}

export const ExerciceLogiquePage: React.FC<ExerciceLogiquePageProps> = ({ onBack }) => {
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #14</span>
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
            <BookCheck className="w-8 h-8 text-teal-600" />
            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase border border-teal-200">
              Logique & Intuition
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Comprendre les Courbes
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Pas de tableau complexe ici, juste de la logique pure. Analyse du TMS, des intersections impossibles et des biens substituables.
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
                  <LogiqueChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Brain size={16} />
                     Données de Karim
                   </h4>
                   <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200 text-center mb-4">
                      <div className="py-1 border-b border-slate-200 font-bold text-slate-500 uppercase">Um (Banane)</div>
                      <div className="py-1 border-b border-slate-200 font-bold text-slate-500 uppercase">Um (Pomme)</div>
                      <div className="py-1 font-bold text-xl text-slate-900">12</div>
                      <div className="py-1 font-bold text-xl text-slate-900">4</div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase mb-2">Partie 1 : TMS</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">1</span>
                               Calculer le TMS et interpréter.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">2</span>
                               Évolution logique du TMS (Quand on a trop de bananes ?).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase mb-2">Partie 2 : Formes</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">3</span>
                               Pourquoi les courbes ne peuvent pas se croiser ?
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-teal-50 text-teal-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-teal-100">4</span>
                               Cas particulier : "1 fruit = 1 fruit" (Substituts).
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-teal-500/0 via-slate-300 to-cyan-500/0 hidden md:block"></div>

            {/* STEP 1: TMS Calculation */}
            <StepCard
              stepNumber={1}
              title="Le Taux d'Échange (Q1)"
              gradient="from-teal-500 to-cyan-600"
              explanation="Le TMS est le rapport des utilités marginales. C'est la valeur relative d'un bien par rapport à l'autre."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="text-center p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                   <div className="font-mono text-lg opacity-80 mb-1">Formule</div>
                   <div className="text-2xl font-bold tracking-wider">
                     TMS = <span className="text-teal-400">Um(X)</span> / <span className="text-cyan-400">Um(Y)</span>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                   <div className="font-mono text-sm text-slate-500 mb-2">Application Numérique</div>
                   <div className="text-4xl font-black text-teal-600 mb-2">12 / 4 = 3</div>
                   <div className="mt-4 bg-teal-50 p-3 rounded-lg text-sm text-teal-900 italic border border-teal-100">
                     "Une banane vaut 3 fois plus de plaisir qu'une pomme. Karim est prêt à donner <strong>3 Pommes</strong> pour avoir <strong>1 Banane</strong>."
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Evolution */}
            <StepCard
              stepNumber={2}
              title="Évolution Logique (Q2)"
              gradient="from-cyan-600 to-blue-600"
              explanation="Si Karim accumule énormément de bananes, qu'arrive-t-il à son envie d'en avoir encore plus ?"
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                   <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                     <TrendingDown size={24} />
                   </div>
                   <div>
                     <h5 className="font-bold text-blue-900">Le TMS Diminue</h5>
                     <p className="text-xs text-blue-700">C'est la loi de l'utilité marginale décroissante.</p>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg">
                   <p className="text-sm text-slate-600 leading-relaxed">
                     Au début, les bananes sont rares et précieuses (TMS élevé). <br/>
                     À la fin, il en a trop ("saturation"). Il n'est plus prêt à sacrifier ses dernières pommes pour une banane de plus. Le taux d'échange baisse.
                   </p>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Intersection */}
            <StepCard
              stepNumber={3}
              title="L'Erreur Graphique (Q3)"
              gradient="from-blue-600 to-indigo-600"
              explanation="Deux courbes d'indifférence ne peuvent jamais se couper. Pourquoi ?"
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-red-50 p-6 rounded-xl border border-red-100 text-center relative overflow-hidden">
                     <Ban size={100} className="absolute -right-4 -bottom-4 text-red-200 opacity-50" />
                     <h5 className="font-bold text-red-900 text-lg mb-2 relative z-10">Impossible !</h5>
                     <p className="text-red-800/80 text-sm relative z-10">
                        Si deux courbes se croisent en A, cela veut dire que le panier A donne à la fois une utilité de 100 et de 200. C'est absurde.
                     </p>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                     <h6 className="font-bold text-slate-900 text-xs uppercase mb-2">Argument Logique (Transitivité)</h6>
                     <p className="text-xs text-slate-600 font-mono">
                        Si A ~ B (Courbe 1)<br/>
                        Et A ~ C (Courbe 2)<br/>
                        Alors B ~ C... <span className="text-red-500 font-bold">Impossible</span> si C contient plus de biens que B.
                     </p>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* STEP 4: Substitutes */}
            <StepCard
              stepNumber={4}
              title="Cas Particulier (Q4)"
              gradient="from-indigo-600 to-violet-600"
              explanation="Si Karim s'en fiche de la variété ('Un fruit est un fruit'), comment cela change-t-il la courbe ?"
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="flex gap-2 items-center justify-center mb-4">
                     <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">Substituts Parfaits</span>
                     <ArrowRightLeft size={16} className="text-slate-400"/>
                     <span className="px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold text-indigo-600">1 pour 1</span>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                     <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 border-b-4 border-indigo-500 transform rotate-45"></div>
                     </div>
                     <h5 className="font-bold text-slate-900 mb-1">Réponse B : Une Droite Décroissante</h5>
                     <p className="text-sm text-slate-600">
                        Le TMS est <strong>constant</strong>. Karim échange toujours 1 banane contre 1 pomme, peu importe combien il en a. Pas de convexité.
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