import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Discover from './components/discover/discover';

import './App.scss';

const App: React.FunctionComponent = () => (
  <main className="App">
    <Navbar />
    <Header />
    <Discover />
  </main>
);

export default App;