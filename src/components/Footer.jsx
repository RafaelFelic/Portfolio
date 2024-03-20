import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FOOTER_ITEMS, SOCIAL_LINKS } from '../utils/data';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="flex flex-col font-['Raleway'] text-black">
      <div className="flex justify-evenly w-[90%] bg-gray-400 shadow-2xl mx-auto p-5 rounded-full">
        <menu>
          <h3 className="font-extrabold">MENU</h3>
          <ul>
            {FOOTER_ITEMS.map((item) => (
              <li key={item.id} className="text-gray-800 hover:text-[#4169E1]">
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </menu>
        <div className="flex items-center justify-center">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="text-5xl m-2 text-gray-800 hover:text-[#4169E1]"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <span className="w-full mt-5 text-gray-300 text-center text-sm md:text-base">
        2024 - Rafael Feliciano - All rights reserved
      </span>
    </footer>
  );
}
