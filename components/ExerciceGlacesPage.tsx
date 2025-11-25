import React from 'react';
import { StepCard } from './StepCard';
import { GlacesChart } from './GlacesChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, CheckCircle2, TrendingUp, TrendingDown, Sun, ArrowUpRight, Copy } from 'lucide-react';

interface ExerciceGlacesPageProps {
  onBack: () => void;
}

export const ExerciceGlacesPage: React.FC<ExerciceGlacesPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #05</span>
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
            <BookCheck className="w-8 h-8 text-sky-700" />
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase border border-sky-200">
              Analyse Graphique
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché des Glaces
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Distinction fondamentale : Comprendre la différence entre un mouvement le long de la courbe et un déplacement de la courbe.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Chart (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <GlacesChart />
                
                <div className="mt-6 bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <HelpCircle size={16} />
                     Scénario
                   </h4>
                   <p className="mb-3">
                     Sur la plage de Saïdia :
                   </p>
                   <ul className="space-y-2">
                     <li className="flex justify-between items-center bg-sky-50 p-2 rounded-lg">
                       <span><span className="font-bold">Point A :</span> 10 DH</span>
                       <span className="font-mono font-bold">500 boules</span>
                     </li>
                     <li className="flex justify-between items-center bg-sky-50 p-2 rounded-lg">
                       <span><span className="font-bold">Point B :</span> 15 DH</span>
                       <span className="font-mono font-bold">300 boules</span>
                     </li>
                   </ul>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Solution Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-sky-500/0 via-slate-300 to-indigo-500/0 hidden md:block"></div>

            {/* QUESTION 1: Analysis */}
            <StepCard
              stepNumber={1}
              title="Analyse Graphique (A vs B)"
              gradient="from-sky-500 to-blue-600"
              explanation="On place les points sur le graphique. Le point B (Prix plus haut) est situé au-dessus et à gauche du point A."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex gap-4">
                   <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">Point A</div>
                      <div className="text-xl font-black text-sky-600">10 DH</div>
                      <div className="text-sm text-slate-500">500 Qté</div>
                   </div>
                   <div className="flex items-center text-slate-300">
                     <ArrowUpRight size={24} />
                   </div>
                   <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">Point B</div>
                      <div className="text-xl font-black text-indigo-600">15 DH</div>
                      <div className="text-sm text-slate-500">300 Qté</div>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex gap-3 items-center">
                   <div className="p-2 bg-white rounded-lg shadow-sm">
                     <TrendingUp size={20} className="text-sky-600"/>
                   </div>
                   <p className="text-sm font-medium text-sky-900">
                     Le point B est <strong>plus haut</strong> (Prix ↑) et <strong>plus à gauche</strong> (Quantité ↓).
                   </p>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 2: Movement Type */}
            <StepCard
              stepNumber={2}
              title="Nature du Mouvement"
              gradient="from-blue-600 to-indigo-600"
              explanation="Pour aller de A à B, nous n'avons pas besoin de tracer une nouvelle ligne. Nous glissons simplement sur la courbe existante."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-4 opacity-5 font-black text-8xl rotate-12">Curve</div>
                   
                   <h4 className="font-bold text-slate-900 text-lg mb-2">Verdict Graphique</h4>
                   <p className="text-slate-600 leading-relaxed">
                     Le changement se fait sur la même relation mathématique. On ne change pas de courbe, on change de position <strong>sur</strong> la courbe.
                   </p>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center">
                   <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold border border-indigo-200">
                     <CheckCircle2 size={16}/> Mouvement LE LONG de la courbe
                   </span>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 3: Causality */}
            <StepCard
              stepNumber={3}
              title="La Cause Unique"
              gradient="from-indigo-500 to-purple-600"
              explanation="Ce mouvement est causé uniquement par la variation du PRIX du bien lui-même. Toutes les autres variables sont constantes."
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <motion.div variants={itemVariant} className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg text-center">
                     <p className="text-slate-300 text-xs uppercase tracking-widest mb-2">Règle d'Or</p>
                     <p className="text-xl font-bold leading-relaxed">
                       Variation du <span className="text-sky-400 font-black">PRIX</span> <br/>
                       = <br/>
                       <span className="text-indigo-400 font-black">Mouvement</span> sur la courbe
                     </p>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-600 italic text-center">
                     Hypothèse <strong>Ceteris Paribus</strong> : "Toutes choses étant égales par ailleurs" (Météo, Revenu, Mode ne changent pas).
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* QUESTION 4: Shift/Canicule */}
            <StepCard
              stepNumber={4}
              title="Impact de la Canicule"
              gradient="from-amber-500 to-orange-500"
              explanation="Si le prix ne change pas (10 DH) mais que les ventes explosent (800) à cause de la chaleur, ce n'est plus le même mouvement."
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl border border-amber-100">
                   <div className="bg-white p-3 rounded-full shadow-sm text-amber-500">
                     <Sun size={24} />
                   </div>
                   <div>
                     <h5 className="font-bold text-amber-900">Facteur Exogène : Météo</h5>
                     <p className="text-xs text-amber-700">Le prix est le même, mais l'envie de glace change.</p>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg">
                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                      <span className="text-slate-500 font-mono">Point A (Initial)</span>
                      <span className="font-bold">10 DH → 500 Qté</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-mono font-bold">Point C (Canicule)</span>
                      <span className="font-bold text-amber-600">10 DH → 800 Qté</span>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="text-center">
                   <p className="text-slate-600 mb-2 font-medium">
                     La relation initiale est brisée. Il faut tracer une nouvelle courbe à droite.
                   </p>
                   <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold border border-amber-200">
                     <Copy size={16}/> DÉPLACEMENT DE LA COURBE
                   </span>
                </motion.div>

              </motion.div>
            </StepCard>

          </div>
        </div>
      </div>
    </div>
  );
};