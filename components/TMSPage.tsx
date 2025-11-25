import React from 'react';
import { StepCard } from './StepCard';
import { TMSChart } from './TMSChart';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, ArrowRightLeft, TrendingDown, Scale, Banana, Apple } from 'lucide-react';

interface TMSPageProps {
  onBack: () => void;
}

export const TMSPage: React.FC<TMSPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Taux Marginal de Substitution</span>
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
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase border border-emerald-200">
              Choix du Consommateur
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le TMS
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Le Taux Marginal de Substitution mesure à quel taux un consommateur est prêt à échanger un bien contre un autre tout en gardant la même satisfaction.
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
                <TMSChart />
                
                {/* Context Box */}
                <div className="mt-6 bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Scale size={16} />
                     Scénario d'échange
                   </h4>
                   <p className="mb-3">
                     Le consommateur se déplace du point <strong>A</strong> au point <strong>B</strong> sur sa courbe d'indifférence.
                   </p>
                   <div className="flex justify-between items-center text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <div>
                        <span className="block text-slate-400 font-bold uppercase">Point A</span>
                        <span className="font-bold text-slate-900">2 X, 10 Y</span>
                      </div>
                      <ArrowRightLeft size={14} className="text-slate-400" />
                      <div className="text-right">
                        <span className="block text-slate-400 font-bold uppercase">Point B</span>
                        <span className="font-bold text-slate-900">4 X, 5 Y</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-slate-300 to-teal-500/0 hidden md:block"></div>

            {/* STEP 1: Definition */}
            <StepCard
              stepNumber={1}
              title="Qu'est-ce que le TMS ?"
              gradient="from-emerald-500 to-teal-600"
              explanation="C'est le 'taux d'échange' subjectif du consommateur. Combien de bananes suis-je prêt à sacrifier pour obtenir une pomme de plus ?"
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full text-center">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <p className="text-lg font-medium text-slate-700">
                     Le TMS répond à la question :<br/>
                     <span className="text-emerald-700 font-bold italic">"Combien de Y dois-je donner pour obtenir une unité de X ?"</span>
                   </p>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center gap-8">
                   <div className="flex flex-col items-center gap-2 opacity-50">
                      <Banana className="text-yellow-500 w-12 h-12" />
                      <span className="font-bold text-slate-400 line-through decoration-red-500 decoration-4">Ce que je perds</span>
                   </div>
                   <ArrowRightLeft className="w-8 h-8 text-slate-300 mt-2" />
                   <div className="flex flex-col items-center gap-2">
                      <Apple className="text-red-500 w-12 h-12" />
                      <span className="font-bold text-emerald-600">Ce que je gagne</span>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: The Indifference Curve */}
            <StepCard
              stepNumber={2}
              title="La Courbe d'Indifférence"
              gradient="from-teal-500 to-cyan-600"
              explanation="Tous les points sur cette courbe procurent exactement la même satisfaction (Utilité = 20). Passer de A à B ne change pas mon bonheur total."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex justify-between items-center bg-teal-50 p-4 rounded-xl border border-teal-100 text-teal-800 font-mono font-bold">
                   <span>Fonction d'Utilité</span>
                   <span>U = X · Y = 20</span>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Panier A</div>
                    <div className="font-mono text-sm text-slate-600">2 Pommes · 10 Bananes</div>
                    <div className="font-mono text-xl font-bold text-slate-900 mt-1">U = 20</div>
                  </motion.div>
                  <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Panier B</div>
                    <div className="font-mono text-sm text-slate-600">4 Pommes · 5 Bananes</div>
                    <div className="font-mono text-xl font-bold text-slate-900 mt-1">U = 20</div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariant} className="text-sm text-center text-slate-500 italic bg-slate-50 p-3 rounded-lg">
                  Le consommateur est <strong>indifférent</strong> entre le panier A et le panier B.
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Calculation */}
            <StepCard
              stepNumber={3}
              title="Calcul du TMS"
              gradient="from-cyan-600 to-blue-600"
              explanation="Le TMS se calcule comme le rapport inverse des variations. C'est la pente de la courbe (en valeur absolue)."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="text-center p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                   <div className="font-mono text-lg opacity-80 mb-1">Formule</div>
                   <div className="text-2xl font-bold tracking-wider">
                     TMS = - <span className="text-red-400">ΔY</span> / <span className="text-emerald-400">ΔX</span>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Application : Passage de A vers B</h4>
                   
                   <div className="space-y-4 font-mono">
                     <div className="flex justify-between items-center">
                        <span className="text-slate-500">Variation de Bananes (ΔY)</span>
                        <span className="font-bold text-red-500 bg-red-50 px-2 py-1 rounded">5 - 10 = -5</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-slate-500">Variation de Pommes (ΔX)</span>
                        <span className="font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">4 - 2 = +2</span>
                     </div>
                   </div>

                   <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-lg font-bold text-slate-900">TMS = - (-5 / 2)</span>
                      <span className="text-3xl font-black text-cyan-600">= 2.5</span>
                   </div>
                </motion.div>
                
                <motion.div variants={itemVariant} className="text-center text-sm font-medium text-slate-600">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded mr-2">Interprétation</span>
                  Je suis prêt à donner <strong>2.5 bananes</strong> pour avoir <strong>1 pomme</strong>.
                </motion.div>

              </motion.div>
            </StepCard>

             {/* STEP 4: Diminishing TMS */}
             <StepCard
              stepNumber={4}
              title="TMS Décroissant"
              gradient="from-blue-500 to-indigo-600"
              explanation="Plus j'ai de pommes, moins je les désire (saturation), et plus mes bananes deviennent rares et précieuses. Donc, je suis prêt à en échanger de moins en moins."
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="flex gap-2">
                   <div className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                      <div className="font-bold text-slate-900 mb-1">Au début (A)</div>
                      <div className="text-xs text-slate-500 mb-2">J'ai peu de pommes</div>
                      <div className="font-black text-xl text-blue-600">TMS Fort</div>
                      <div className="text-[10px] text-slate-400">Je paye cher pour avoir une pomme</div>
                   </div>
                   <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center opacity-70">
                      <div className="font-bold text-slate-900 mb-1">À la fin</div>
                      <div className="text-xs text-slate-500 mb-2">J'ai plein de pommes</div>
                      <div className="font-black text-xl text-slate-600">TMS Faible</div>
                      <div className="text-[10px] text-slate-400">Je donne peu pour une pomme de plus</div>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-indigo-50 p-4 rounded-xl flex items-start gap-3 border border-indigo-100">
                   <div className="p-1 bg-white rounded-full shadow-sm mt-1"><TrendingDown className="text-indigo-600" size={16}/></div>
                   <p className="text-sm font-medium text-indigo-900">
                     C'est la <strong>convexité</strong> de la courbe d'indifférence. Le consommateur préfère les mélanges équilibrés aux extrêmes.
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