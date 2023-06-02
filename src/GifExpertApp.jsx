import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory)) return;

     setCategories( categories => [...categories, newCategory]);
  }
  
  return (
    <>
      {/* {titulo} */}
      
        <h1>GifExpertApp</h1>

      {/* {Input} */}
      <AddCategory 
      onNewCategory = { event => onAddCategory(event)}
      />


      {/* {Listado de Gif} */}
        {
          categories.map( category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
    </>
  )
}

export default GifExpertApp
