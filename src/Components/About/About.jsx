
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              Tu guía definitiva para descubrir los mejores lugares de café y cafeterías en el encantador Quindío.
            </h3>
            <a href="#menu" className="btn-about">
              Cafeterías en el <br /> encantador Quindío
            </a>
          </div>

          <div className="image">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" className="main-home-image" alt="" />
          </div>
        </div>

        <div className="image-slider">
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/rdvteijamuubi7movsux" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/prrh7u9m6wczw928mmwo" alt="" />
        </div>
      </section>

      
        {/* en esta parte esta el codigo de MENU */}
      
      
        <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">
          {/* Primer casilla del café */}
          <a className="box">
            <div className="content">
              <h3>Garden Café & Chocolate</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ozzvvfs6w6phedj0mhmi" alt="" />
              </div>
              <p>Te esperamos en el jardín de los buenos momentos.</p>
              <NavLink to="/Ver más">
                <button className="btn">Ver más</button>
              </NavLink>
              <span></span>
            </div>
          </a>

          {/* Segunda casilla del café */}
          <a className="box">
            <div className="content">
              <h3>Cafe 1760</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/dpodrykqtbx8gtpx194a" alt="" />
              </div>
              <p>Fábrica de atardeceres. Somos el campo a 5 minutos de la ciudad. ¡Aquí solo importa el presente!</p>
              <button className="btn">Ver más</button>
              <span></span>
            </div>
          </a>

          {/* Tercera casilla del café */}
          <a className="box">
            <div className="content">
              <h3>Del Toro Café</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/xd7gucqhskioxczthll2" alt="" />
              </div>
              <p>Drink Slow Café Hecho en Colombia, El sabor de la imaginación. ☕</p>
              <button className="btn">Ver más</button>
              <span></span>
            </div>
          </a>

          {/* Cuarta casilla del café */}
          <a className="box">
            <div className="content">
              <h3>La Cabra Loca Café Cultural</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/sqasayjdhdl6mshwigli" alt="" />
              </div>
              <p>La Cabra Loca Café Cultural. Lugar exclusivo para disfrutar del buen café, comida variada, música.</p>
              <button className="btn">Ver más</button>
              <span></span>
            </div>
          </a>

          {/* Quinta casilla del café */}
          <a className="box">
            <div className="content">
              <h3>Azahar Coffee Shop</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/wjuvht6jk4qldbrdbfpu" alt="" />
              </div>
              <p>Encontramos los cafés y los caficultores más especiales de Colombia.</p>
              <button className="btn">Ver más</button>
              <span></span>
            </div>
          </a>

          {/* Sexta casilla del café */}
          <a className="box">
            <div className="content">
              <h3>Café Sorrento</h3>
              <br />
              <div className="image-gallery">
                <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/wsftlfebd8kdclx6wsf4" alt="" />
              </div>
              <p>Café de origen, Chocolate y Macadamia 100% Orgánico ☕🍫🌿.</p>
              <button className="btn">Ver más</button>
              <span></span>
            </div>
          </a>
        </div>
      </section>

  {/* en esta parte esta el codigo de REVIEW " comentario de las personas "" */}

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

    {/* en esta parte esta el codigo de ABOUT " QUIENE SOMOS "" */}

    <section className="review" id="review">
      <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
           
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
            <div className="stars">
              
            </div>
            <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />
            
            <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
           
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />
           
            <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
            <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>

    {/* en esta parte esta el codigo de reserva */}
    <section className="book" id="book">
      <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
      <form action="">
        <div className="search-bar1">
          <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
        </div>
        <input type="text" placeholder="Nombre" className="box" />
        <input type="email" placeholder="Email" className="box" />
        <input type="number" placeholder="Contacto" className="box" />
        <textarea
          name=""
          placeholder="Mensaje"
          className="box"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </section>
    </>
  );
};

export default About;
