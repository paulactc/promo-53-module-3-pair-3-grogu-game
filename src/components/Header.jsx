function Header(props) {
  return (
    <header className="header">
      <h1>¡Cuidado con Grogu {props.name}!</h1>
      <div>
        <h4> Introduce tu nombre</h4>
        <input
          type="text"
          onInput={props.handleInputName}
          placeholder="Escribe tu nombre"
        />
      </div>
    </header>
  );
}
export default Header;
