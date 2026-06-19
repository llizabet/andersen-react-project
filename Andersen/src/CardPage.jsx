// // Создание страницы для перехода по кнопке//

import { useParams } from "react-router-dom";
import { cardsData } from "./assets/data/cardsData";

function CardPage() {
  const { id } = useParams();

  const card = cardsData.find(c => c.id === Number(id));

  if (!card) return <h2>Not found</h2>;

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
}

export default CardPage;