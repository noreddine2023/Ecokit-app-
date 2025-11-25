import React from 'react';
import { StepCard } from './StepCard';
import { SalmaChart } from './SalmaChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Scale, CheckCircle2, TrendingDown, Calculator, Coffee, Croissant, PenTool, ArrowRightLeft } from 'lucide-react';

interface ExerciceSalmaPageProps {
  onBack: () => void;
}

export const ExerciceSalmaPage: React.FC<ExerciceSalmaPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #12</span>
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
            <BookCheck className="w-8 h-8 text-pink-700" />
            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold tracking-widest uppercase border border-pink-200">
              Préférences & TMS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Les Préférences de Salma
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Modélisation des goûts : Courbes d'indifférence, calcul du taux marginal de substitution et cas particuliers.
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
                  <SalmaChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Données du Problème
                   </h4>
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-center">
                      <span className="block text-xs text-slate-400 uppercase mb-1">Fonction d'Utilité</span>
                      <span className="text-xl font-bold text-slate-900">U(x, y) = x · y</span>
                   </div>
                   <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                         <Coffee size={14} /> Bien X (Café)
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-pink-600 bg-pink-50 p-2 rounded-lg border border-pink-100">
                         <Croissant size={14} /> Bien Y (Croissant)
                      </div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-pink-600 uppercase mb-2">Partie 1 : Théorie</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">1</span>
                               Iso-satisfaction : Panier A vs B.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">2</span>
                               Propriétés des Courbes (Pente, Intersection).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">3</span>
                               Définition du TMS.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-pink-600 uppercase mb-2">Partie 2 : Calculs</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">4</span>
                               Équation de la courbe (U=16).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">5</span>
                               Calcul du TMS en (2, 8).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">6</span>
                               Interprétation du résultat.
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-pink-600 uppercase mb-2">Partie 3 : Réflexion</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">7</span>
                               Stylos Bleu/Noir (Substituts).
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-pink-50 text-pink-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-pink-100">8</span>
                               Chaussures (Compléments).
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-pink-500/0 via-slate-300 to-purple-500/0 hidden md:block"></div>

            {/* PART 1: Theory */}
            <StepCard
              stepNumber={1}
              title="Partie 1 : Théorie des Préférences"
              gradient="from-pink-500 to-rose-600"
              explanation="Définitions clés : Iso-satisfaction, propriétés des courbes et concept du TMS."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Q1 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2">1. Concept d'Iso-satisfaction</h4>
                   <p className="text-sm text-slate-600 leading-relaxed mb-2">
                     Si Panier A et Panier B sont sur la même courbe, Salma est <strong>indifférente</strong> entre les deux.
                   </p>
                   <div className="inline-block bg-pink-50 text-pink-800 px-3 py-1 rounded text-xs font-bold">
                     Même niveau d'utilité
                   </div>
                </motion.div>

                {/* Q2 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2">2. Propriétés des Courbes</h4>
                   <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                         <TrendingDown size={16} className="text-slate-400 shrink-0"/>
                         <span><strong>Pente Négative :</strong> Pour garder la même satisfaction, si on enlève du Y, il faut compenser par du X.</span>
                      </li>
                      <li className="flex gap-2">
                         <ArrowRightLeft size={16} className="text-slate-400 shrink-0"/>
                         <span><strong>Non-Intersection :</strong> Elles ne se croisent jamais (sinon incohérence logique).</span>
                      </li>
                   </ul>
                </motion.div>

                {/* Q3 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2">3. Définition du TMS</h4>
                   <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 italic">
                     "Le taux auquel le consommateur est prêt à échanger une quantité de Y contre une unité de X tout en gardant la même satisfaction."
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 2: Calculation */}
            <StepCard
              stepNumber={2}
              title="Partie 2 : Calculs & Équations"
              gradient="from-rose-500 to-purple-600"
              explanation="Application mathématique pour un niveau d'utilité fixe U = 16."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Q4 */}
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3 text-purple-100"><PenTool size={40}/></div>
                   <h4 className="font-bold text-slate-900 mb-3">4. Équation de la Courbe</h4>
                   <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between items-center text-slate-500">
                         <span>On fixe U</span>
                         <span>x · y = 16</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-900 font-bold pt-2 border-t border-slate-100">
                         <span>On isole y</span>
                         <span className="text-lg text-purple-600">y = 16 / x</span>
                      </div>
                   </div>
                   <div className="text-xs text-slate-400 mt-2 italic">Forme : Hyperbole équilatère (Convexe)</div>
                </motion.div>

                {/* Q5 */}
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-3">5. Calcul du TMS en (2, 8)</h4>
                   
                   <div className="mb-3 bg-slate-50 p-2 rounded text-xs font-mono text-slate-600">
                      Um(x) = y <br/>
                      Um(y) = x
                   </div>

                   <div className="text-center py-2 border-y border-slate-100 font-mono mb-3">
                      TMS = y / x
                   </div>

                   <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">Point (x=2, y=8)</div>
                      <div className="text-2xl font-black text-purple-600">TMS = 4</div>
                   </div>
                   <div className="text-xs text-right font-mono text-slate-400">8 / 2 = 4</div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* PART 3: Interpretation */}
            <StepCard
              stepNumber={3}
              title="Interprétation Économique (Q6)"
              gradient="from-purple-600 to-indigo-600"
              explanation="Que signifie concrètement un TMS de 4 ?"
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <motion.div variants={itemVariant} className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex gap-4 items-start">
                     <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600 mt-1">
                        <Scale size={24} />
                     </div>
                     <div>
                        <h5 className="font-bold text-indigo-900 mb-2 text-lg">L'Échange Subjectif</h5>
                        <p className="text-indigo-800/80 text-sm leading-relaxed">
                           Salma possède beaucoup de croissants (8) et peu de café (2). Elle est donc prête à sacrifier <strong>4 croissants</strong> pour obtenir seulement <strong>1 café</strong> supplémentaire.
                        </p>
                     </div>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* PART 4: Special Cases */}
            <StepCard
              stepNumber={4}
              title="Partie 3 : Nature des Biens"
              gradient="from-indigo-600 to-blue-600"
              explanation="Comment la forme des courbes change-t-elle pour des biens particuliers ?"
              isLast={true}
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  {/* Scenario A */}
                  <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-blue-300 transition-colors">
                     <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-slate-400">Scénario A</span>
                        <span className="text-xs font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Substituts Parfaits</span>
                     </div>
                     <h5 className="font-bold text-slate-900 mb-1">Stylos Bleu vs Noir</h5>
                     <p className="text-sm text-slate-600 mb-2">Ils sont interchangeables à 1 pour 1.</p>
                     <div className="text-sm font-medium text-slate-800 flex items-center gap-2">
                        <PenTool size={14}/> Forme : Droites décroissantes
                     </div>
                  </motion.div>

                  {/* Scenario B */}
                  <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-indigo-300 transition-colors">
                     <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-slate-400">Scénario B</span>
                        <span className="text-xs font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Compléments Parfaits</span>
                     </div>
                     <h5 className="font-bold text-slate-900 mb-1">Chaussure Gauche vs Droite</h5>
                     <p className="text-sm text-slate-600 mb-2">Doivent être consommés ensemble (proportions fixes).</p>
                     <div className="text-sm font-medium text-slate-800 flex items-center gap-2">
                        <CheckCircle2 size={14}/> Forme : En "L" (Angle droit)
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