import React from 'react';
import FAQComponent from '../components/FAQ';

const FAQ = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[72px]">
      <FAQComponent />
    </main>
  );
};

export default FAQ;