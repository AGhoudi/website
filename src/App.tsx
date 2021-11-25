import Navbar from './components/navbar/navbar';
import Header from './components/header/header';

import './App.scss';

const App: React.FunctionComponent = () => (
  <main className="App">
    <Navbar />
    <Header />
  </main>
);

export default App;