import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';
import { Events, Image, Chat, Launch } from '@carbon/icons-react';
import { motion } from 'framer-motion';

interface RuleData {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  bgClass: string;
}

const rules: RuleData[] = [
  {
    id: 1,
    title: 'Know Your Crowd',
    description: 'Always design your talk around what your audience cares about, not just what you want to say. If you speak directly to their interests, they will stay locked in.',
    icon: Events,
    colorClass: 'text-carbon-blue-60',
    bgClass: 'bg-carbon-blue-10',
  },
  {
    id: 2,
    title: 'Show, Don\'t Just Tell',
    description: 'Whenever possible, trade out a bulleted list for a brilliant photo, a clean chart, or a quick real-world example. Visuals stick in the human brain way better than plain text ever will.',
    icon: Image,
    colorClass: 'text-carbon-green-60',
    bgClass: 'bg-carbon-green-20',
  },
  {
    id: 3,
    title: 'Stories Win Every Time',
    description: 'People easily forget raw data and numbers, but they always remember a good story. Wrap your facts and research inside human experiences and relatable examples.',
    icon: Chat,
    colorClass: 'text-carbon-orange-60',
    bgClass: 'bg-carbon-orange-20',
  },
  {
    id: 4,
    title: 'Bring Your Own Energy',
    description: 'You don\'t have to pretend to be a flawless corporate machine. Be exactly who you are! Let your unique personality, your sense of humor, and your genuine curiosity shine through. Energy is incredibly contagious.',
    icon: Launch,
    colorClass: 'text-carbon-blue-70',
    bgClass: 'bg-carbon-blue-10',
  },
];

export const GoldenRulesSection: React.FC = () => {
  return (
    <section id="golden-rules" className="py-16 border-b border-carbon-gray-20">
      <Grid className="max-w-6xl mx-auto px-4">
        <Column sm={4} md={8} lg={12} className="mb-10 text-center">
          <span className="text-sm font-semibold tracking-wider text-carbon-blue-60 uppercase mb-2 block">
            05. Core Principles
          </span>
          <h2 className="text-4xl font-light text-carbon-gray-90 mb-4 tracking-tight">
            The <span className="font-semibold text-carbon-blue-60">Golden Rules</span> of a Killer Presentation
          </h2>
          <p className="text-carbon-gray-70 text-lg max-w-2xl mx-auto">
            If you remember nothing else from this guide, keep these four golden rules close to your heart. They are your absolute ticket to an 'A' grade and standing ovations.
          </p>
        </Column>

        <Column sm={4} md={8} lg={12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <motion.div
                  key={rule.id}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex"
                >
                  <Tile className="p-8 bg-carbon-white border border-carbon-gray-20 rounded shadow-xs hover:shadow-md hover:border-carbon-blue-60 transition-all duration-200 flex-1 flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 rounded flex items-center justify-center mb-6 ${rule.bgClass}`}>
                        <Icon size={24} className={rule.colorClass} />
                      </div>
                      <h3 className="text-xl font-bold text-carbon-gray-90 mb-3">
                        {rule.id}. {rule.title}
                      </h3>
                      <p className="text-base text-carbon-gray-70 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-carbon-gray-10 text-xs font-semibold text-carbon-blue-60 uppercase tracking-widest flex items-center gap-1">
                      Rule #{rule.id} Focus Point
                    </div>
                  </Tile>
                </motion.div>
              );
            })}
          </div>
        </Column>
      </Grid>
    </section>
  );
};
