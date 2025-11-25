import React from 'react';
import { StepCard } from './StepCard';
import { UtilityChart } from './UtilityChart';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, Calculator, Smile, Frown, TrendingDown } from 'lucide-react';

interface UtilityPageProps {
  onBack: () => void;
}

export const UtilityPage: React.FC<UtilityPageProps> = ({ onBack }) => {
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Théorie de l'Utilité</span>
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
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase border border-indigo-200">
              Microéconomie du Consommateur
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Utilité Totale & Marginale
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comment mesurer la satisfaction ? Analyse détaillée du calcul de l'utilité et de la loi des rendements décroissants.
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
                <UtilityChart />
                
                {/* Context Box */}
                <div className="mt-6 bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Données de l'exemple
                   </h4>
                   <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-400 uppercase">Qté</div>
                      <div className="font-bold text-slate-400 uppercase">Ut. Totale</div>
                      <div className="font-bold text-slate-400 uppercase">Ut. Marg.</div>
                      
                      {/* Rows */}
                      <div>0</div><div>0</div><div>-</div>
                      <div>1</div><div>10</div><div>10</div>
                      <div className="text-indigo-600 font-bold">2</div><div className="text-indigo-600 font-bold">18</div><div className="text-amber-600 font-bold">8</div>
                      <div>3</div><div>24</div><div>6</div>
                      <div>4</div><div>28</div><div>4</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-slate-300 to-amber-500/0 hidden md:block"></div>

            {/* STEP 1: Definitions */}
            <StepCard
              stepNumber={1}
              title="Concepts Fondamentaux"
              gradient="from-indigo-500 to-blue-600"
              explanation="L'utilité est une mesure abstraite de la satisfaction procurée par la consommation d'un bien."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Utilité Totale (UT)</h4>
                   <p className="text-slate-600 leading-relaxed">
                     La satisfaction <strong>globale</strong> obtenue par la consommation d'une certaine quantité de biens (ex: la satisfaction d'avoir bu 3 verres d'eau).
                   </p>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Utilité Marginale (Um)</h4>
                   <p className="text-slate-600 leading-relaxed">
                     La satisfaction <strong>supplémentaire</strong> apportée par la consommation d'une unité additionnelle (ex: le plaisir apporté par le 3ème verre spécifiquement).
                   </p>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Calculation */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Utilité Marginale"
              gradient="from-amber-500 to-orange-600"
              explanation="L'utilité marginale est la variation de l'utilité totale divisée par la variation de la quantité."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="text-center p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                   <div className="font-mono text-lg opacity-80 mb-1">Formule</div>
                   <div className="text-2xl font-bold tracking-wider">
                     Um = <span className="text-indigo-400">ΔUT</span> / <span className="text-amber-400">ΔQ</span>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3 opacity-5 font-black text-6xl">2</div>
                   <h4 className="font-bold text-slate-900 mb-4">Exemple : Passage de 1 à 2 verres</h4>
                   
                   <div className="space-y-3 font-mono text-sm">
                     <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Utilité Totale (2 verres)</span>
                        <span className="font-bold text-indigo-600">18</span>
                     </div>
                     <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Utilité Totale (1 verre)</span>
                        <span className="font-bold text-indigo-600">10</span>
                     </div>
                     <div className="flex justify-between pt-2">
                        <span className="font-bold text-slate-900">Différence (ΔUT)</span>
                        <span className="font-bold text-slate-900">18 - 10 = 8</span>
                     </div>
                   </div>

                   <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100 text-center">
                      <span className="block text-xs font-bold text-amber-700 uppercase mb-1">Résultat (Um)</span>
                      <span className="text-3xl font-black text-amber-500">8</span>
                      <span className="text-xs text-amber-600/60 block mt-1">L'utilité du 2ème verre est de 8</span>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Diminishing Law */}
            <StepCard
              stepNumber={3}
              title="Loi de l'Utilité Marginale Décroissante"
              gradient="from-purple-500 to-pink-500"
              explanation="Plus on consomme d'un bien, moins chaque unité supplémentaire nous apporte de satisfaction. C'est la saturation progressive."
            >
               <motion.div variants={containerVariant} className="w-full space-y-4">
                  
                  <motion.div variants={itemVariant} className="flex gap-4 overflow-x-auto pb-4">
                     {/* Glass 1 */}
                     <div className="min-w-[100px] flex flex-col items-center">
                        <div className="w-16 h-20 bg-blue-100 border-2 border-blue-200 rounded-b-lg mb-2 flex items-end justify-center pb-2 relative overflow-hidden">
                           <div className="absolute bottom-0 w-full h-[90%] bg-blue-400/50"></div>
                           <Smile className="text-blue-600 relative z-10" size={24} />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Verre 1</span>
                        <span className="text-lg font-black text-indigo-600">Um = 10</span>
                     </div>
                     
                     {/* Glass 3 */}
                     <div className="min-w-[100px] flex flex-col items-center opacity-75">
                        <div className="w-16 h-20 bg-blue-100 border-2 border-blue-200 rounded-b-lg mb-2 flex items-end justify-center pb-2 relative overflow-hidden">
                           <div className="absolute bottom-0 w-full h-[90%] bg-blue-400/50"></div>
                           <Smile className="text-blue-600 relative z-10" size={20} />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Verre 3</span>
                        <span className="text-lg font-black text-indigo-600">Um = 6</span>
                     </div>

                     {/* Glass 5 */}
                     <div className="min-w-[100px] flex flex-col items-center opacity-50">
                        <div className="w-16 h-20 bg-blue-100 border-2 border-blue-200 rounded-b-lg mb-2 flex items-end justify-center pb-2 relative overflow-hidden">
                           <div className="absolute bottom-0 w-full h-[90%] bg-blue-400/50"></div>
                           <div className="w-8 h-1 bg-slate-400 rounded-full relative z-10"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Verre 5</span>
                        <span className="text-lg font-black text-indigo-600">Um = 2</span>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-slate-100 p-4 rounded-xl flex items-center gap-3">
                     <div className="p-2 bg-white rounded-full shadow-sm"><TrendingDown className="text-slate-900" size={20}/></div>
                     <p className="text-sm font-medium text-slate-700">
                        L'intensité du besoin diminue au fur et à mesure qu'il est satisfait.
                     </p>
                  </motion.div>

               </motion.div>
            </StepCard>

             {/* STEP 4: Saturation */}
             <StepCard
              stepNumber={4}
              title="Point de Saturation"
              gradient="from-red-500 to-rose-600"
              explanation="Lorsque l'utilité marginale atteint zéro, l'utilité totale est à son maximum. Au-delà, consommer devient désagréable (désutilité)."
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                     <span className="text-xs font-bold text-green-600 uppercase">Max Satisfaction</span>
                     <div className="font-bold text-slate-900 text-lg">Um = 0</div>
                     <div className="text-xs text-slate-500 mt-1">Le besoin est totalement comblé.</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm">
                     <span className="text-xs font-bold text-red-600 uppercase">Désutilité</span>
                     <div className="font-bold text-slate-900 text-lg">Um &lt; 0</div>
                     <div className="text-xs text-slate-500 mt-1">Écoeurement, malade.</div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center">
                   <div className="flex flex-col items-center gap-2 p-6 bg-red-50 rounded-2xl border border-red-100">
                      <Frown size={32} className="text-red-500" />
                      <p className="text-center font-bold text-red-800 text-sm">
                         Verre n°7 : Um = -2<br/>
                         <span className="font-normal text-red-600">L'utilité totale commence à baisser.</span>
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