import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/global.scss'
import { AppHeader } from './components/AppHeader';
import { ContactPage } from './pages/ContactPage'
import { ContactDetails } from './pages/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';

import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>

      <div className="App">

        <AppHeader />

        <main className='container'>
          <Routes>
            <Route path="/contact/edit/:id?" element={<ContactEdit />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
