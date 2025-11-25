import React from 'react';
import { StepCard } from './StepCard';
import { ConsoChocolatChart } from './ConsoChocolatChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, CheckCircle2, XCircle, Calculator, Activity, TrendingUp, PenTool, AlertTriangle } from 'lucide-react';

interface ExerciceConsoChocolatPageProps {
  onBack: () => void;
}

export const ExerciceConsoChocolatPage: React.FC<ExerciceConsoChocolatPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #11</span>
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
            <BookCheck className="w-8 h-8 text-purple-800" />
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold tracking-widest uppercase border border-purple-200">
              Utilité & Dérivées
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            La Consommation de Chocolat
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprendre l'utilité totale, marginale et le calcul de dérivées pour l'optimisation.
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
                  <ConsoChocolatChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Données du Tableau
                   </h4>
                   <div className="grid grid-cols-2 gap-1 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-400 uppercase border-b border-slate-200 pb-1">Carrés (Q)</div>
                      <div className="font-bold text-slate-400 uppercase text-right border-b border-slate-200 pb-1">UT</div>
                      
                      <div>0</div><div className="text-right">0</div>
                      <div>1</div><div className="text-right">10</div>
                      <div>2</div><div className="text-right">18</div>
                      <div>3</div><div className="text-right">24</div>
                      <div>4</div><div className="text-right">28</div>
                      <div>5</div><div className="text-right">30</div>
                      <div>6</div><div className="text-right">30</div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase mb-2">Partie 1 : Questions de Cours</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">1</span>
                               L'UT est-elle la somme des Um ? (V/F)
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">2</span>
                               Si UT baisse, Um est positive ? (V/F)
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">3</span>
                               "2 fois plus" = Ordinal ? (V/F)
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase mb-2">Partie 2 : Analyse Graphique</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">4</span>
                               Calcul des Um pour Q=2 à 6.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">5</span>
                               Signification Um du 3ème carré.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">6</span>
                               Niveau d'arrêt optimal.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase mb-2">Partie 3 : Mathématiques</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">7</span>
                               Déterminer l'expression Um(x).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">8</span>
                               Calculer x pour Um = 0.
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-slate-300 to-pink-500/0 hidden md:block"></div>

            {/* PART 1: Theory Questions */}
            <StepCard
              stepNumber={1}
              title="Questions de Cours (Vrai/Faux)"
              gradient="from-purple-600 to-violet-600"
              explanation="Vérification des concepts théoriques : Relation UT/Um, signification de la baisse d'utilité et distinction ordinal/cardinal."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Q1 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 1</span>
                      <span className="text-emerald-600 font-black text-lg flex items-center gap-1"><CheckCircle2 size={18}/> Vrai</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     L'Utilité Totale est la somme des Utilités Marginales.
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Justification :</strong> L'UT n'est que l'accumulation de toutes les petites satisfactions successives (marginales). \(UT(Q) = \sum Um\).
                   </div>
                </motion.div>

                {/* Q2 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 2</span>
                      <span className="text-red-500 font-black text-lg flex items-center gap-1"><XCircle size={18}/> Faux</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     Si UT diminue, Um est positive.
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Correction :</strong> C'est l'inverse ! Si UT diminue, c'est que la dernière unité a fait baisser le bonheur total. L'Um est donc <strong>négative</strong>.
                   </div>
                </motion.div>

                {/* Q3 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 3</span>
                      <span className="text-red-500 font-black text-lg flex items-center gap-1"><XCircle size={18}/> Faux</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     Approche Ordinale : "2 fois plus de plaisir".
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Correction :</strong> Dire "2 fois plus" est une mesure précise, donc <strong>Cardinale</strong>. L'Ordinale ne fait que classer (A préféré à B).
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 2: Table Calculation */}
            <StepCard
              stepNumber={2}
              title="Analyse du Tableau"
              gradient="from-violet-600 to-fuchsia-600"
              explanation="Calcul des utilités marginales (Um) par la méthode des différences : Um = UT(n) - UT(n-1)."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Calculs Détaillés (Q4)</h4>
                   
                   <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between p-2 rounded hover:bg-slate-50">
                         <span className="text-slate-500">Q=2</span>
                         <span>18 - 10 = <strong className="text-violet-600">8</strong></span>
                      </div>
                      <div className="flex justify-between p-2 rounded hover:bg-slate-50">
                         <span className="text-slate-500">Q=3</span>
                         <span>24 - 18 = <strong className="text-violet-600">6</strong></span>
                      </div>
                      <div className="flex justify-between p-2 rounded hover:bg-slate-50">
                         <span className="text-slate-500">Q=4</span>
                         <span>28 - 24 = <strong className="text-violet-600">4</strong></span>
                      </div>
                      <div className="flex justify-between p-2 rounded hover:bg-slate-50">
                         <span className="text-slate-500">Q=5</span>
                         <span>30 - 28 = <strong className="text-violet-600">2</strong></span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-green-50 border border-green-100">
                         <span className="text-green-800 font-bold">Q=6</span>
                         <span className="text-green-900">30 - 30 = <strong className="text-green-700">0</strong></span>
                      </div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 3: Interpretation */}
            <StepCard
              stepNumber={3}
              title="Interprétation Économique"
              gradient="from-fuchsia-600 to-pink-600"
              explanation="Analyse de la signification des chiffres obtenus."
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg">
                     <div className="flex items-center gap-3 mb-2 text-violet-600">
                        <Activity size={24} />
                        <h5 className="font-bold text-slate-900 text-lg">Le 3ème Carré (Q5)</h5>
                     </div>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        Pour le 3ème carré, <strong>Um = 6</strong>. Cela signifie que la consommation spécifique de <em>cette unité</em> a augmenté le bonheur total de Sarah de 6 utils.
                     </p>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex items-center gap-4">
                     <div className="bg-white p-2 rounded-full shadow-sm"><AlertTriangle size={20} className="text-pink-600"/></div>
                     <div>
                        <div className="text-xs uppercase font-bold text-pink-800/60">Point d'Arrêt (Q6)</div>
                        <div className="font-bold text-pink-900">6 Carrés (Satiété)</div>
                        <div className="text-xs text-pink-800 mt-1">Au-delà, Um devient négative (maladie).</div>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* PART 4: Mathematical Model */}
            <StepCard
              stepNumber={4}
              title="Modélisation Mathématique (Q7 & Q8)"
              gradient="from-pink-600 to-rose-600"
              explanation="Passage à une fonction continue : Calcul de dérivée pour trouver l'optimum."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-slate-900 text-white p-5 rounded-xl shadow-md border border-slate-700 text-center">
                     <div className="text-xs font-bold text-slate-400 uppercase font-bold mb-1">Fonction d'Utilité</div>
                     <div className="text-2xl font-mono font-bold tracking-wide">U(x) = 11x - x²</div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
                     <div className="absolute top-0 right-0 p-3 text-pink-100"><PenTool size={32}/></div>
                     
                     <div className="space-y-4 font-mono">
                        <div className="pb-3 border-b border-slate-100">
                           <span className="text-xs text-slate-400 block mb-1">Question 7 : Dérivée Um(x)</span>
                           <div className="text-sm text-slate-600 border-l-2 border-pink-200 pl-3">
                              (11x)' = 11<br/>
                              (-x²)' = -2x
                           </div>
                           <div className="mt-2 font-bold text-pink-600 text-lg">Um(x) = 11 - 2x</div>
                        </div>
                        
                        <div className="pt-1">
                           <span className="text-xs text-slate-400 block mb-1">Question 8 : Point Zéro (Um = 0)</span>
                           <div className="text-sm text-slate-600 border-l-2 border-pink-200 pl-3 mb-2">
                              11 - 2x = 0<br/>
                              2x = 11<br/>
                              x = 5.5
                           </div>
                           <div className="flex items-center gap-2 bg-green-50 p-2 rounded border border-green-100 text-green-800 text-xs font-bold uppercase">
                              <TrendingUp size={14}/> Optimum Mathématique : x = 5.5
                           </div>
                        </div>
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