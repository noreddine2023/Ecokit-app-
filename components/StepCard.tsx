import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  stepNumber: number;
  title: string;
  gradient: string;
  children: React.ReactNode;
  explanation: string;
  isLast?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ 
  stepNumber, 
  title, 
  gradient, 
  children, 
  explanation,
  isLast = false 
}) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative pl-0 md:pl-12">
      
      {/* Connector Dot for Desktop Timeline */}
      <div className={`
        hidden md:flex absolute left-6 top-12 w-3 h-3 rounded-full -translate-x-[5px] z-10
        bg-slate-900 border-2 border-white ring-4 ring-slate-50 ${isLast ? 'bg-orange-500' : ''}
      `}></div>

      <motion.div 
        className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-slate-200 shadow-xl"
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        {/* Top Gradient Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`}></div>
        
        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex items-start gap-5">
            <div className={`
              flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl 
              bg-gradient-to-br ${gradient} shadow-md text-white font-black text-xl
            `}>
              {stepNumber}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-2">{title}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-slate-900/10 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content with Staggered Animation */}
        <div className="px-8 py-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center"
          >
            {children}
          </motion.div>
        </div>

        {/* Footer / Explanation */}
        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <div className="flex gap-4">
             <div className="mt-1">
               <div className={`w-1 h-full min-h-[40px] rounded-full bg-gradient-to-b ${gradient}`}></div>
             </div>
             <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Explication</span>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {explanation}
                </p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};