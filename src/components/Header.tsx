import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Vision', href: '/#vision' },
    { name: 'Contact', href: '/#feedback' },
  ];

  const accessWelfarePolicies = [
    { name: 'ACSES FlexiNet', href: '/policies/flexi-net' },
    { name: 'Academic Care Fund', href: '/policies/academic-care-fund' },
    { name: 'Allawa+ Program', href: '/policies/allawa-plus' },
    { name: 'Tech Ladies', href: '/policies/tech-ladies' },
    { name: 'Sports & Fitness', href: '/policies/sports-fitness' },
    { name: 'BuildX Program', href: '/policies/buildx-program' },
    { name: 'Learn & Earn', href: '/policies/learn-and-earn' },
  ];

  const innovationPolicies = [
    { name: 'Creative Studio', href: '/policies/creative-studio' },
    { name: 'PowerCircle', href: '/policies/power-circle' },
    { name: 'Defensive Security', href: '/policies/defensive-security' },
    { name: 'Fab Lab', href: '/policies/fab-lab' },
    { name: 'LaunchPad', href: '/policies/launchpad' },
            { name: 'ACSES AIM APP', href: '/policies/golden-aim' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`font-bold text-2xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
            Samuel & Frederick
          </span>
          <span className={`ml-2 text-sm py-1 px-2 rounded ${isScrolled ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'}`}>
            ACSES 2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Policies Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPoliciesOpen(true)}
            onMouseLeave={() => setIsPoliciesOpen(false)}
          >
            <button 
              className={`font-medium hover:text-orange-500 transition-colors flex items-center ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Policies
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isPoliciesOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-4">
                <div className="px-4 mb-3">
                  <h4 className="font-bold text-blue-800 text-sm mb-2">Access | Welfare | Representation</h4>
                  {accessWelfarePolicies.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-2 py-1 text-sm text-slate-600 hover:bg-slate-50 hover:text-orange-500 transition-colors rounded"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-slate-200 pt-3 px-4">
                  <h4 className="font-bold text-blue-800 text-sm mb-2">Innovation & Skills Development</h4>
                  {innovationPolicies.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-2 py-1 text-sm text-slate-600 hover:bg-slate-50 hover:text-orange-500 transition-colors rounded"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <a 
            href="/#feedback" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Share Your Voice
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-slate-700' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-700' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-blue-900 bg-opacity-95 z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-6 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-xl py-4 border-b border-blue-800"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          
          <div className="py-4 border-b border-blue-800">
            <div className="text-white text-xl mb-4">Access | Welfare | Representation</div>
            {accessWelfarePolicies.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-white/80 text-lg py-2 pl-4 hover:text-orange-300"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="py-4 border-b border-blue-800">
            <div className="text-white text-xl mb-4">Innovation & Skills Development</div>
            {innovationPolicies.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-white/80 text-lg py-2 pl-4 hover:text-orange-300"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <a 
            href="/#feedback" 
            className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
            onClick={toggleMenu}
          >
            Share Your Voice
          </a>
        </div>
      </div>
    </header>
  );
};