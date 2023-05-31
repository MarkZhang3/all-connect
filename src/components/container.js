function Container({ title, text }) {
  return (
    <div className="frame">
      <h3 className="container-title">{title}</h3>
      <p className="container-text">{text}</p>
    </div>
  );
}

export default Container;
