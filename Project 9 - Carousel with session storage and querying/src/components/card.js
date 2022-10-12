function Card(props) {
  /* {animal.map((oneAnimal, idx) => {
     return <Card key={idx} prop = {oneAnimal} />;
   })}*/
  return (
    <article className="card">
      <div className="images-container">
        <img
          alt={props.info.query.text}
          src={props.info.image.thumbnailUrl}
        ></img>
      </div>
      <div className="name-container">
        <h1 className="name">{props.info.query.text}</h1>
      </div>
    </article>
  );
}

export default Card;
