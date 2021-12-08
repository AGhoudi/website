import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Discover from './components/discover/discover';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.scss';

const App: React.FunctionComponent = () => (
  <main className="App">
    <Navbar />
    <Header />
    <Discover />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </main>
);

export default App;