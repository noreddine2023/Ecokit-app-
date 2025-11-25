import React from 'react';
import { StepCard } from './StepCard';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, HelpCircle, TrendingUp, TrendingDown, CheckCircle2, AlertTriangle, Calculator } from 'lucide-react';

interface ExerciceParapluiePageProps {
  onBack: () => void;
}

export const ExerciceParapluiePage: React.FC<ExerciceParapluiePageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #02</span>
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
            <BookCheck className="w-8 h-8 text-blue-700" />
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase border border-blue-200">
              Fonctions Inverses
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Marché des Parapluies
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse d'un marché local à Oujda. Manipulation des équations de prix et calcul de pénurie.
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
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
                   
                   <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                     <Calculator className="text-blue-600"/>
                     Données de l'Exercice
                   </h3>

                   <p className="text-slate-600 mb-6 leading-relaxed">
                     Les analystes ont estimé les comportements sur le marché des parapluies à l'aide des deux relations suivantes (où <span className="font-bold">P</span> est le prix en DH et <span className="font-bold">Q</span> la quantité) :
                   </p>

                   <div className="space-y-4 font-mono text-lg">
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Relation 1</span>
                         <span className="font-bold text-slate-900">P = 2Q + 10</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm">
                         <span className="text-xs text-slate-400 font-bold uppercase block mb-1">Relation 2</span>
                         <span className="font-bold text-slate-900">P = -Q + 100</span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-100">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <ul className="space-y-3 text-sm font-medium text-slate-700">
                       <li className="flex gap-3">
                         <span className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">1</span>
                         Identifier l'Offre et la Demande sans calcul.
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">2</span>
                         Calculer le prix et la quantité d'équilibre.
                       </li>
                       <li className="flex gap-3">
                         <span className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0">3</span>
                         Analyser la situation si le prix est fixé à 40 DH.
                       </li>
                     </ul>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: Solution Steps */}
          <div className="lg:col-span-7 space-y-32 relative pb-32 order-2 lg:order-2">
            
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-slate-300 to-cyan-500/0 hidden md:block"></div>

            {/* QUESTION 1: Identification */}
            <StepCard
              stepNumber={1}
              title="Identification des Fonctions"
              gradient="from-blue-600 to-indigo-600"
              explanation="On identifie l'offre et la demande en observant le signe du coefficient directeur (la pente) devant Q."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">P = <span className="text-green-600">+2</span>Q + 10</span>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Signe Positif</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Le prix et la quantité varient dans le même sens. Les producteurs veulent un prix plus élevé pour vendre plus.
                  </p>
                  <div className="mt-2 font-bold text-green-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est l'Offre (O)
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold text-lg">P = <span className="text-red-500">-1</span>Q + 100</span>
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Signe Négatif</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Relation inverse. Pour vendre plus, il faut baisser le prix. C'est le comportement des acheteurs.
                  </p>
                  <div className="mt-2 font-bold text-red-700 flex items-center gap-2">
                    <CheckCircle2 size={16}/> C'est la Demande (D)
                  </div>
                </motion.div>

                <div className="bg-indigo-50 p-4 rounded-lg flex gap-3 text-sm text-indigo-900 border border-indigo-100">
                  <HelpCircle className="shrink-0" size={20} />
                  <p><strong>Astuce :</strong> Signe (+) = Vendeur (Offre). Signe (-) = Acheteur (Demande).</p>
                </div>

              </motion.div>
            </StepCard>

            {/* QUESTION 2: Equilibrium */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Équilibre"
              gradient="from-cyan-500 to-blue-500"
              explanation="À l'équilibre, le prix de l'offre égale le prix de la demande. On pose l'égalité P_offre = P_demande."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full text-center">
                
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-lg">
                  <span className="text-green-600">2Q + 10</span> = <span className="text-red-600">-Q + 100</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex justify-center text-slate-400 text-sm">
                   Regrouper les Q à gauche
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono">
                  2Q + Q = 100 - 10
                  <br/>
                  <span className="font-bold text-slate-900 text-xl">3Q = 90</span>
                </motion.div>

                <motion.div variants={itemVariant} className="flex gap-4 mt-4">
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Quantité (Q*)</div>
                      <div className="text-3xl font-black">30</div>
                      <div className="text-xs opacity-50 font-mono">90 / 3</div>
                   </div>
                   <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xs uppercase opacity-70 mb-1">Prix (P*)</div>
                      <div className="text-3xl font-black">70 <span className="text-sm">DH</span></div>
                      <div className="text-xs opacity-50 font-mono">2(30) + 10</div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* QUESTION 3: Analysis at 40DH */}
            <StepCard
              stepNumber={3}
              title="Analyse du Prix à 40 DH"
              gradient="from-amber-500 to-red-500"
              explanation="Le prix est fixé à 40 DH. Attention : P est connu, on cherche Q. Il faut résoudre l'équation inverse pour chaque acteur."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="w-full space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Offre */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Offre (Vendeurs)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">40 = 2Q + 10</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">30 = 2Q</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qo = 15</div>
                        <p className="text-xs text-slate-400 mt-2">Prix bas = Vendeurs découragés</p>
                     </motion.div>
                     
                     {/* Demande */}
                     <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Demande (Clients)</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">40 = -Q + 100</div>
                        <div className="font-mono text-slate-600 text-sm mb-1">Q = 100 - 40</div>
                        <div className="font-black text-2xl text-slate-900 mt-2">Qd = 60</div>
                        <p className="text-xs text-slate-400 mt-2">Prix bas = Clients motivés</p>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                     
                     <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-red-800 font-bold uppercase tracking-widest mb-2">
                           <AlertTriangle size={18} />
                           Conclusion : Pénurie
                        </div>
                        <div className="text-4xl font-black text-red-600 mb-2">
                           45 <span className="text-lg text-red-400 font-medium">unités manquantes</span>
                        </div>
                        <p className="text-red-700/80 text-sm font-medium max-w-md mx-auto">
                           La demande (60) est largement supérieure à l'offre (15). Le prix de marché (40) est inférieur au prix d'équilibre (70).
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