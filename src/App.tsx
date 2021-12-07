import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Discover from './components/discover/discover';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

import './App.scss';

const App: React.FunctionComponent = () => (
  <main className="App">
    <Navbar />
    <Header />
    <Discover />
    <Skills />
    <Projects />
  </main>
);

export default App;