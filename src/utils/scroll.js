export const scrollToSection = (sectionId) => {
  // Disable custom scroll behavior
  window.isCustomScrollEnabled = false;

  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  // Re-enable custom scroll behavior after a delay
  setTimeout(() => {
    window.isCustomScrollEnabled = true;
  }, 1000); // Adjust this delay based on the duration of your smooth scroll
};
