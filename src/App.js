import './App.css';
import Header from './components/Header/Header';
import GalleryContainer from './components/Gallery/GalleryContainer';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <section className='app'>
      <Provider store = {store}>
        <Header />
        <GalleryContainer />
      </Provider>
    </section>
  );
}

export default App;
