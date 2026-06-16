// Создание карточки для переиспользования //
function Card({image, title, text}) {
  return (
    <div className = "card">
      <img src={image} alt={title} className="card-img"/>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>See more</button>
    </div>
  );
}

export default Card;  