import CartWidget from "../CartWidgets/CartWidget"

const Navbar = () => {
  return (
    <nav>
      <h3>Tienda de Mascotas</h3>
      <div>
        <button>Mascotas</button>
        <button>Alimento</button>
        <button>Ofertas</button>
        <button>Servicios</button>

      </div>
      <CartWidget/> 
    </nav>
  )
}

export default Navbar
