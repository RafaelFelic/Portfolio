import { useEffect, useRef } from 'react';

const useTextAnimation = (options = { threshold: 0.1 }) => {
  const ref = useRef(null); // Create the ref inside the hook

  useEffect(() => {
    // Guard clause if the ref is not attached to an element
    if (!ref.current) {
      console.log('Ref is not attached to an element');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    // Current reference to the element
    const current = ref.current;
    const hideElements = current.querySelectorAll('.hide');

    hideElements.forEach((el) => observer.observe(el));

    return () => hideElements.forEach((el) => observer.unobserve(el));
  }, [options]); // options as dependency if you expect it to change, otherwise it can be omitted

  return ref; // Return the ref for the component to use
};

export default useTextAnimation;
