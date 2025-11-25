import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { MarketEquilibriumPage } from './components/MarketEquilibriumPage';
import { MarketDisequilibriumPage } from './components/MarketDisequilibriumPage';
import { LawOfSupplyDemandPage } from './components/LawOfSupplyDemandPage';
import { UtilityPage } from './components/UtilityPage';
import { TMSPage } from './components/TMSPage';
import { ExercicesPage } from './components/ExercicesPage';
import { EcoSolvePage } from './components/EcoSolvePage';
import { ExerciceParapluiePage } from './components/ExerciceParapluiePage';
import { ExerciceChocolatPage } from './components/ExerciceChocolatPage';
import { ExerciceJusPage } from './components/ExerciceJusPage';
import { ExerciceCasquettePage } from './components/ExerciceCasquettePage';
import { ExerciceGlacesPage } from './components/ExerciceGlacesPage';
import { ExerciceCahierPage } from './components/ExerciceCahierPage';
import { ExerciceRationalitePage } from './components/ExerciceRationalitePage';
import { ExerciceUtiliteSoifPage } from './components/ExerciceUtiliteSoifPage';
import { ExercicePizzaPage } from './components/ExercicePizzaPage';
import { ExerciceConsoChocolatPage } from './components/ExerciceConsoChocolatPage';
import { ExerciceSalmaPage } from './components/ExerciceSalmaPage';
import { ExerciceAhmedPage } from './components/ExerciceAhmedPage';
import { ExerciceLogiquePage } from './components/ExerciceLogiquePage';

export type PageView = 'home' | 'calculator' | 'disequilibrium' | 'law' | 'utility' | 'tms' | 'exercices' | 'ecosolve' | 'exercice01' | 'exercice02' | 'exercice03' | 'exercice04' | 'exercice05' | 'exercice06' | 'exercice08' | 'exercice09' | 'exercice10' | 'exercice11' | 'exercice12' | 'exercice13' | 'exercice14';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <LandingPage onNavigate={(page) => setCurrentPage(page)} />
          </motion.div>
        )}

        {currentPage === 'ecosolve' && (
          <motion.div
            key="ecosolve"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <EcoSolvePage onNavigate={(page) => setCurrentPage(page)} onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'calculator' && (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <MarketEquilibriumPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'disequilibrium' && (
          <motion.div
            key="disequilibrium"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <MarketDisequilibriumPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'law' && (
          <motion.div
            key="law"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <LawOfSupplyDemandPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'utility' && (
          <motion.div
            key="utility"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <UtilityPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'tms' && (
          <motion.div
            key="tms"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <TMSPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'exercices' && (
          <motion.div
            key="exercices"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExercicesPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice01' && (
          <motion.div
            key="exercice01"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceChocolatPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice02' && (
          <motion.div
            key="exercice02"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceParapluiePage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice03' && (
          <motion.div
            key="exercice03"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceJusPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice04' && (
          <motion.div
            key="exercice04"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceCasquettePage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice05' && (
          <motion.div
            key="exercice05"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceGlacesPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice06' && (
          <motion.div
            key="exercice06"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceCahierPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice08' && (
          <motion.div
            key="exercice08"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceRationalitePage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice09' && (
          <motion.div
            key="exercice09"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceUtiliteSoifPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice10' && (
          <motion.div
            key="exercice10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExercicePizzaPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice11' && (
          <motion.div
            key="exercice11"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceConsoChocolatPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice12' && (
          <motion.div
            key="exercice12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceSalmaPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice13' && (
          <motion.div
            key="exercice13"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceAhmedPage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}

        {currentPage === 'exercice14' && (
          <motion.div
            key="exercice14"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <ExerciceLogiquePage onBack={() => setCurrentPage('ecosolve')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;