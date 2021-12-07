import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Discover from './components/discover/discover';
import Skills from './components/skills/skills';

import './App.scss';

const App: React.FunctionComponent = () => (
  <main className="App">
    <Navbar />
    <Header />
    <Discover />
    <Skills />
  </main>
);

export default App;