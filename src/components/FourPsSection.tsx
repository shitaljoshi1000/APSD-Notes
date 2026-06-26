import React, { useState, useEffect } from 'react';
import { Grid, Column, ProgressIndicator, ProgressStep, Button, Tile } from '@carbon/react';
import { ArrowRight, ArrowLeft } from '@carbon/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Breathing Bubble Component ---
const BreathingBubble: React.FC = () => {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          let nextPhase: 'Inhale' | 'Hold' | 'Exhale' = 'Inhale';
          setPhase((current) => {
            if (current === 'Inhale') nextPhase = 'Hold';
            else if (current === 'Hold') nextPhase = 'Exhale';
            else nextPhase = 'Inhale';
            return nextPhase;
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Set colors and scale targets based on the breathing phase
  const getPhaseStyles = () => {
    switch (phase) {
      case 'Inhale':
        return {
          scale: 1.8,
          bg: 'rgba(15, 98, 254, 0.3)', // carbon blue-60 glow
          borderColor: '#0f62fe',
          text: 'Inhale Deeply',
        };
      case 'Hold':
        return {
          scale: 1.8,
          bg: 'rgba(25, 128, 56, 0.3)', // calming green glow
          borderColor: '#198038',
          text: 'Hold Breath',
        };
      case 'Exhale':
        return {
          scale: 1.0,
          bg: 'rgba(15, 98, 254, 0.1)',
          borderColor: '#0f62fe',
          text: 'Exhale Slowly',
        };
    }
  };

  const currentStyles = getPhaseStyles();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-carbon-white border border-carbon-gray-20 rounded shadow-sm text-center">
      <h4 className="text-base font-semibold text-carbon-gray-90 mb-2">
        Bio-Panic Breathing Bubble
      </h4>
      <p className="text-xs text-carbon-gray-50 mb-8 max-w-xs">
        Feeling sweat glands working overtime or a racing heart? Use this 12-second cycle to calm your nervous system before presenting.
      </p>

      {/* Bubble Container */}
      <div className="w-56 h-56 flex items-center justify-center relative mb-8">
        {/* Animated breathing bubble */}
        <motion.div
          animate={{
            scale: currentStyles.scale,
            backgroundColor: currentStyles.bg,
            borderColor: currentStyles.borderColor,
          }}
          transition={{
            duration: phase === 'Hold' ? 0.2 : 4,
            ease: 'easeInOut',
          }}
          className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center breathing-bubble"
        />

        {/* Dynamic center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-base font-bold text-carbon-gray-90">{currentStyles.text}</span>
          <span className="text-2xl font-semibold text-carbon-blue-60 mt-1">{secondsLeft}s</span>
        </div>
      </div>

      <div className="flex gap-4 text-xs font-semibold text-carbon-gray-70 uppercase tracking-wider">
        <span className={phase === 'Inhale' ? 'text-carbon-blue-60 underline' : ''}>1. Inhale (4s)</span>
        <span className={phase === 'Hold' ? 'text-carbon-green-60 underline' : ''}>2. Hold (4s)</span>
        <span className={phase === 'Exhale' ? 'text-carbon-blue-60 underline' : ''}>3. Exhale (4s)</span>
      </div>
    </div>
  );
};

// --- Main 4 P's Section Component ---
export const FourPsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsData = [
    {
      title: 'Plan',
      subtitle: 'The Blueprint',
      badge: '📦 STEP 1',
      summary: 'Before you open PowerPoint or Google Slides, stop. Do not touch the keyboard. Planning is all about figuring out who is in the room and what they care about.',
      details: [
        {
          label: 'Analyze the Vibe',
          text: 'Is this a strict, formal grading panel of professors? Or is it an interactive presentation in front of your casual classmates? Adjust your tone accordingly.',
        },
        {
          label: 'The "One-Sentence" Rule',
          text: 'If your audience remembers only one single sentence from your presentation tomorrow, what do you want it to be? Write that down. That is your core anchor. No aimless rambling allowed! Everything you say must support that one sentence.',
        },
      ],
    },
    {
      title: 'Prepare',
      subtitle: 'The Construction',
      badge: '🛠️ STEP 2',
      summary: 'This is where you build your slide deck and your talking points.',
      details: [
        {
          label: 'The Golden Rule',
          text: 'Your slides are your backup singers, not the main act. You are the rockstar!',
        },
        {
          label: 'Visual Balance',
          text: 'If your slide looks like a wall of text copied straight out of a Wikipedia article, delete it. Keep text minimal (think of them as tweets/short captions) and use high-quality images to keep eyes glued to the screen.',
        },
      ],
    },
    {
      title: 'Practice',
      subtitle: 'The Rehearsal',
      badge: '🎤 STEP 3',
      summary: 'No one is born a flawless speaker; they just practice without letting anyone see them do it.',
      details: [
        {
          label: 'The Pet & Voice Note Method',
          text: 'Feeling goofy talking to an empty room? Present to your dog, your cat, or even a stuffed animal. Don’t have a pet? Record a voice note on your phone. Listen back to it while walking to campus. You’ll instantly notice where you need to smooth things out.',
        },
        {
          label: 'Coping with Bio-Panic',
          text: 'Sweat glands working overtime? Heart racing like you just ran a marathon? That is normal. It’s just adrenaline. To beat it, take three deep belly breaths before your name is called. Hold your hands together or rest them lightly on the podium to stop the shaking.',
        },
      ],
      interactive: true, // triggers the breathing bubble rendering
    },
    {
      title: 'Present',
      subtitle: 'The Showtime',
      badge: '🚀 STEP 4',
      summary: 'The moment of truth. You’ve got this!',
      details: [
        {
          label: 'Body Language',
          text: 'Stand tall. Do not cross your arms like you\'re freezing, and don\'t hide completely behind the podium like it’s a shield. Use your hands naturally to emphasize points.',
        },
        {
          label: 'The Triangle Eye-Contact Hack',
          text: 'If looking into people’s eyes terrifies you, look at the top of their heads or at the back wall right above them. To the audience, it looks exactly like you are scanning the room with confidence!',
        },
        {
          label: 'The "I Don\'t Know" Q&A Strategy',
          text: 'When a professor asks a question that completely blanks your brain, never panic. Say: "That is an excellent question. I want to give you an accurate answer, so let me look into that specific data point after this session and get right back to you." Boom. Professional, calm, and collected.',
        },
      ],
    },
  ];

  const currentStepData = stepsData[activeStep];

  const handleNext = () => {
    if (activeStep < stepsData.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section id="the-4-ps" className="py-16 bg-carbon-gray-10 border-b border-carbon-gray-20">
      <Grid className="max-w-6xl mx-auto px-4">
        <Column sm={4} md={8} lg={12} className="mb-10">
          <span className="text-sm font-semibold tracking-wider text-carbon-blue-60 uppercase mb-2 block">
            02. Core Framework
          </span>
          <h2 className="text-4xl font-light text-carbon-gray-90 mb-4 tracking-tight">
            The <span className="font-semibold text-carbon-blue-60">Four P’s</span> of Presentation
          </h2>
          <p className="text-carbon-gray-70 text-lg max-w-2xl">
            Think of the Four P’s as your personal framework for public speaking. Master these, and you will instantly look more polished than 90% of your peers.
          </p>
        </Column>

        {/* Progress Indicator Stepper */}
        <Column sm={4} md={8} lg={12} className="mb-8 overflow-x-auto pb-4">
          <ProgressIndicator currentIndex={activeStep} className="min-w-[600px] lg:min-w-0">
            {stepsData.map((step, idx) => (
              <ProgressStep
                key={step.title}
                label={step.title}
                description={step.subtitle}
                onClick={() => setActiveStep(idx)}
                className="cursor-pointer hover:bg-carbon-gray-20 p-2 rounded transition-colors"
              />
            ))}
          </ProgressIndicator>
        </Column>

        {/* Content Card Layout */}
        <Column sm={4} md={8} lg={12}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <Tile className="p-8 bg-carbon-white border border-carbon-gray-20 rounded shadow-xs relative">
                    <span className="absolute top-6 right-8 text-xs font-bold bg-carbon-blue-10 text-carbon-blue-60 px-3 py-1 rounded">
                      {currentStepData.badge}
                    </span>

                    <h3 className="text-2xl font-semibold text-carbon-gray-90 mb-1">
                      {currentStepData.title}
                    </h3>
                    <p className="text-sm font-semibold text-carbon-blue-60 mb-6 uppercase tracking-wider">
                      {currentStepData.subtitle}
                    </p>

                    <p className="text-carbon-gray-80 text-lg leading-relaxed mb-8 border-b border-carbon-gray-10 pb-6">
                      {currentStepData.summary}
                    </p>

                    <div className="space-y-6">
                      {currentStepData.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex flex-col md:flex-row gap-2 md:gap-6">
                          <h4 className="md:w-1/3 text-base font-bold text-carbon-gray-90 uppercase tracking-wide md:pt-1">
                            {detail.label}
                          </h4>
                          <p className="md:w-2/3 text-base text-carbon-gray-70 leading-relaxed">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Tile>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  kind="secondary"
                  renderIcon={ArrowLeft}
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className="rounded"
                >
                  Previous Step
                </Button>
                <Button
                  kind="primary"
                  renderIcon={ArrowRight}
                  onClick={handleNext}
                  disabled={activeStep === stepsData.length - 1}
                  className="rounded"
                >
                  Next Step
                </Button>
              </div>
            </div>

            {/* Stepper Sidebar - interactive breathing element or checklist */}
            <div className="lg:col-span-1">
              <AnimatePresence mode="wait">
                {currentStepData.interactive ? (
                  <motion.div
                    key="interactive-breathing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BreathingBubble />
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-sidebar-info"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-carbon-white border border-carbon-gray-20 rounded shadow-sm"
                  >
                    <h4 className="text-base font-bold text-carbon-gray-90 mb-4 border-b border-carbon-gray-10 pb-2">
                      Step Goals checklist
                    </h4>
                    <ul className="space-y-4 text-sm text-carbon-gray-70">
                      {activeStep === 0 && (
                        <>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Identify the grading criteria and audience expectations.
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Write down your single-sentence core message.
                          </li>
                        </>
                      )}
                      {activeStep === 1 && (
                        <>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Focus on speaker notes; slides are only backups.
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Remove Wikipedia blocks. Add bold headers and visual assets.
                          </li>
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Practice in front of a mirror or pet.
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Record a voice note to check timings.
                          </li>
                        </>
                      )}
                      {activeStep === 3 && (
                        <>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Keep tall posture, avoid locking arms.
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Maintain top-of-head/back wall eye-contact hack.
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="font-semibold text-carbon-blue-60">✓</span>
                            Employ the "accurate answer backup" Q&A trick.
                          </li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};
