import React, { useState, useEffect } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  Content,
  Theme,
} from '@carbon/react';
import { Notebook, Help, Roadmap, Events, Warning } from '@carbon/icons-react';
import { IntroSection } from './components/IntroSection';
import { FourPsSection } from './components/FourPsSection';
import { PrepJourneySection } from './components/PrepJourneySection';
import { VillainsSection } from './components/VillainsSection';
import { GoldenRulesSection } from './components/GoldenRulesSection';

const sections = [
  { id: 'introduction', label: '1. Introduction', icon: Notebook },
  { id: 'the-4-ps', label: '2. The 4 P\'s Framework', icon: Help },
  { id: 'prep-journey', label: '3. The Prep Journey', icon: Roadmap },
  { id: 'presentation-villains', label: '4. Presentation Villains', icon: Warning },
  { id: 'golden-rules', label: '5. Golden Rules', icon: Events },
];

function App() {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // offset for header & spacing
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 48; // Carbon header height
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <Theme theme="white">
      <div className="min-h-screen bg-carbon-white">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="College Presentation Guide">
                <HeaderMenuButton
                  aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="#" prefix="APSD">
                  First-Year Student Hub
                </HeaderName>
              </Header>
              <SideNav
                aria-label="Navigation sidebar"
                expanded={isSideNavExpanded}
                isPersistent={true}
                className="cds--side-nav--website"
              >
                <div className="p-4 border-b border-carbon-gray-20 bg-carbon-gray-10">
                  <h4 className="text-sm font-bold text-carbon-gray-90">College Presentation</h4>
                  <p className="text-xs text-carbon-gray-50 uppercase tracking-wider font-semibold">Ultimate Student Guide</p>
                </div>
                <SideNavItems>
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <SideNavLink
                        key={section.id}
                        renderIcon={Icon}
                        href={`#${section.id}`}
                        onClick={(e: React.MouseEvent) => handleNavClick(e, section.id)}
                        className={isActive ? 'cds--side-nav__item--active' : ''}
                      >
                        {section.label}
                      </SideNavLink>
                    );
                  })}
                </SideNavItems>
              </SideNav>
            </>
          )}
        />
        <Content className="pt-12 pl-0 md:pl-64 transition-all duration-300">
          {/* Main Hero Header Area */}
          <div className="bg-carbon-gray-90 text-carbon-white py-12 px-6 border-b border-carbon-gray-80">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-semibold text-carbon-blue-60 tracking-widest uppercase bg-carbon-gray-80 px-3 py-1 rounded inline-block mb-3">
                Academic & Professional Skills Development
              </span>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-carbon-white">
                College Presentation <span className="font-semibold text-carbon-blue-60">Glow-Up Guide</span>
              </h1>
              <p className="text-carbon-gray-30 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                Master the art of sharing structured stories, beating stage fright, and creating visual decks that keep minds locked on your ideas.
              </p>
            </div>
          </div>

          {/* Section Renderings */}
          <main>
            <IntroSection />
            <FourPsSection />
            <PrepJourneySection />
            <VillainsSection />
            <GoldenRulesSection />
          </main>

          {/* Clean Academic Footer */}
          <footer className="py-12 bg-carbon-gray-10 border-t border-carbon-gray-20 text-center">
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-sm text-carbon-gray-70 mb-2">
                <strong>APSD-Notes: College Presentation Guide</strong> — Built with React, IBM Carbon & Tailwind CSS.
              </p>
              <p className="text-xs text-carbon-gray-50">
                Created by Antigravity AI Coding Assistant. All rights reserved. &copy; 2026.
              </p>
            </div>
          </footer>
        </Content>
      </div>
    </Theme>
  );
}

export default App;
