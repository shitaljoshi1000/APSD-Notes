import React, { useState } from 'react';
import { Grid, Column, ClickableTile } from '@carbon/react';
import { Notebook, Chemistry, Hotel, Analytics, Warning, Checkmark } from '@carbon/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MajorData {
  id: string;
  name: string;
  fullName: string;
  icon: React.ComponentType<any>;
  struggle: string;
  superpower: string;
}

const majors: MajorData[] = [
  {
    id: 'ba',
    name: 'BA',
    fullName: 'Bachelor of Arts',
    icon: Notebook,
    struggle: 'Defending a massive history or sociology thesis without putting the room to sleep.',
    superpower: 'Pitching a creative media campaign or writing a script that gets greenlit.',
  },
  {
    id: 'bsc',
    name: 'BSc',
    fullName: 'Bachelor of Science',
    icon: Chemistry,
    struggle: 'Turning complex lab reports and data tables into something human beings understand.',
    superpower: 'Convincing investors to fund your tech startup or explaining medical research.',
  },
  {
    id: 'bhm',
    name: 'BHM',
    fullName: 'Hotel Management',
    icon: Hotel,
    struggle: 'Creating a mock hotel launch concept that feels premium and organized.',
    superpower: 'Pitching a luxury resort upgrade to senior stakeholders or leading an elite team.',
  },
  {
    id: 'bcom',
    name: 'B.Com',
    fullName: 'Commerce',
    icon: Analytics,
    struggle: 'Presenting a market analysis without just reading lists of numbers off a spreadsheet.',
    superpower: 'Showing a client exactly how your financial strategy is going to make them rich.',
  },
];

export const IntroSection: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState<string>('ba');

  const activeMajor = majors.find((m) => m.id === selectedMajor) || majors[0];

  return (
    <section id="introduction" className="py-16 border-b border-carbon-gray-20">
      <Grid className="max-w-6xl mx-auto px-4">
        <Column sm={4} md={8} lg={12} className="mb-10">
          <span className="text-sm font-semibold tracking-wider text-carbon-blue-60 uppercase mb-2 block">
            01. Introduction
          </span>
          <h2 className="text-4xl font-light text-carbon-gray-90 mb-6 tracking-tight">
            What is a <span className="font-semibold text-carbon-blue-60">"Presentation"</span> Anyway?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-carbon-gray-80 text-lg leading-relaxed mb-10">
            <div>
              <p className="mb-4">
                Let’s breathe out. Drop the image of a stiff CEO in a thousands-dollar suit lecturing a boardroom.
                That is <strong className="text-carbon-gray-90">not</strong> what we are doing here.
              </p>
              <p>
                Think of a presentation as nothing more than <strong className="text-carbon-blue-60">sharing a structured story with a room full of people</strong>.
              </p>
            </div>
            <div>
              <p className="mb-4">
                If you have ever recapped the latest episode of a reality show to your friends, explained why your favorite football team is the absolute best, or convinced your roommates where to order dinner from, congratulations: <strong className="text-carbon-gray-90">you already know how to present.</strong>
              </p>
              <p>
                A college presentation is just taking that exact same energy, organizing it a little bit, and sharing it with your classmates. You aren't teaching a textbook; you are guiding your audience through a cool idea.
              </p>
            </div>
          </div>
        </Column>

        <Column sm={4} md={8} lg={12}>
          <div className="bg-carbon-gray-10 p-6 md:p-8 rounded-lg border border-carbon-gray-20">
            <h3 className="text-xl font-semibold mb-2 text-carbon-gray-90">
              The "Why Should I Care?" Factor
            </h3>
            <p className="text-carbon-gray-70 mb-8 text-sm md:text-base">
              "But I’m a science major, I’ll be in a lab!" "I’m in hospitality, I’ll be managing a kitchen!"
              Here is the truth bomb: <strong className="text-carbon-gray-90">No matter your major, your future success depends on your ability to communicate.</strong>
            </p>

            {/* Interactive Major Selection Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {majors.map((major) => {
                const Icon = major.icon;
                const isSelected = selectedMajor === major.id;
                return (
                  <ClickableTile
                    key={major.id}
                    className={`flex flex-col items-center justify-center p-6 transition-all duration-200 text-center rounded border ${
                      isSelected
                        ? 'border-carbon-blue-60 bg-carbon-blue-10! shadow-sm'
                        : 'border-carbon-gray-20 bg-carbon-white hover:border-carbon-blue-60 hover:shadow-xs'
                    }`}
                    onClick={() => setSelectedMajor(major.id)}
                  >
                    <Icon
                      size={32}
                      className={`mb-3 transition-colors ${
                        isSelected ? 'text-carbon-blue-60' : 'text-carbon-gray-70'
                      }`}
                    />
                    <span className="block text-lg font-bold text-carbon-gray-90 mb-1">
                      {major.name}
                    </span>
                    <span className="block text-xs text-carbon-gray-50 uppercase tracking-wider font-semibold">
                      {major.fullName}
                    </span>
                  </ClickableTile>
                );
              })}
            </div>

            {/* Struggle & Superpower Cards with Framer Motion */}
            <div className="min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMajor}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="bg-carbon-white p-6 rounded border-l-4 border-carbon-red-60 shadow-xs flex items-start gap-4">
                    <Warning size={24} className="text-carbon-red-60 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-carbon-red-60 mb-1">
                        The College Struggle
                      </h4>
                      <p className="text-carbon-gray-80 text-base leading-relaxed">
                        {activeMajor.struggle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-carbon-white p-6 rounded border-l-4 border-carbon-green-60 shadow-xs flex items-start gap-4">
                    <Checkmark size={24} className="text-carbon-green-60 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-carbon-green-60 mb-1">
                        The Real-World Superpower
                      </h4>
                      <p className="text-carbon-gray-80 text-base leading-relaxed">
                        {activeMajor.superpower}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="mt-8 text-center text-sm font-medium text-carbon-gray-70 italic">
              "Learning to present now means you won't just have a degree later—you’ll have the voice to actually do something big with it."
            </p>
          </div>
        </Column>
      </Grid>
    </section>
  );
};
