function Header() {
  return (
    <header className="header">
      <h1>¡Cuidado con Grogu {name}!</h1>
      <div>
        <h4> Introduce tu nombre</h4>
        <input
          type="text"
          onInput={handleInputName}
          placeholder="Escribe tu nombre"
        />
      </div>
    </header>
  );
}
export default Header;
