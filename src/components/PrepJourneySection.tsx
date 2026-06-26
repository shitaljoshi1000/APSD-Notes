import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';
import { Launch, ChartLine, Event } from '@carbon/icons-react';
import { motion, type Variants } from 'framer-motion';

interface PhaseData {
  phase: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  details: string[];
  subpoints?: { label: string; text: string }[];
}

const phases: PhaseData[] = [
  {
    phase: 'PHASE 1',
    title: 'Brainstorming & Research',
    subtitle: 'The Brain Dump',
    icon: Launch,
    details: [
      'Open a notebook or a blank digital document.',
      'Write down every single random fact, quote, statistic, or idea you have about your topic.',
      'The Mindset: Don\'t try to be organized yet. Just get the raw materials out of your head. It’s like dumping LEGO bricks on the floor before you start building.',
    ],
  },
  {
    phase: 'PHASE 2',
    title: 'Structuring',
    subtitle: 'The 3-Part Story',
    icon: ChartLine,
    details: [
      'Organize those raw ideas into a classic, time-tested three-act structure:',
    ],
    subpoints: [
      {
        label: 'The Hook (The Intro)',
        text: 'Grab them immediately in the first 30 seconds. Start with a shocking statistic, a relatable question, or a short story. Never start with: "Hi, my name is X..."',
      },
      {
        label: 'The Juicy Middle (The Body)',
        text: 'Break your main topic down into 3 clear, logical points (e.g., Solar Power, Water Conservation, Waste Management).',
      },
      {
        label: 'The Strong Finish (The Conclusion)',
        text: 'Summarize points, restate core message, and end with a confident: "Thank you for your time!" instead of trailing off.',
      },
    ],
  },
  {
    phase: 'PHASE 3',
    title: 'The Glow-Up',
    subtitle: 'Visuals & Polishing',
    icon: Event,
    details: [
      'This is where you actually open up your slide software.',
      'Paste your structured points into slides, then aggressively edit them down.',
      'Cut out 50% of the words on the screen and move them to your spoken notes.',
      'Pick a clean, modern font and use high-contrast colors so the people in the very back row can read it clearly.',
    ],
  },
];

export const PrepJourneySection: React.FC = () => {
  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="prep-journey" className="py-16 border-b border-carbon-gray-20 overflow-hidden">
      <Grid className="max-w-6xl mx-auto px-4">
        <Column sm={4} md={8} lg={12} className="mb-12">
          <span className="text-sm font-semibold tracking-wider text-carbon-blue-60 uppercase mb-2 block">
            03. The Prep Journey
          </span>
          <h2 className="text-4xl font-light text-carbon-gray-90 mb-4 tracking-tight">
            Step-by-Step: The <span className="font-semibold text-carbon-blue-60">Preparation Journey</span>
          </h2>
          <p className="text-carbon-gray-70 text-lg max-w-2xl">
            Moving from a blank screen to a finished presentation can feel overwhelming. Let’s break it down into a smooth, 3-phase timeline so you can stay stress-free.
          </p>
        </Column>

        <Column sm={4} md={8} lg={12}>
          {/* Timeline container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-stretch"
          >
            {/* Horizontal progress bar for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-carbon-gray-20 transform -translate-y-1/2 hidden md:block z-0" />

            {phases.map((phaseItem) => {
              const Icon = phaseItem.icon;
              return (
                <motion.div
                  key={phaseItem.phase}
                  variants={cardVariants}
                  className="w-full md:w-[31%] z-10 flex flex-col"
                >
                  <Tile className="p-6 bg-carbon-white border border-carbon-gray-20 rounded shadow-xs hover:border-carbon-blue-60 hover:shadow-sm transition-all duration-200 flex-1 flex flex-col">
                    {/* Header Details */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-carbon-blue-60 tracking-widest bg-carbon-blue-10 px-2 py-0.5 rounded">
                        {phaseItem.phase}
                      </span>
                      <Icon size={24} className="text-carbon-gray-50" />
                    </div>

                    <h3 className="text-xl font-bold text-carbon-gray-90 mb-1">
                      {phaseItem.title}
                    </h3>
                    <p className="text-xs text-carbon-gray-50 uppercase font-semibold tracking-wider mb-4">
                      {phaseItem.subtitle}
                    </p>

                    {/* Phase lists */}
                    <ul className="space-y-3 text-sm text-carbon-gray-70 flex-1">
                      {phaseItem.details.map((detail, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Act subpoints for Phase 2 */}
                    {phaseItem.subpoints && (
                      <div className="mt-4 pt-4 border-t border-carbon-gray-20 space-y-3">
                        {phaseItem.subpoints.map((sub, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className="font-bold text-carbon-gray-90 block mb-0.5">
                              {sub.label}
                            </span>
                            <span className="text-carbon-gray-70 leading-relaxed block">
                              {sub.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Tile>
                </motion.div>
              );
            })}
          </motion.div>
        </Column>
      </Grid>
    </section>
  );
};
