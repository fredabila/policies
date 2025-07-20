import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { FlexiNet } from './pages/policies/FlexiNet';
import { AcademicCareFund } from './pages/policies/AcademicCareFund';
import { AllawaPlusProgram } from './pages/policies/AllawaPlusProgram';
import { TechLadies } from './pages/policies/TechLadies';
import { SportsAndFitness } from './pages/policies/SportsAndFitness';
import { BuildXProgram } from './pages/policies/BuildXProgram';
import { LearnAndEarn } from './pages/policies/LearnAndEarn';
import { CreativeStudio } from './pages/policies/CreativeStudio';
import { PowerCircle } from './pages/policies/PowerCircle';
import { DefensiveSecurity } from './pages/policies/DefensiveSecurity';
import { FabLab } from './pages/policies/FabLab';
import { LaunchPad } from './pages/policies/LaunchPad';
import { GoldenAIM } from './pages/policies/GoldenAIM';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policies/flexi-net" element={<FlexiNet />} />
            <Route path="/policies/academic-care-fund" element={<AcademicCareFund />} />
            <Route path="/policies/allawa-plus" element={<AllawaPlusProgram />} />
            <Route path="/policies/tech-ladies" element={<TechLadies />} />
            <Route path="/policies/sports-fitness" element={<SportsAndFitness />} />
            <Route path="/policies/buildx-program" element={<BuildXProgram />} />
            <Route path="/policies/learn-and-earn" element={<LearnAndEarn />} />
            <Route path="/policies/creative-studio" element={<CreativeStudio />} />
            <Route path="/policies/power-circle" element={<PowerCircle />} />
            <Route path="/policies/defensive-security" element={<DefensiveSecurity />} />
            <Route path="/policies/fab-lab" element={<FabLab />} />
            <Route path="/policies/launchpad" element={<LaunchPad />} />
            <Route path="/policies/golden-aim" element={<GoldenAIM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;