import './App.css';
//import Ejemplo from './components/Ejemplo/Ejemplo';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <ItemListContainer />
                {/* <Ejemplo /> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
