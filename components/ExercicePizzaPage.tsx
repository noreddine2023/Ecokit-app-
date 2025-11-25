import React from 'react';
import { StepCard } from './StepCard';
import { PizzaChart } from './PizzaChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Calculator, CheckCircle2, AlertTriangle, TrendingDown, PenTool, Pizza, Frown } from 'lucide-react';

interface ExercicePizzaPageProps {
  onBack: () => void;
}

export const ExercicePizzaPage: React.FC<ExercicePizzaPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #10</span>
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
            <BookCheck className="w-8 h-8 text-red-600" />
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-widest uppercase border border-red-200">
              Utilité Totale & Marginale
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            La Soirée Pizza
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse de la consommation de Yassine : Compléter le tableau d'utilité et comprendre le point de satiété.
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
                  <PizzaChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Pizza size={16} />
                     Données (UT connues)
                   </h4>
                   <div className="grid grid-cols-2 gap-1 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-400 uppercase border-b border-slate-200 pb-1">Parts</div>
                      <div className="font-bold text-slate-400 uppercase text-right border-b border-slate-200 pb-1">UT</div>
                      
                      <div>0</div><div className="text-right">0</div>
                      <div>1</div><div className="text-right">15</div>
                      <div>2</div><div className="text-right">27</div>
                      <div>3</div><div className="text-right">36</div>
                      <div>4</div><div className="text-right">42</div>
                      <div>5</div><div className="text-right">45</div>
                      <div>6</div><div className="text-right">45</div>
                      <div>7</div><div className="text-right">40</div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-red-600 uppercase mb-2">Partie 1 : Calculs</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-red-50 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-red-100">1</span>
                               Retrouver les valeurs (A, B, C, D, E).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-red-50 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-red-100">2</span>
                               Évolution et Loi Économique.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-red-50 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-red-100">3</span>
                               Analyse de la 6ème part (Point clé).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-red-600 uppercase mb-2">Partie 2 : Réflexion</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-red-50 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-red-100">4</span>
                               Pourquoi Um devient négative ?
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-red-50 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-red-100">5</span>
                               Équation de Um(x) si U(x) = 12x - x².
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-red-500/0 via-slate-300 to-amber-500/0 hidden md:block"></div>

            {/* PART 1: Calculation */}
            <StepCard
              stepNumber={1}
              title="Partie 1 : Calcul des Valeurs"
              gradient="from-red-500 to-orange-600"
              explanation="L'utilité marginale (Um) est le supplément de satisfaction apporté par la dernière part consommée : Um = UT(n) - UT(n-1)."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Valeurs Manquantes (Um)</h4>
                   
                   <div className="space-y-3">
                      {/* A */}
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <span className="bg-red-100 text-red-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">A</span>
                            <span className="text-sm text-slate-600">De 1 à 2 parts</span>
                         </div>
                         <div className="font-mono text-sm text-slate-500">27 - 15 = <span className="font-bold text-slate-900 text-lg">12</span></div>
                      </div>
                      {/* B */}
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <span className="bg-red-100 text-red-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">B</span>
                            <span className="text-sm text-slate-600">De 2 à 3 parts</span>
                         </div>
                         <div className="font-mono text-sm text-slate-500">36 - 27 = <span className="font-bold text-slate-900 text-lg">9</span></div>
                      </div>
                      {/* C */}
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <span className="bg-red-100 text-red-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">C</span>
                            <span className="text-sm text-slate-600">De 3 à 4 parts</span>
                         </div>
                         <div className="font-mono text-sm text-slate-500">42 - 36 = <span className="font-bold text-slate-900 text-lg">6</span></div>
                      </div>
                      {/* D */}
                      <div className="flex justify-between items-center bg-green-50 p-2 rounded-lg border border-green-100">
                         <div className="flex items-center gap-2">
                            <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">D</span>
                            <span className="text-sm text-green-900 font-bold">De 5 à 6 parts</span>
                         </div>
                         <div className="font-mono text-sm text-green-700">45 - 45 = <span className="font-bold text-green-900 text-lg">0</span></div>
                      </div>
                      {/* E */}
                      <div className="flex justify-between items-center bg-red-50 p-2 rounded-lg border border-red-100">
                         <div className="flex items-center gap-2">
                            <span className="bg-red-200 text-red-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">E</span>
                            <span className="text-sm text-red-900 font-bold">De 6 à 7 parts</span>
                         </div>
                         <div className="font-mono text-sm text-red-700">40 - 45 = <span className="font-bold text-red-900 text-lg">-5</span></div>
                      </div>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 2: Economic Law */}
            <StepCard
              stepNumber={2}
              title="Loi et Point de Satiété"
              gradient="from-orange-500 to-amber-500"
              explanation="Analyse de l'évolution des chiffres : 15 → 12 → 9 → 6 → 3 → 0 → -5."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="bg-slate-100 p-4 rounded-xl flex gap-3 items-start">
                   <TrendingDown size={24} className="text-slate-500 mt-1" />
                   <div>
                      <h5 className="font-bold text-slate-900 text-sm uppercase">Principe Confirmé</h5>
                      <p className="text-sm text-slate-600">
                        <strong>L'Utilité Marginale Décroissante</strong>. Le plaisir s'érode à mesure que l'estomac se remplit. La première part est toujours meilleure que la dernière.
                      </p>
                   </div>
                </motion.div>

                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                   <div className="inline-block p-3 bg-green-100 text-green-600 rounded-full mb-3">
                      <CheckCircle2 size={32} />
                   </div>
                   <h5 className="font-bold text-slate-900 text-xl">Point de Satiété : 6ème Part</h5>
                   <p className="text-sm text-slate-500 mt-2">
                      À ce stade, <strong>Um = 0</strong>. Yassine est totalement rassasié. L'utilité totale est à son maximum (45).
                   </p>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 3: Disutility */}
            <StepCard
              stepNumber={3}
              title="La Désutilité (Question 4)"
              gradient="from-amber-500 to-red-500"
              explanation="Que signifie une utilité marginale négative (-5) ?"
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col items-center text-center">
                     <Frown size={48} className="text-red-400 mb-3" />
                     <h5 className="font-bold text-red-900 text-lg">Indigestion !</h5>
                     <p className="text-red-700/80 text-sm mt-2 max-w-xs">
                        Manger la 7ème part fait <strong>baisser</strong> la satisfaction totale. Ce n'est plus du plaisir, c'est de la souffrance (mal au ventre).
                     </p>
                     <div className="mt-4 text-xs font-bold bg-white px-3 py-1 rounded-full text-red-500 shadow-sm">
                        Um = -5
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* PART 4: Continuous Model */}
            <StepCard
              stepNumber={4}
              title="Modélisation Mathématique (Q5)"
              gradient="from-red-600 to-purple-600"
              explanation="Si on passe à une fonction continue U(x) = 12x - x², comment trouve-t-on l'Utilité Marginale ?"
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-slate-900 text-white p-5 rounded-xl shadow-md border border-slate-700 text-center">
                     <p className="text-slate-400 text-xs uppercase font-bold mb-1">Règle Mathématique</p>
                     <p className="text-lg font-medium">L'Utilité Marginale est la <span className="text-purple-400 font-bold">dérivée</span> de l'Utilité Totale.</p>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
                     <div className="absolute top-0 right-0 p-3 text-purple-100"><PenTool size={32}/></div>
                     
                     <div className="space-y-4 font-mono">
                        <div className="pb-3 border-b border-slate-100">
                           <span className="text-xs text-slate-400 block mb-1">Fonction Totale</span>
                           <span className="text-lg font-bold text-slate-800">U(x) = 12x - x²</span>
                        </div>
                        
                        <div>
                           <span className="text-xs text-slate-400 block mb-1">Dérivation terme à terme</span>
                           <div className="flex flex-col gap-1 text-sm text-slate-600 ml-4 border-l-2 border-purple-200 pl-3">
                              <span>(12x)' = 12</span>
                              <span>(-x²)' = -2x</span>
                           </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                           <span className="text-xs text-purple-600 font-bold uppercase block mb-1">Résultat Final</span>
                           <span className="text-2xl font-bold text-purple-700">Um(x) = 12 - 2x</span>
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