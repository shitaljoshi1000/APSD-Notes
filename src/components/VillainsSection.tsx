import React, { useState } from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { WarningAlt, CheckmarkFilled, Undo, Restart } from '@carbon/icons-react';

interface VillainData {
  id: number;
  name: string;
  crime: string;
  why: string;
  fix: string;
}

const villains: VillainData[] = [
  {
    id: 1,
    name: 'The Script Reader',
    crime: 'You print out an entire essay on a piece of paper or paste a wall of text onto your slide, and you read it word-for-word without ever looking up.',
    why: 'Fear of forgetting a specific word.',
    fix: 'The Bullet-Point Pact. Only write 3-5 keyword prompts on your cue cards or slides. Use them as triggers to remind you of what to say next, not as a script to read. Trust your brain!',
  },
  {
    id: 2,
    name: 'The Data Dump',
    crime: 'Trying to cram every single detail, number, and study you found over three weeks into a tiny 5-minute presentation slot.',
    why: 'The belief that "more information equals a better grade." (Spoiler: It doesn\'t).',
    fix: 'The Rule of Three. If you have 10 data points, pick the 3 most shocking or important ones. Put the rest in an appendix slide at the very end just in case someone asks during the Q&A.',
  },
  {
    id: 3,
    name: 'The Slide Monster',
    crime: 'A chaotic mix of bright neon yellow backgrounds, unreadable cursive fonts, and clip-art animations flying across the screen every time you click.',
    why: 'Getting way too excited about design options.',
    fix: 'Embrace White Space. Use a clean white or dark gray background. Pick two fonts max (one for headings, one for body text). Give your design room to breathe. Less design clutter means more focus on your message.',
  },
  {
    id: 4,
    name: 'The Mumbler',
    crime: 'Facing your back completely to the audience, talking directly to the whiteboard projector screen, and speaking in a quiet, monotonic whisper.',
    why: 'Shy nerves and trying to hide from the crowd.',
    fix: 'The Back Row Target. Find one friendly-looking person sitting in the very back row of the classroom. Imagine you are trying to project your voice just loud enough so only they can hear you clearly. Your volume will naturally rise to the perfect level for the entire room.',
  },
  {
    id: 5,
    name: 'The Timer Crasher',
    crime: 'Either rushing through a 10-minute presentation in 90 seconds like a speed-rapper, or rambling past the 15-minute mark until the professor has to cut you off.',
    why: 'Not timing your rehearsals beforehand.',
    fix: 'The Stopwatch Method. When practicing at home, use your smartphone\'s stopwatch app. Check where you are at the halfway mark. If you’re flying through too fast, pause and breathe between slides. If you are running over, cut out a couple of details.',
  },
];

export const VillainsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetAll = () => {
    setFlippedCards({});
  };

  return (
    <section id="presentation-villains" className="py-16 bg-carbon-gray-10 border-b border-carbon-gray-20">
      <Grid className="max-w-6xl mx-auto px-4">
        <Column sm={4} md={8} lg={12} className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold tracking-wider text-carbon-blue-60 uppercase mb-2 block">
              04. Presentation Villains
            </span>
            <h2 className="text-4xl font-light text-carbon-gray-90 mb-4 tracking-tight">
              Presentation <span className="font-semibold text-carbon-blue-60">"Villains"</span>
            </h2>
            <p className="text-carbon-gray-70 text-lg max-w-2xl">
              We see these same presentation mistakes happen every semester. Let’s name them, call them out, and learn exactly how to defeat them!
            </p>
          </div>
          <div>
            <Button
              kind="ghost"
              renderIcon={Restart}
              onClick={resetAll}
              className="text-carbon-blue-60"
            >
              Reset All Villains
            </Button>
          </div>
        </Column>

        <Column sm={4} md={8} lg={12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villains.map((villain) => {
              const isFlipped = !!flippedCards[villain.id];
              return (
                <div
                  key={villain.id}
                  className="perspective-1000 w-full h-[360px]"
                >
                  <div
                    className={`relative w-full h-full duration-500 preserve-3d transition-transform ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* CARD FRONT: The Villain Warning State */}
                    <div className="absolute inset-0 bg-carbon-white border border-carbon-gray-20 rounded p-6 flex flex-col justify-between backface-hidden shadow-xs">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-carbon-red-60 bg-carbon-red-20 px-2 py-0.5 rounded tracking-wide">
                            VILLAIN #{villain.id}
                          </span>
                          <WarningAlt size={24} className="text-carbon-red-60" />
                        </div>
                        <h3 className="text-xl font-bold text-carbon-gray-90 mb-3">
                          {villain.name}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-bold text-carbon-red-60 uppercase block tracking-wider">
                              The Crime:
                            </span>
                            <p className="text-sm text-carbon-gray-80 leading-relaxed line-clamp-3">
                              {villain.crime}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-carbon-gray-50 uppercase block tracking-wider">
                              Why it happens:
                            </span>
                            <p className="text-xs text-carbon-gray-70 leading-relaxed italic">
                              {villain.why}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        kind="danger"
                        size="sm"
                        onClick={() => toggleFlip(villain.id)}
                        className="w-full mt-4 justify-center"
                      >
                        Defeat Villain
                      </Button>
                    </div>

                    {/* CARD BACK: The Heroic Fix Success State */}
                    <div className="absolute inset-0 bg-carbon-green-20 border border-carbon-green-60 rounded p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-xs">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-carbon-green-70 bg-carbon-white px-2 py-0.5 rounded tracking-wide border border-carbon-green-60">
                            DEFEATED
                          </span>
                          <CheckmarkFilled size={24} className="text-carbon-green-60" />
                        </div>
                        <h3 className="text-xl font-bold text-carbon-gray-90 mb-3">
                          {villain.name}
                        </h3>
                        <div>
                          <span className="text-xs font-bold text-carbon-green-70 uppercase block tracking-wider mb-1">
                            The Fix:
                          </span>
                          <p className="text-sm text-carbon-gray-90 leading-relaxed font-medium">
                            {villain.fix}
                          </p>
                        </div>
                      </div>

                      <Button
                        kind="secondary"
                        size="sm"
                        renderIcon={Undo}
                        onClick={() => toggleFlip(villain.id)}
                        className="w-full mt-4 justify-center"
                      >
                        Restore Villain
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Column>
      </Grid>
    </section>
  );
};
