import { useNavigate } from 'react-router-dom'

// Создание карточки для переиспользования //
function Card({id, image, title, text}) {
  const navigate = useNavigate()

  return (
    <div className = "card">
      <img src={image} alt={title} className="card-img"/>
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={()=> navigate(`/card/${id}`) } >See more</button>
    </div>
  );
}

export default Card;  