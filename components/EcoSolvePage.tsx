import React from 'react';
import { motion } from 'framer-motion';
import { PageView } from '../App';
import { BookCheck, ArrowRight, ArrowLeft, PenTool, Calculator, TrendingUp, Lock } from 'lucide-react';

interface EcoSolvePageProps {
  onNavigate: (page: PageView) => void;
  onBack: () => void;
}

export const EcoSolvePage: React.FC<EcoSolvePageProps> = ({ onNavigate, onBack }) => {
  const exercises = [
    {
      id: 'ex1',
      title: "Exercice #01 : Le Marché du Chocolat",
      description: "Fondamentaux : Identification des courbes, calcul simple de l'équilibre et analyse d'un prix plafond.",
      difficulty: "Débutant",
      topic: "Mécanismes du Marché",
      target: 'exercice01' as const,
      locked: false,
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 'ex2',
      title: "Exercice #02 : Marché des Parapluies",
      description: "Fonctions Inverses : Manipulation des équations P(Q) et calcul de pénurie sur un marché local.",
      difficulty: "Débutant",
      topic: "Fonctions Inverses",
      target: 'exercice02' as const,
      locked: false,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 'ex3',
      title: "Exercice #03 : Jus d'Orange",
      description: "Analyse des surplus : Calcul de l'excédent et explication du mécanisme d'ajustement des prix.",
      difficulty: "Intermédiaire",
      topic: "Ajustements",
      target: 'exercice03' as const,
      locked: false,
      color: "from-orange-400 to-yellow-500"
    },
    {
      id: 'ex4',
      title: "Exercice #04 : Marché des Casquettes",
      description: "Intervention de l'État : Analyse complète d'un marché estival et des conséquences d'un prix plafond.",
      difficulty: "Intermédiaire",
      topic: "État & Déséquilibres",
      target: 'exercice04' as const,
      locked: false,
      color: "from-teal-400 to-emerald-600"
    },
    {
      id: 'ex5',
      title: "Exercice #05 : Le Marché des Glaces",
      description: "Analyse Graphique : Distinguer le mouvement le long de la courbe du déplacement de la courbe.",
      difficulty: "Intermédiaire",
      topic: "Graphiques",
      target: 'exercice05' as const,
      locked: false,
      color: "from-sky-400 to-blue-500"
    },
    {
      id: 'ex6',
      title: "Exercice #06 : Cahiers Scolaires",
      description: "Théorie & Calculs : Définitions du cours, calculs d'équilibre et analyse d'un prix administré.",
      difficulty: "Intermédiaire",
      topic: "Théorie des Prix",
      target: 'exercice06' as const,
      locked: false,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 'ex7',
      title: "Exercice #07 : Paniers de Fruits",
      description: "Introduction au Consommateur : Calcul de paniers, contrainte budgétaire et choix rationnels.",
      difficulty: "Débutant",
      topic: "Comportement (Axe 2)",
      target: 'exercices' as const, // Maps to ExercicesPage which now holds the Fruit Baskets exercise
      locked: false,
      color: "from-emerald-500 to-lime-600"
    },
    {
      id: 'ex8',
      title: "Exercice #08 : Rationalité & Préférences",
      description: "Logique du Choix : Axiomes (Transitivité, Non-Saturation) et calcul de l'utilité totale.",
      difficulty: "Intermédiaire",
      topic: "Utilité (Axe 2)",
      target: 'exercice08' as const,
      locked: false,
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      id: 'ex9',
      title: "Exercice #09 : L'Utilité et la Soif",
      description: "Calculs Discrets & Continus : Tableaux, point de satiété et dérivées d'une fonction d'utilité.",
      difficulty: "Avancé",
      topic: "Utilité Marginale",
      target: 'exercice09' as const,
      locked: false,
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 'ex10',
      title: "Exercice #10 : La Soirée Pizza",
      description: "Analyse de Tableaux : Calcul des valeurs manquantes, loi de décroissance et point de satiété.",
      difficulty: "Intermédiaire",
      topic: "Utilité (Tableau)",
      target: 'exercice10' as const,
      locked: false,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 'ex11',
      title: "Exercice #11 : Consommation de Chocolat",
      description: "Utilité & Dérivées : Concepts théoriques, calcul de tableau et optimisation mathématique.",
      difficulty: "Intermédiaire",
      topic: "Utilité & Maths",
      target: 'exercice11' as const,
      locked: false,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 'ex12',
      title: "Exercice #12 : Les Préférences de Salma",
      description: "Modélisation : Courbes d'indifférence, calcul du TMS et nature des biens (substituts/compléments).",
      difficulty: "Avancé",
      topic: "TMS & Préférences",
      target: 'exercice12' as const,
      locked: false,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 'ex13',
      title: "Exercice #13 : Les Courbes d'Ahmed",
      description: "TMS Discret : Calcul du taux d'échange sur tableau, analyse de la décroissance et convexité.",
      difficulty: "Intermédiaire",
      topic: "TMS Discret",
      target: 'exercice13' as const,
      locked: false,
      color: "from-sky-500 to-cyan-600"
    },
    {
      id: 'ex14',
      title: "Exercice #14 : Logique & Intuition",
      description: "Raisonnement : Liens TMS/Utilité, logique des courbes et cas particuliers sans calcul complexe.",
      difficulty: "Intermédiaire",
      topic: "Logique (Courbes)",
      target: 'exercice14' as const,
      locked: false,
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-slate-200 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-center max-w-[1400px] mx-auto">
         <div className="flex items-center gap-2 text-slate-900 cursor-pointer" onClick={onBack}>
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold text-sm">Retour Accueil</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white p-2 rounded-lg">
              <PenTool size={20} fill="currentColor" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">EcoSolve</span>
         </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-32">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-slate-900 text-white"
          >
            <BookCheck size={16} />
            <span className="font-bold text-sm tracking-wide uppercase">Banque d'Exercices</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Pratiquez & Maîtrisez.
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            Une collection d'exercices corrigés pas à pas pour valider vos acquis. <br/>
            Sélectionnez un sujet ci-dessous pour commencer.
          </motion.p>
        </div>

        {/* Exercises Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {exercises.map((ex) => (
            <motion.div 
              key={ex.id}
              variants={item}
              onClick={() => !ex.locked && ex.target && onNavigate(ex.target)}
              className={`
                group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl overflow-hidden
                ${!ex.locked ? 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-200' : 'opacity-80 cursor-not-allowed'}
                transition-all duration-300
              `}
            >
              {/* Decorative Gradient Blob */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${ex.color} opacity-5 rounded-bl-[100%] transition-transform group-hover:scale-125`}></div>

              <div className="flex justify-between items-start mb-6">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg
                  ${ex.locked ? 'bg-slate-200 text-slate-400' : `bg-gradient-to-br ${ex.color}`}
                `}>
                  {ex.locked ? <Lock size={20} /> : <Calculator size={20} />}
                </div>
                <div className="flex gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-slate-50 border-slate-200 text-slate-500">
                     {ex.difficulty}
                   </span>
                   <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-slate-50 border-slate-200 text-slate-500">
                     {ex.topic}
                   </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 pr-4 group-hover:text-indigo-900 transition-colors">
                {ex.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {ex.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                {ex.locked ? (
                   <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                     <Lock size={14} /> Bientôt Disponible
                   </span>
                ) : (
                   <>
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      <PenTool size={16} /> Commencer l'exercice
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                   </>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};