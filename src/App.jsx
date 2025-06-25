import './App.css';
import Card from './Card.jsx';

import flashCardsInformation from './flashCardsInformation.js';
const App = () => {

  return (
    <div className="App">
      <div className="title-container" style={{textAlign: 'left'}}>
        <h1>Do you know the World flags?</h1>
        <h3>Try out your geography knowledge with this card deck that tests your flag recognition skills!</h3>
        <h3>Total Cards: {flashCardsInformation.length}</h3>
      </div>
    <br />
    <Card />

    </div>
  )
}

export default App 