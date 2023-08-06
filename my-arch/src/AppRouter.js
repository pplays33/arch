import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
//import TitelPages from './pages/TitelPages';
//import FormPage from './pages/FormPages';

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
  );
}