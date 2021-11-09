import './App.css';
import NewItem from './NewItem';
import AppHeader from './AppHeader';
import List from './List';
import { data } from './data';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [contact, setContact] = useState(data);

  function rmData(ev) {
    console.log("rmData event: ", ev.target.parentElement.value)
    let deleteId = ev.target.parentElement.value
    let rmIndex = contact.findIndex(buddy => buddy['id'] === deleteId)
    console.log("Contact Index: ", rmIndex)
    let newContacts = contact
    newContacts.splice(rmIndex, 1)
    console.log("New Contacts: ", newContacts)
    setContact(newContacts)
    window.location.reload();
  }

  function updateData(obj) {
    console.log("updateData obj data: ", obj)
    const updatedContacts = contact.map((item) => {
      if (obj.id === item.id) {
        return obj;
      } else {
        return item;
      }
    })
    setContact(updatedContacts);
  }

  function newData(obj) {
    console.log("newData");
    contact.push(obj);
    console.log("New List: ", contact);
    setContact(contact);
  }

  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/list">
            <List data={contact} updateData={updateData} rmData={rmData}/>
          </Route>
          <Route path="/newItem">
            <NewItem data={contact} newData={newData}/>
          </Route>
          <Route path="/">
            <List data={contact} updateData={updateData} rmData={rmData}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
