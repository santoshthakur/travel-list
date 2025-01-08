import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Item from './components/Item';
import { useState } from 'react';
const initialItems= [
  {
    id:1, description: "Passport", quantity: 2, packed: true
  },
  {
    id:2, description: "Socks", quantity: 12, packed: false
  },
  {
    id:3, description: "Shoes", quantity: 2, packed: false
  }
];
function App() {
const [items, setItems] =useState(initialItems);
const handleAddItem= (item)=>{
  setItems((prevItems) => [...prevItems, item]);

}
const handleDeleteItem=(id)=>{
  console.log(items)
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));

}
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Footer />
    </div>
  );
}
function PackingList({items,onDeleteItem}){   
  return(
     <div className="list py-6">
      <ul>
      {items.map((item)=>(<Item item={item} onDeleteItem={onDeleteItem} key={item.id} />))}
      </ul>
      </div>
  )
}
export default App;
