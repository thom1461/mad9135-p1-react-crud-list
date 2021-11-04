import './App.css';
import NewItem from './NewItem';
import AppHeader from './AppHeader';
import List from './List';
import { data } from './data';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [contact, setContact] = useState(data);

  function updateData(obj){
    const newList = contact.map((item) => {
      if (obj.id === item.id) {
        return obj;
      } else {
        return item;
      }
    });
    setContact(newList)
  }

  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/list">
            <List data={contact} updateData={updateData}/>
          </Route>
          <Route path="/newItem">
            <NewItem data={contact} updateData={updateData}/>
          </Route>
          <Route path="/">
            <List data={contact} updateData={updateData}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
