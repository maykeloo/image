/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import image from './image.jpg';

function App() {
  return (
    <>
      <div>
        <img src={image} style={{
              width: '100vw',
              height: '100vh',
              display: 'block',
              objectFit: 'cover'
        }}/>
      </div>
    </>
  );
}

export default App;
