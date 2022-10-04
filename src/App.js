import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <ItemListContainer />
            </main>
            <Footer />
        </>
    );
}

export default App;
