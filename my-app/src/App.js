import './App.css';
import NewItem from './NewItem';
import AppHeader from './AppHeader';
import List from './List';
//import { data } from './data';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  let data = []
  const [contact, setContact] = useState( () => {
    const storedData = getData
    console.log("Stored Data: ", storedData)
    if (storedData.length === 0) {
      return data
    } else {
      data.push(storedData)
      console.log("Data::", data)
      return data
    }
})

  function rmData(ev) {
    console.log("rmData event: ", ev.target.parentElement.value)
    let deleteId = ev.target.parentElement.value
    let rmIndex = contact.findIndex(buddy => buddy['id'] === deleteId)
    console.log("Contact Index: ", rmIndex)
    let newContacts = contact
    newContacts.splice(rmIndex, 1)
    console.log("New Contacts: ", newContacts)
    setContact(newContacts)
    saveData(contact)
    window.location.reload()
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
    setContact(updatedContacts)
    saveData(contact)
  }

  function newData(obj) {
    if (contact.length === 0) {
      let newArrayData = []
      newArrayData[0] = obj
      console.log("New Data: ", newArrayData)
      setContact(newArrayData)
    } else {
      contact.push(obj)
      console.log("New Data: ", contact)
      setContact(contact)
    }
    console.log("New List: ", contact)
    saveData(contact)
  }

  function saveData(data) {
    let stringifyData = JSON.stringify(data)
    localStorage.setItem('dataObject', stringifyData);
  }

  function getData() {
    let data = JSON.parse(localStorage.getItem('dataObject'))
    return data
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
