import React from 'react';
import { StepCard } from './StepCard';
import { UtiliteSoifChart } from './UtiliteSoifChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Calculator, CheckCircle2, XCircle, TrendingDown, PenTool, Sigma, HelpCircle } from 'lucide-react';

interface ExerciceUtiliteSoifPageProps {
  onBack: () => void;
}

export const ExerciceUtiliteSoifPage: React.FC<ExerciceUtiliteSoifPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #09</span>
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
            <BookCheck className="w-8 h-8 text-amber-600" />
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase border border-amber-200">
              Maximisation de l'Utilité
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            L'Utilité et la Soif
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Calculs discrets et continus : Du tableau de valeurs à la fonction dérivée.
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
                  <UtiliteSoifChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Tableau des Valeurs (Samir)
                   </h4>
                   <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-400 uppercase">Qté (Verres)</div>
                      <div className="font-bold text-slate-400 uppercase text-right">UT (Total)</div>
                      
                      <div className="border-b border-slate-200/50 py-1">0</div><div className="border-b border-slate-200/50 py-1 text-right">0</div>
                      <div className="border-b border-slate-200/50 py-1">1</div><div className="border-b border-slate-200/50 py-1 text-right">20</div>
                      <div className="border-b border-slate-200/50 py-1">2</div><div className="border-b border-slate-200/50 py-1 text-right">35</div>
                      <div className="border-b border-slate-200/50 py-1">3</div><div className="border-b border-slate-200/50 py-1 text-right">45</div>
                      <div className="border-b border-slate-200/50 py-1">4</div><div className="border-b border-slate-200/50 py-1 text-right">50</div>
                      <div className="py-1 font-bold text-amber-600">5</div><div className="py-1 text-right font-bold text-amber-600">50</div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-amber-600 uppercase mb-2">Partie 1 : Compréhension</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">1</span>
                               "Préfère" = Cardinale ? (Vrai/Faux)
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">2</span>
                               "20 utils" = Cardinale ? (Vrai/Faux)
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">3</span>
                               Formule Um = UT / Q ? (Vrai/Faux)
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-600 uppercase mb-2">Partie 2 : Calculs Discrets</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">4</span>
                               Compléter le tableau (Um).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">5</span>
                               Identifier le Point de Satiété.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">6</span>
                               Loi économique illustrée.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-600 uppercase mb-2">Partie 3 : Calculs Continus</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">7</span>
                               Expression de Um(x) (Dérivée).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-amber-50 text-amber-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-amber-100">8</span>
                               Calcul pour x = 2.
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-yellow-500/0 via-slate-300 to-amber-500/0 hidden md:block"></div>

            {/* PART 1: Concepts (Vrai/Faux) */}
            <StepCard
              stepNumber={1}
              title="Partie 1 : Concepts Fondamentaux"
              gradient="from-amber-500 to-orange-500"
              explanation="Vrai ou Faux ? Testons la compréhension des approches Cardinale vs Ordinale et des définitions."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Q1 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 1</span>
                      <span className="text-red-500 font-black text-lg flex items-center gap-1"><XCircle size={18}/> Faux</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     "Samir préfère la limonade au thé" = Approche <strong>Cardinale</strong>.
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Correction :</strong> C'est un classement (préférence), donc c'est l'approche <strong>Ordinale</strong>. On ne donne pas de note chiffrée.
                   </div>
                </motion.div>

                {/* Q2 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 2</span>
                      <span className="text-emerald-600 font-black text-lg flex items-center gap-1"><CheckCircle2 size={18}/> Vrai</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     "Le verre apporte 20 utils" = Approche <strong>Cardinale</strong>.
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Correction :</strong> On attribue une valeur chiffrée précise ("20 utils") à la satisfaction. C'est bien cardinal.
                   </div>
                </motion.div>

                {/* Q3 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">Question 3</span>
                      <span className="text-red-500 font-black text-lg flex items-center gap-1"><XCircle size={18}/> Faux</span>
                   </div>
                   <p className="text-slate-800 font-medium text-sm mb-3">
                     \(Um = UT / Q\)
                   </p>
                   <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
                     <strong>Correction :</strong> Ça c'est l'utilité <em>moyenne</em>. La formule marginale est \(Um = \Delta UT / \Delta Q\) (Variation).
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 2: Table Calculation */}
            <StepCard
              stepNumber={2}
              title="Partie 2 : Calculs Discrets"
              gradient="from-orange-500 to-amber-600"
              explanation="Remplissons le tableau de l'Utilité Marginale en calculant la différence entre chaque étape."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="grid grid-cols-1 gap-2">
                   {/* Row 1 */}
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <span className="text-xs font-bold text-slate-400">Verre 1</span>
                      <div className="font-mono text-sm text-slate-600">20 - 0</div>
                      <span className="text-lg font-black text-amber-600">= 20</span>
                   </div>
                   {/* Row 2 */}
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <span className="text-xs font-bold text-slate-400">Verre 2</span>
                      <div className="font-mono text-sm text-slate-600">35 - 20</div>
                      <span className="text-lg font-black text-amber-600">= 15</span>
                   </div>
                   {/* Row 3 */}
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <span className="text-xs font-bold text-slate-400">Verre 3</span>
                      <div className="font-mono text-sm text-slate-600">45 - 35</div>
                      <span className="text-lg font-black text-amber-600">= 10</span>
                   </div>
                   {/* Row 4 */}
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <span className="text-xs font-bold text-slate-400">Verre 4</span>
                      <div className="font-mono text-sm text-slate-600">50 - 45</div>
                      <span className="text-lg font-black text-amber-600">= 5</span>
                   </div>
                   {/* Row 5 */}
                   <div className="flex items-center justify-between bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm">
                      <span className="text-xs font-bold text-amber-800">Verre 5</span>
                      <div className="font-mono text-sm text-amber-900">50 - 50</div>
                      <span className="text-lg font-black text-amber-600">= 0</span>
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 3: Analysis */}
            <StepCard
              stepNumber={3}
              title="Analyse : Satiété et Loi"
              gradient="from-amber-600 to-red-500"
              explanation="Que nous disent ces chiffres sur le comportement du consommateur ?"
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                     <h5 className="font-bold text-slate-900 text-lg mb-1">Point de Satiété : Verre n°5</h5>
                     <div className="text-4xl font-black text-red-500 my-3">Um = 0</div>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        Le 5ème verre n'ajoute <strong>aucune satisfaction</strong> supplémentaire. L'envie est totalement comblée. Au-delà, ce serait de la désutilité (écoeurement).
                     </p>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-slate-100 p-4 rounded-xl border border-slate-200 flex items-center gap-4">
                     <div className="bg-white p-2 rounded-full shadow-sm"><TrendingDown size={20} className="text-amber-600"/></div>
                     <div>
                        <div className="text-xs uppercase font-bold text-slate-500">Loi Économique</div>
                        <div className="font-bold text-slate-900">Utilité Marginale Décroissante</div>
                        <div className="text-xs text-slate-500 font-mono mt-1">20 → 15 → 10 → 5 → 0</div>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* PART 4: Continuous Calculation */}
            <StepCard
              stepNumber={4}
              title="Partie 3 : Cas Continu (Dérivée)"
              gradient="from-red-500 to-fuchsia-600"
              explanation="Si la fonction est continue, on utilise la dérivée pour trouver l'Utilité Marginale."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-slate-900 text-white p-5 rounded-xl shadow-md border border-slate-700 text-center">
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2">Fonction Totale</div>
                     <div className="text-2xl font-mono font-bold tracking-wide">U(x) = 10x - x²</div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative">
                     <div className="absolute top-0 right-0 p-2 text-slate-100"><PenTool size={40}/></div>
                     <h5 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Question 7 : Calcul de la Dérivée</h5>
                     <div className="space-y-2 font-mono text-sm text-slate-600">
                        <div className="flex justify-between">
                           <span>Dérivée de 10x</span>
                           <span className="font-bold text-slate-800">10</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Dérivée de -x²</span>
                           <span className="font-bold text-slate-800">-2x</span>
                        </div>
                     </div>
                     <div className="mt-4 bg-fuchsia-50 p-3 rounded-lg text-center border border-fuchsia-100">
                        <span className="text-fuchsia-900 font-bold font-mono text-lg">Um(x) = 10 - 2x</span>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                     <h5 className="font-bold text-slate-900 mb-2">Question 8 : Calcul pour x = 2</h5>
                     <div className="font-mono text-slate-500 mb-2">Remplacez x par 2</div>
                     <div className="text-3xl font-black text-fuchsia-600 mb-1">
                        Um(2) = 6
                     </div>
                     <div className="text-xs text-slate-400 font-mono">10 - 2(2) = 10 - 4 = 6</div>
                  </motion.div>

               </motion.div>
            </StepCard>

          </div>
        </div>
      </div>
    </div>
  );
};