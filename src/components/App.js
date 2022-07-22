import { useEffect, useState, React } from 'react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')
  
  useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then( res => res.json() )
      .then( data => {
        setImageSrc(data.message);
        setIsLoaded(loaded => !loaded);
      })
  }, []);

  if(!isLoaded) {
    return <p>Loading...</p>
  }

  return(
    <div> 
      <img alt='A Random Dog' src={ imageSrc } />
    </div>
  )
};

export default App;