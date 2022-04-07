import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import './index.css';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About': return <About />;
      // case 'Portfolio': return <Portfolio />;
      case 'Contact': return <ContactForm />;
      case 'Resume': return <Resume />
      default: return;
    }
  };
  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >
        { renderPage() }
      </main>
      {/* <Footer /> */}
    </>
  );
}

  
export default App;
