import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import { useState } from 'react';
import PackingList from './components/PackingList';
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
const [items, setItems] = useState(initialItems);
const handleClear= ()=>{
  const confirmed =window.confirm('Are you you sure want to delete all items?')
  if(confirmed) setItems([]);
}
const handleAddItem= (item)=>{
  setItems((prevItems) => [...prevItems, item]);
}
const handleToggleItem= (id)=>{
  setItems(items=> items.map(item => item.id === id ? {...item, packed: !item.packed}: item))
}
const handleDeleteItem=(id)=>{
  console.log(items)
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));

}
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onClearList={handleClear} onToggleItem={handleToggleItem} />
      <Footer items={items} />
    </div>
  );
}

export default App;
