import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3 className='category-text'>{ category }</h3>
            {
              isLoading && ( <h2 className='loader'></h2> )
            }
            
            <div className='container'>
              {
                images.map( ( image ) => (
                    <GifItem 
                      key={ image.id } 
                      { ...image }
                    />
                ))
              }

            </div>

        </>
  )
}