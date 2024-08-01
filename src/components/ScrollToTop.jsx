import { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="fixed z-50 lg:bottom-2 bottom-20 right-5 lg:p-4 p-5 rounded-full shadow-lg animate-bounce bg-white/20" onClick={scrollToTop}>
          <BsArrowUp className='font-bold text-white text-2xl text-secondary' />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;