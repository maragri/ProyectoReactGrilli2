
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { getProductsById } from './asyncMock';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={'Tenemos todo lo que tu mascota necesita'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log('cantidad agregada',quantity)}/>
    </div>
   
  );
}

export default App;
