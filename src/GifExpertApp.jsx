import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

const [ categories, setCategories ] = useState([ 'Messi', 'Mountain Bike']);

const onNewCategory = ( newCategory ) => {
    if( categories.includes(newCategory)) return;
    if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
      setCategories([ newCategory, ...categories]);   
}

const resetButton = () => {
      setCategories([]);
}

  return (
    <>
        <h1 className='heading-main'>GifExpertApp</h1>

        < AddCategory  
              onNewCategory={  onNewCategory }    
        />

        <button className='btn btn-reset' onClick={ resetButton }>Reset</button>

        {
            categories.map( category =>  (
              <GifGrid 
                key={ category } 
                category={ category } />
            ))
        }

    </>
  )
}
