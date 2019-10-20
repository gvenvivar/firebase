import React, {useState, useEffect} from 'react';
import firebase from '../firebase/firebase.js';

const sort_Options = {
  'name_asc' : {column: 'name', direction: "asc"},
  'name_desc' : {column: 'name', direction: "desc"},

  'price_asc' : {column: 'price', direction: 'asc'},
  'price_desc' : {column: 'price', direction: 'desc'}
}

function deleteDish(id){
  firebase
    .firestore()
    .collection('menu')
    .doc(id)
    .delete()
    .then(()=>{
      console.log('item deleted ' + id);
    })
    .catch((error)=>{
      console.error("Error removing document: ", error);
    })
}

function GetMenu(filter = 'name_asc') {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    const first = firebase.firestore().collection('menu')
     .orderBy(sort_Options[filter].column, sort_Options[filter].direction);
    const unsubscribe = first
     .onSnapshot(snapshot => {
       const newMenu = snapshot.docs.map(item => ({
         id: item.id,
         ...item.data()
       }))
       setmenu(newMenu);
     })
     return () => unsubscribe();
  }, [filter])
  return menu;
}

function loadMore(){
  console.log('more');
}


const MenuList = () => {
  const [filter, setFilter] = useState('name_asc');
  let menu = GetMenu(filter);

  return(
    <div className='menu'>
    <label>Sort By</label>
    <select value={filter} onChange={e => setFilter(e.currentTarget.value)}>
      <option value={"name_asc"}>Name asc</option>
      <option value={"name_desc"}>Name desc</option>
      <option value={"price_asc"}>Price asc</option>
      <option value={"price_desc"}>Price desc</option>
    </select>
    {menu.map(item =>
      <div className='menu-item' key={item.id}>
        <h4>{item.name}</h4>
        <img src={item.url} width='360px' height='240px'/>
        <div>{item.price}$</div>
        <button onClick={() => deleteDish(item.id)}>Delete</button>
      </div>
    )}
    <button className="loadMore" onClick={()=>loadMore()}>Load more</button>
    </div>
)}

export default MenuList;
