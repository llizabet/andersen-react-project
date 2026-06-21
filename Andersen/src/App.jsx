import "./App.css";
import Card from "./Card";
import { Routes, Route } from "react-router-dom";
import CardPage from "./CardPage";
import { cardsData } from "./assets/data/cardsData";
import { useSelector, useDispatch } from 'react-redux'
import { deleteCard, addCard } from "./store/cardsSlice";



function App() {
  const cards = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="card-list">
            <div className="title-block">
              <h1>Absolute Cinema</h1>
              <button onClick={()=> dispatch(deleteCard())}>Delete card</button>
              <button onClick={()=> dispatch(addCard())}>Add card</button>
            </div>
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        }
      />

<Route path="/card/:id" element={<CardPage />} />
 
    </Routes>
  );
}

export default App;
