function HorizontalContainer({ title, text }) {
  return (
    <div className="frame">
      <h2 className="container-title">{title}</h2>
      <p className="container-text">{text}</p>
    </div>
  );
}

export default HorizontalContainer;
