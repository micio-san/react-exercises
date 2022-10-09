import Star from "./icon";

function Card(prop) {
  return (
    <section className="card-container">
      <h1 className="card-title">{prop.info.title}</h1>
      <div className="small-container">
        <h4>{prop.info.company}</h4>
      </div>
      <p>{prop.info.dates}</p>
      <ul>
        <li>
          <Star /> {prop.info.duties[0]}
        </li>
        <li>
          <Star /> {prop.info.duties[1]}
        </li>
        <li>
          <Star /> {prop.info.duties[2]}
        </li>
      </ul>
    </section>
  );
}
export default Card;
