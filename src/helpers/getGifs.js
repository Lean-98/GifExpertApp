
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0ughLv7BYXKMcYrVo09bAouPz1DB7lBy&q=${ category }&limit=12`;
    const res = await fetch( url );
    const { data } = await res.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    
    return gifs;
  }
