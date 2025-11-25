import React from 'react';
import { StepCard } from './StepCard';
import { PaniersChart } from './PaniersChart';
import { motion } from 'framer-motion';
import { BookCheck, ArrowLeft, Calculator, ShoppingBag, Wallet, Brain, CheckCircle2, XCircle, Layers, Target } from 'lucide-react';

interface ExercicesPageProps {
  onBack: () => void;
}

export const ExercicesPage: React.FC<ExercicesPageProps> = ({ onBack }) => {
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-lime-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
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
          <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Exercice #07</span>
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
            <BookCheck className="w-8 h-8 text-emerald-700" />
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase border border-emerald-200">
              Comportement du Consommateur
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Le Choix des Paniers
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Introduction à la rationalité : Analyse des paniers, calcul des coûts et contrainte budgétaire.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Sticky Chart & Data */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit order-1 lg:order-1 mb-12 lg:mb-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden mb-6">
                  <PaniersChart />
                </div>
                
                {/* Context Box */}
                <div className="bg-white/60 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm text-sm text-slate-600">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Calculator size={16} />
                     Données du Marché
                   </h4>
                   <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                         <span className="text-slate-500">Prix Pomme (Px)</span>
                         <span className="font-bold font-mono">4 DH</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                         <span className="text-slate-500">Prix Banane (Py)</span>
                         <span className="font-bold font-mono">2 DH</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200">
                         <span className="text-slate-800 font-bold">Budget (R)</span>
                         <span className="font-bold font-mono text-emerald-600">30 DH</span>
                      </div>
                   </div>
                   
                   <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="font-bold text-slate-900 mb-2 text-xs uppercase">Paniers proposés</p>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                         <div className="bg-emerald-100 text-emerald-800 p-1 rounded font-bold">A (5, 5)</div>
                         <div className="bg-blue-100 text-blue-800 p-1 rounded font-bold">B (2, 10)</div>
                         <div className="bg-red-100 text-red-800 p-1 rounded font-bold">C (8, 0)</div>
                      </div>
                   </div>

                   <div className="mt-6 pt-6 border-t border-slate-200">
                     <h4 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Questions</h4>
                     <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-emerald-600 uppercase mb-2">Partie 1 : Compréhension</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">1</span>
                               Définition du Panier de Biens.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">2</span>
                               Définition de l'Ensemble de Consommation.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">3</span>
                               Critère de Choix (Rationalité).
                             </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-600 uppercase mb-2">Partie 2 : Application</p>
                          <ul className="space-y-2 text-sm font-medium text-slate-700">
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">4</span>
                               Calcul du coût des paniers A, B, C.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">5</span>
                               Identification des paniers accessibles.
                             </li>
                             <li className="flex gap-3">
                               <span className="bg-emerald-50 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 border border-emerald-100">6</span>
                               Réflexion : Quantité vs Préférence.
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
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-slate-300 to-lime-500/0 hidden md:block"></div>

            {/* STEP 1: Theory Definitions */}
            <StepCard
              stepNumber={1}
              title="Partie 1 : Compréhension du Cours"
              gradient="from-emerald-600 to-teal-600"
              explanation="Avant de calculer, il est crucial de bien définir les concepts : Panier, Ensemble de consommation et Rationalité."
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                {/* Question 1 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                     <ShoppingBag size={18} className="text-emerald-600"/> 1. La Notion de Panier de Biens
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed mb-3">
                     C'est l'unité de base de notre analyse.
                   </p>
                   <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm text-emerald-900 leading-relaxed">
                     <strong>Définition :</strong> Un panier de biens (ou panier de consommation) est un ensemble composé d'un ou de plusieurs produits (biens ou services) en quantités déterminées.
                   </div>
                   <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 italic">
                     <span className="bg-slate-100 px-2 py-1 rounded">Exemple</span>
                     Le vecteur (x=5, y=5) est un panier spécifique.
                   </div>
                </motion.div>

                {/* Question 2 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                     <Layers size={18} className="text-emerald-600"/> 2. L'Ensemble de Consommation
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed mb-3">
                     Il s'agit du "terrain de jeu" du consommateur.
                   </p>
                   <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm text-emerald-900 leading-relaxed">
                     <strong>Définition :</strong> L'ensemble de consommation représente la totalité des paniers de biens possibles que le consommateur peut imaginer consommer. C'est l'univers des choix potentiels, avant même de parler de prix ou de budget.
                   </div>
                </motion.div>

                {/* Question 3 */}
                <motion.div variants={itemVariant} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                     <Target size={18} className="text-emerald-600"/> 3. Le Critère de Choix (Rationalité)
                   </h4>
                   <p className="text-slate-600 text-sm leading-relaxed mb-3">
                     Comment le consommateur choisit-il ? Il ne tire pas à pile ou face.
                   </p>
                   <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm text-emerald-900 leading-relaxed">
                     Le consommateur rationnel classe les paniers selon l'<strong>Utilité</strong> (la satisfaction) qu'ils lui procurent. Il cherche toujours à <strong>maximiser</strong> cette utilité personnelle.
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 2: Cost Calculation */}
            <StepCard
              stepNumber={2}
              title="Partie 2 : Calcul des Coûts"
              gradient="from-teal-500 to-cyan-600"
              explanation="On calcule la valeur monétaire de chaque panier avec la formule : Coût = (Px · X) + (Py · Y)."
            >
              <motion.div variants={containerVariant} className="space-y-4 w-full">
                
                {/* Basket A */}
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                   <div className="flex justify-between font-bold text-slate-900 mb-2">
                      <span>Panier A (5, 5)</span>
                      <span className="text-emerald-600">30 DH</span>
                   </div>
                   <div className="font-mono text-sm text-slate-500">
                      (5 × 4) + (5 × 2) = 20 + 10
                   </div>
                </motion.div>

                {/* Basket B */}
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                   <div className="flex justify-between font-bold text-slate-900 mb-2">
                      <span>Panier B (2, 10)</span>
                      <span className="text-blue-600">28 DH</span>
                   </div>
                   <div className="font-mono text-sm text-slate-500">
                      (2 × 4) + (10 × 2) = 8 + 20
                   </div>
                </motion.div>

                {/* Basket C */}
                <motion.div variants={itemVariant} className="bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm">
                   <div className="flex justify-between font-bold text-slate-900 mb-2">
                      <span>Panier C (8, 0)</span>
                      <span className="text-red-600">32 DH</span>
                   </div>
                   <div className="font-mono text-sm text-slate-500">
                      (8 × 4) + (0 × 2) = 32 + 0
                   </div>
                </motion.div>

              </motion.div>
            </StepCard>

            {/* STEP 3: Accessibility */}
            <StepCard
              stepNumber={3}
              title="L'Ensemble Budgétaire (R = 30)"
              gradient="from-cyan-600 to-blue-600"
              explanation="Pour qu'un panier soit accessible, son coût doit être inférieur ou égal au revenu (C ≤ R)."
            >
               <motion.div variants={containerVariant} className="space-y-6 w-full">
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                     <motion.div variants={itemVariant} className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                        <div className="font-bold text-slate-900">A</div>
                        <div className="text-xs text-slate-500 mb-1">30 = 30</div>
                        <CheckCircle2 size={20} className="mx-auto text-emerald-600" />
                        <div className="text-[10px] uppercase font-bold text-emerald-700 mt-1">Accessible</div>
                     </motion.div>
                     
                     <motion.div variants={itemVariant} className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <div className="font-bold text-slate-900">B</div>
                        <div className="text-xs text-slate-500 mb-1">28 {'<'} 30</div>
                        <CheckCircle2 size={20} className="mx-auto text-blue-600" />
                        <div className="text-[10px] uppercase font-bold text-blue-700 mt-1">Accessible</div>
                     </motion.div>

                     <motion.div variants={itemVariant} className="bg-red-50 p-3 rounded-xl border border-red-200">
                        <div className="font-bold text-slate-900">C</div>
                        <div className="text-xs text-slate-500 mb-1">32 {'>'} 30</div>
                        <XCircle size={20} className="mx-auto text-red-600" />
                        <div className="text-[10px] uppercase font-bold text-red-700 mt-1">Impossible</div>
                     </motion.div>
                  </div>

                  <motion.div variants={itemVariant} className="flex items-center gap-3 bg-slate-100 p-4 rounded-lg text-sm text-slate-600 italic">
                     <Wallet size={20} className="text-slate-400"/>
                     <p>La contrainte budgétaire est une frontière stricte. Le panier C n'existe pas économiquement pour l'étudiant à l'instant T.</p>
                  </motion.div>

               </motion.div>
            </StepCard>

            {/* STEP 4: Preference Analysis */}
            <StepCard
              stepNumber={4}
              title="Réflexion : Quantité vs Préférence"
              gradient="from-blue-600 to-indigo-600"
              explanation="Question 6 : Le panier C contient plus de pommes que le B. Est-il forcément préféré ?"
              isLast={true}
            >
              <motion.div variants={containerVariant} className="space-y-6 w-full">
                
                <motion.div variants={itemVariant} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                   <h5 className="font-bold text-slate-900 text-lg mb-2">Réponse : NON !</h5>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     La quantité physique ne dicte pas la satisfaction psychologique. Avoir "plus" d'un bien (pommes) ne compense pas forcément le fait d'avoir "moins" d'un autre (0 banane dans le panier C).
                   </p>
                   <div className="inline-block bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-xs font-bold uppercase border border-indigo-100">
                     Le choix dépend des courbes d'indifférence (Goûts)
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