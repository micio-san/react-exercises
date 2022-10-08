function Button({ which, action }) {
  return (
    <nav>
      {which.map((animu, idx) => {
        return (
          <button onClick={action} key={idx} className="btn">
            <h4 className="btn-text">{animu}</h4>
          </button>
        );
      })}
    </nav>
  );
}

export default Button;
