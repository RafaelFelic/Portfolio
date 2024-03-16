import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HEADER_ITEMS, SOCIAL_LINKS } from '../utils/data';
import { scrollToSection } from '../utils/scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Step 1: Ref for the menu

  // Step 2: Implement the logic to hide the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if click is outside
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Step 3: Cleanup the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]); // Dependency array ensures effect is run on mount and unmount

  return (
    <header
      className="flex justify-between items-stretch bg-gray-400 relative"
      id="home"
    >
      <div className="flex items-center z-20" ref={menuRef}>
        {' '}
        {/* Apply ref here */}
        {/* Hamburger Icon for Mobile */}
        <button
          className="p-2 md:hidden" // Show only on mobile
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>
        {/* Main Content Container: Ensures content alignment on desktop */}
        <div className="flex-grow flex items-center justify-between">
          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex flex-grow items-center bg-gray-400 md:bg-transparent absolute md:static top-full left-0`}
          >
            <ul className="flex flex-col md:flex-row md:items-center w-full">
              {HEADER_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    className="text-black hover:bg-black hover:text-gray-400 p-2 md:p-0 md:px-4  w-full md:w-auto text-left md:text-center text-3xl md:text-3xl lg:text-4xl"
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false); // Close menu on item click for mobile
                    }}
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Social Links - Always on the right */}
        <div className="absolute right-0 flex text-3xl md:text-3xl lg:text-4xl  h-full">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black flex items-center justify-center px-2.5 hover:bg-black hover:text-gray-400"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
