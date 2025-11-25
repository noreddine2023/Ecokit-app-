import React from 'react';
import { StepCard } from './StepCard';
import { RationaliteChart } from './RationaliteChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Brain, CheckCircle2, Calculator, Activity, Share2, Scale, Ruler, ArrowRight } from 'lucide-react';

interface ExerciceRationalitePageProps {
  onBack: () => void;
}

export const ExerciceRationalitePage: React.FC<ExerciceRationalitePageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #08</span>
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
            <BookCheck className="w-8 h-8 text-purple-700" />
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold tracking-widest uppercase border border-purple-200">
              Logique du Consommateur
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Rationalité & Préférences
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Analyse détaillée des axiomes du choix, calcul de l'utilité et distinction fondamentale entre approche ordinale et cardinale.
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
                  <RationaliteChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Brain size={16} />
                     Paniers Disponibles
                   </h4>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-1 text-[10px] font-bold text-indigo-200">A</div>
                         <div className="text-xs font-bold text-indigo-500 uppercase">Panier A</div>
                         <div className="font-mono text-slate-900">2 Sandwichs</div>
                         <div className="font-mono text-slate-900">2 Boissons</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-1 text-[10px] font-bold text-emerald-200">B</div>
                         <div className="text-xs font-bold text-emerald-500 uppercase">Panier B</div>
                         <div className="font-mono text-slate-900">3 Sandwichs</div>
                         <div className="font-mono text-slate-900">2 Boissons</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-1 text-[10px] font-bold text-indigo-200">C</div>
                         <div className="text-xs font-bold text-indigo-500 uppercase">Panier C</div>
                         <div className="font-mono text-slate-900">1 Sandwich</div>
                         <div className="font-mono text-slate-900">4 Boissons</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-1 text-[10px] font-bold text-amber-200">D</div>
                         <div className="text-xs font-bold text-amber-500 uppercase">Panier D</div>
                         <div className="font-mono text-slate-900">4 Sandwichs</div>
                         <div className="font-mono text-slate-900">3 Boissons</div>
                      </div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase mb-2">Partie 1 : Axiomes</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">1</span>
                               Comparaison A vs B (Non-Saturation).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">2</span>
                               Cohérence du choix (Transitivité).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase mb-2">Partie 2 : Utilité</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">3</span>
                               Calcul de l'Utilité (U=X·Y).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">4</span>
                               Classement A et C (Indifférence).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-purple-50 text-purple-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-purple-100">5</span>
                               Approche Ordinale vs Cardinale.
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-slate-300 to-indigo-500/0 hidden md:block"></div>

            {/* PART 1: Axioms */}
            <StepCard
              stepNumber={1}
              title="Les Axiomes (Q1 & Q2)"
              gradient="from-purple-500 to-indigo-600"
              explanation="Le consommateur rationnel suit des règles logiques strictes pour classer ses préférences."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Question 1: Non-saturation */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Question 1</span>
                      <h4 className="font-bold text-slate-900">Comparaison A vs B</h4>
                   </div>
                   
                   <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg mb-4 font-mono text-sm">
                      <div>
                        <span className="block text-slate-500 text-xs">Panier A</span>
                        2X, 2Y
                      </div>
                      <div className="text-slate-400 text-xs italic">vs</div>
                      <div>
                        <span className="block text-slate-500 text-xs">Panier B</span>
                        <span className="text-emerald-600 font-bold">3X</span>, 2Y
                      </div>
                   </div>

                   <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                      <p className="text-sm text-emerald-900 font-medium mb-1">
                        <strong>Réponse :</strong> Le Panier B est préféré à A (B ≻ A).
                      </p>
                      <p className="text-xs text-emerald-700">
                        <strong>Justification :</strong> D'après l'<strong>Axiome de Non-Saturation</strong> ("plus est préféré à moins"), puisque B contient plus de sandwichs (3 > 2) pour la même quantité de boissons, il est obligatoirement préféré.
                      </p>
                   </div>
                </motion.div>

                {/* Question 2: Transitivity */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Question 2</span>
                      <h4 className="font-bold text-slate-900">La Cohérence (Transitivité)</h4>
                   </div>
                   
                   <p className="text-sm text-slate-600 mb-4">
                     Le consommateur dit : <span className="font-bold text-slate-800">D ≻ B</span> et <span className="font-bold text-slate-800">B ≻ A</span>.
                   </p>

                   <div className="flex justify-center items-center gap-3 mb-4">
                      <div className="text-center bg-slate-100 px-3 py-2 rounded-lg font-bold text-amber-600 text-sm">D ≻ B</div>
                      <ArrowRight size={16} className="text-slate-300"/>
                      <div className="text-center bg-slate-100 px-3 py-2 rounded-lg font-bold text-emerald-600 text-sm">B ≻ A</div>
                      <ArrowRight size={16} className="text-slate-300"/>
                      <div className="text-center bg-slate-900 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-lg transform scale-110">
                         D ≻ A
                      </div>
                   </div>

                   <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-xs text-indigo-900">
                     <strong>Conclusion :</strong> Il doit préférer D à A. C'est l'<strong>Axiome de Transitivité</strong>, essentiel pour éviter les choix circulaires illogiques.
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 2: Utility Calculation */}
            <StepCard
              stepNumber={2}
              title="Calcul de l'Utilité (Q3)"
              gradient="from-indigo-500 to-blue-600"
              explanation="Calculons le niveau de satisfaction pour chaque panier avec U = X × Y."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                <motion.div variants={itemVariant} className="text-center p-3 bg-slate-900 text-white rounded-xl shadow-lg mb-4">
                   <span className="text-xs opacity-70 uppercase tracking-widest font-bold block mb-1">Fonction d'Utilité</span>
                   <span className="text-2xl font-bold font-mono">U(x, y) = X · Y</span>
                </motion.div>

                {/* Calculations */}
                <div className="grid grid-cols-1 gap-3">
                   <motion.div variants={itemVariant} className="flex justify-between items-center bg-white p-4 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                      <div>
                        <span className="text-sm font-bold text-slate-700">Panier A (2, 2)</span>
                        <div className="text-xs text-slate-400">2 sandwichs, 2 boissons</div>
                      </div>
                      <div className="text-right">
                         <div className="font-mono text-xs text-slate-400 mb-1">2 × 2</div>
                         <div className="font-bold text-xl text-indigo-600 bg-indigo-50 px-2 py-1 rounded">4 utils</div>
                      </div>
                   </motion.div>

                   <motion.div variants={itemVariant} className="flex justify-between items-center bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                      <div>
                        <span className="text-sm font-bold text-slate-700">Panier B (3, 2)</span>
                        <div className="text-xs text-slate-400">3 sandwichs, 2 boissons</div>
                      </div>
                      <div className="text-right">
                         <div className="font-mono text-xs text-slate-400 mb-1">3 × 2</div>
                         <div className="font-bold text-xl text-emerald-600 bg-emerald-50 px-2 py-1 rounded">6 utils</div>
                      </div>
                   </motion.div>

                   <motion.div variants={itemVariant} className="flex justify-between items-center bg-white p-4 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                      <div>
                        <span className="text-sm font-bold text-slate-700">Panier C (1, 4)</span>
                        <div className="text-xs text-slate-400">1 sandwich, 4 boissons</div>
                      </div>
                      <div className="text-right">
                         <div className="font-mono text-xs text-slate-400 mb-1">1 × 4</div>
                         <div className="font-bold text-xl text-indigo-600 bg-indigo-50 px-2 py-1 rounded">4 utils</div>
                      </div>
                   </motion.div>
                </div>

              </motion.div>
            </StepCard>

            {/* PART 3: Indifference */}
            <StepCard
              stepNumber={3}
              title="Analyse : L'Indifférence (Q4)"
              gradient="from-blue-500 to-cyan-600"
              explanation="Comparaison des paniers A et C. Sont-ils sur la même courbe ?"
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                     <div className="flex justify-center gap-8 items-center mb-6">
                        <div className="text-center">
                           <div className="text-xs font-bold text-slate-400 uppercase mb-1">Panier A</div>
                           <div className="text-indigo-600 font-black text-3xl">4</div>
                        </div>
                        <Scale size={32} className="text-slate-300" />
                        <div className="text-center">
                           <div className="text-xs font-bold text-slate-400 uppercase mb-1">Panier C</div>
                           <div className="text-indigo-600 font-black text-3xl">4</div>
                        </div>
                     </div>
                     
                     <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                        <h5 className="font-bold text-cyan-900 mb-2">Conclusion : Indifférence (A ∼ C)</h5>
                        <p className="text-sm text-cyan-800 mb-3">
                           Les deux paniers procurent <strong>exactement le même niveau de satisfaction</strong>.
                        </p>
                        <div className="inline-block bg-white px-3 py-1 rounded text-xs font-bold text-cyan-600 uppercase border border-cyan-200 shadow-sm">
                           Même Courbe d'Indifférence
                        </div>
                     </div>
                     <p className="text-xs text-slate-500 italic mt-4">
                        Le consommateur accepte de perdre 1 sandwich (passer de 2 à 1) pour gagner 2 boissons (passer de 2 à 4), car le produit (l'utilité) reste constant.
                     </p>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* PART 4: Cardinal vs Ordinal */}
            <StepCard
              stepNumber={4}
              title="Nature de la Mesure (Q5)"
              gradient="from-cyan-600 to-teal-600"
              explanation="Approche Ordinale ou Cardinale ? Une distinction théorique majeure."
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="flex gap-4">
                     <div className="flex-1 bg-slate-900 text-white p-5 rounded-xl shadow-md border border-slate-700">
                        <div className="flex items-center gap-2 mb-3">
                           <Ruler size={18} className="text-teal-400"/>
                           <h5 className="font-bold text-sm uppercase text-teal-400">Cardinale</h5>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-3">
                           On donne une <strong>valeur chiffrée précise</strong> à la satisfaction (ex: "4 utils", "6 utils"). On mesure l'intensité du plaisir.
                        </p>
                        <div className="text-xs font-bold bg-teal-500/20 text-teal-300 px-2 py-1 rounded inline-block border border-teal-500/30">
                           C'est le cas ici !
                        </div>
                     </div>

                     <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-slate-200 opacity-60">
                        <div className="flex items-center gap-2 mb-3">
                           <Activity size={18} className="text-slate-400"/>
                           <h5 className="font-bold text-sm uppercase text-slate-500">Ordinale</h5>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-3">
                           On se contente de <strong>classer</strong> les paniers par ordre de préférence (ex: B préféré à A) sans donner de note.
                        </p>
                        <div className="text-xs font-medium text-slate-400 px-2 py-1">
                           Approche moderne
                        </div>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="text-center bg-teal-50 p-4 rounded-xl border border-teal-100">
                     <p className="text-sm font-medium text-teal-900">
                        <strong>Réponse :</strong> Puisque nous avons calculé des chiffres exacts (4 et 6), l'exercice relève de l'approche <strong>Cardinale</strong>.
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