import {  NavLink } from 'react-router-dom';

function Menu() {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">Lugares mas populares</h1>

      <div className="box-container">
       
<a className="box"> 
  <div className="content">
    <h3>Garden Café & Chocolate</h3>
    <br />
    <div className="image-gallery">
      <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ozzvvfs6w6phedj0mhmi" alt="" />
    </div>
    <p>Te esperamos en el jardín de los buenos momentos.</p>
    <NavLink to="/Ver más" className="btn-link">
          <button className="btn">Ver más</button>
        </NavLink>
    <span></span>
  </div>
</a>


        <a className="box"> {/* segundo casilla del cafe */}
          
          <div className="content">
            <h3>Cafe 1760</h3>
            <br />
            <div className="image-gallery">
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/dpodrykqtbx8gtpx194a" alt="" />
            </div>
            <p>Fábrica de atardeceres. Somos el campo a 5 minutos de la ciudad. ¡Aqui solo importa el presente!.</p>
            
     <button className="btn">Ver más</button>
           

            <span></span>
          </div>
        </a>
        
        <a className="box"> {/* tercero casilla del cafe */}
          
          <div className="content">
            <h3>Del toro café</h3>
            <br />
            <div className="image-gallery">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/xd7gucqhskioxczthll2" alt="" />
            </div>
            <p>Drink Slow Café Hecho en Colombia, El sabor de la imaginación. ☕</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* cuarto casilla del cafe */}
          
          <div className="content">
            <h3>La Cabra Loca Café Cultural</h3>
            <br />
            <div className="image-gallery">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/sqasayjdhdl6mshwigli" alt="" />
            </div>
            <p>La Cabra Loca Café Cultural Lugar exclusivo para disfrutar del Buen café, comida variada, música.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* quinto casilla del cafe */}
          
          <div className="content">
            <h3>Azahar Coffee Shop</h3>
            <br />
            <div className="image-gallery">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/wjuvht6jk4qldbrdbfpu" alt="" />
            </div>
            <p>Encontramos los cafes y los caficultores mas especiales de Colombia.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* sexto casilla del cafe */}
          
          <div className="content">
            <h3>Café Sorrento</h3>
            <br />
            <div className="image-gallery"> 
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/wsftlfebd8kdclx6wsf4" alt="" />
            </div>
            <p>Café de origen , Chocolate y Macadamia 100% Orgánico ☕🍫🌿.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>
          
        
       
      </div>
    </section>
  );
}

export default Menu;
