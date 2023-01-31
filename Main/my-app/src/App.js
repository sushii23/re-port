import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <div>
        <p>paragraph
        </p>
      </div>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="resume" component ={Resume} />
      <About/>
      <Footer />
    </Router>
  );
};

// function App() {
//   return (
//     <Router>
//       <Header />
//       <div>
//         <p>paragraph
//         </p>
//       </div>
//       {/* <Route exact path="/" component={About} />
//       <Route exact path="/contact" component={Contact} /> */}
//       <Footer />
//     </Router>
//   );
// };

export default App;
