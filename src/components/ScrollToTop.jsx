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
        <button className="fixed z-50 bottom-10 lg:bottom-2 right-5 p-5 lg:p-4 rounded-full shadow-lg animate-bounce bg-black/20" onClick={scrollToTop}>
          <BsArrowUp className='font-bold text-[#3c2848] text-2xl text-secondary' />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;