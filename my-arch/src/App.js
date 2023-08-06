import AppRouter from './AppRouter';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <>
      <div className="wrapper">
          <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
