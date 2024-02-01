

function Homee() {
  return (
    <section className="about" id="about">
      <h1 className="heading">Acerca de nosotros <span>por qué elegirnos</span></h1>
      <div className="row">
        <div className="image">
          <img src="image/persona.webp" alt="" />
        </div>
        <div className="content">
          <h3 className="title">¡Lo que nos hace especiales!</h3>
          <p>
            Bienvenidos a <b>Tu Café</b> . Somos un equipo apasionado de amantes del café y viajeros locales comprometidos en ayudarte a explorar la rica cultura cafetera de esta región.
            <br />
            Nuestra misión es brindarte una experiencia única alrededor del café, destacando los rincones más acogedores y auténticos en los pueblos del Quindío. Entendemos que el café es más que una bebida; es una historia que conecta personas, lugares y tradiciones. A través de nuestra plataforma, queremos compartir contigo la magia que se encuentra en cada taza y en cada rincón de esta hermosa tierra cafetera.
          </p>
          <div className="icons-container">
            <div className="icons">
              <img src="image/about-icon-1.png" alt="" />
              <h3>café de calidad</h3>
            </div>
            <div className="icons">
              <img src="image/about-icon-2.png" alt="" />
              <h3>Lugares de alta Calidad</h3>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homee;
