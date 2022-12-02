import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import data from './data';

function App() {
  var arr=[]
  var [mainCategory,setMainCategory]=useState([])
  var [category1,setCategory1]=useState([])

  useEffect(()=>{
    check()
  },[])

  const check=()=>{
    for(var i=0;i<data.length;i++){
      var d = data[i].primary_category
      arr.push(d)
    }
    for(var j=0;j<arr.length;j++){
      if(!mainCategory.includes(arr[j])){
        mainCategory.push(arr[j])
      }
    }
    setMainCategory([...mainCategory])
  }

  // Main Category Select handler Function

  const mainSelectHandler=(e)=>{
    var i=''
    var ind = e.target.selectedIndex
    var txt = mainCategory[ind]
    category1=[]
    if(txt=='Books'){
      for(i=0;i<data.length;i++){
        if(data[i].primary_category=='Books'){
          if(!category1.includes(data[i].category_1)){
            category1.push(data[i].category_1)
          }
        }
      }      
    }
    else if(txt=='Kindle Store'){
      for(i=0;i<data.length;i++){
        if(data[i].primary_category=='Kindle Store'){
          if(!category1.includes(data[i].category_1)){
            category1.push(data[i].category_1)
          }
        }
      }
    }
    else if(txt=='Sports, Fitness & Outdoors'){
      for(i=0;i<data.length;i++){
        if(data[i].primary_category=='Sports, Fitness & Outdoors'){
          if(!category1.includes(data[i].category_1)){
            category1.push(data[i].category_1)
          }
        }
      }
    }
    else if(txt=='Clothing & Accessories'){
      for(i=0;i<data.length;i++){
        if(data[i].primary_category=='Clothing & Accessories'){
          if(!category1.includes(data[i].category_1)){
            category1.push(data[i].category_1)
          }
        }
      }
    }
    else if(txt=='Industrial & Scientific'){
      for(i=0;i<data.length;i++){
        if(data[i].primary_category=='Industrial & Scientific'){
          if(!category1.includes(data[i].category_1)){
            category1.push(data[i].category_1)
          }
        }
      }
    }
    setCategory1([...category1])

  }


  return (
    <div className="App">
     <Products data={mainCategory} mainSelectHandler={mainSelectHandler} category1={category1}/>
    </div>
  );
}

export default App;
