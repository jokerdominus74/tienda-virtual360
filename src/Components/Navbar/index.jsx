import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const contexto = useContext(ShoppingCartContext);
  const cantidadCarrito = contexto?.cartProducts?.length || 0;
  const establecerBusquedaPorCategoria = contexto?.setSearchByCategory || (() => { });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const estiloActivo = 'underline underline-offset-4';

  return (
    <>
      {/* NAVBAR */}
      <nav className='bg-blue-700 fixed z-50 top-0 w-full py-6 px-5 text-sm font-light shadow-lg'>
        <div className='flex justify-between items-center w-full'>

          {/* Logo */}
          <div className='text-lg font-semibold text-white'>
            <NavLink to='/' onClick={closeMenu}>TiendaVirtual.blue</NavLink>
          </div>

          {/* Menú Normal en Pantallas Grandes */}
          <div className='hidden lg:flex justify-between w-full max-w-8xl mx-auto'>

            {/* Categorías a la Izquierda */}
            <ul className='flex items-center gap-x-7 ml-16'> {/* Aumentado el ml-16 */}
              {['', 'Ropa', 'Electronica', 'Muebles', 'Juguetes', 'Otros'].map((category, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${category}`}
                    onClick={() => { establecerBusquedaPorCategoria(category); closeMenu(); }}
                    className={({ isActive }) => (isActive ? `${estiloActivo} text-white` : 'text-white')}
                  >
                    {category === '' ? 'Todo' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Cuenta y Pedidos a la Derecha */}
            <ul className='flex items-center gap-x-5 ml-auto'>
              <li><NavLink to='/my-orders' onClick={closeMenu} className='text-white'>Mis pedidos</NavLink></li>
              <li><NavLink to='/my-account' onClick={closeMenu} className='text-white'>Mi cuenta</NavLink></li>
              <li><NavLink to='/registrarse' onClick={closeMenu} className='text-white'>Registrarse</NavLink></li>
              <li><NavLink to='/iniciar-sesion' onClick={closeMenu} className='text-white'>Iniciar sesión</NavLink></li>
              
              <li>
                <NavLink to='/my-order' className='flex items-center text-white'>
                  <ShoppingBagIcon className='h-6 w-6' />
                  {cantidadCarrito > 0 && <span className='ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs'>{cantidadCarrito}</span>}
                </NavLink>
              </li>
            </ul>

          </div>

          {/* Iconos Derecha */}
          <div className='flex items-center gap-4'>
            {/* Carrito de Compras (Visible solo en móviles) */}
            <NavLink to='/my-order' className='flex items-center text-white lg:hidden'>
              <ShoppingBagIcon className='h-6 w-6' />
              {cantidadCarrito > 0 && <span className='ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs'>{cantidadCarrito}</span>}
            </NavLink>

            {/* Menú Hamburguesa en Móviles */}
            <button className='lg:hidden text-white' onClick={toggleMenu}>
              {isOpen ? <XMarkIcon className='h-8 w-8' /> : <Bars3Icon className='h-8 w-8' />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ HAMBURGUESA */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-blue-900/95 z-40 flex flex-col items-center pt-24 text-white'>
          {/* Cerrar menú */}
          <button className='absolute top-6 right-6 text-white' onClick={toggleMenu}>
            <XMarkIcon className='h-8 w-8' />
          </button>

          {/* Enlaces */}
          <ul className='flex flex-col items-center gap-6 text-lg'>
            {['', 'Ropa', 'Electronica', 'Muebles', 'Juguetes', 'Otros'].map((category, index) => (
              <li key={index}>
                <NavLink
                  to={`/${category}`}
                  onClick={() => { establecerBusquedaPorCategoria(category); closeMenu(); }}
                  className='text-white'
                >
                  {category === '' ? 'Todo' : category.charAt(0).toUpperCase() + category.slice(1)}
                </NavLink>
              </li>
            ))}
            <li><NavLink to='/my-orders' onClick={closeMenu} className='text-white'>Mis pedidos</NavLink></li>
            <li><NavLink to='/my-account' onClick={closeMenu} className='text-white'>Mi cuenta</NavLink></li>
            <li><NavLink to='/registrarse' onClick={closeMenu} className='text-white'>Registrarse</NavLink></li>
            <li><NavLink to='/iniciar-sesion' onClick={closeMenu} className='text-white'>Iniciar sesión</NavLink></li>
            <NavLink to="/category/Electronica">Electrónica</NavLink>
            <NavLink to="/category/Ropa">Ropa</NavLink>

            <li>
              <NavLink to='/my-order' onClick={closeMenu} className='flex items-center text-white'>
                <ShoppingBagIcon className='h-6 w-6' />
                {cantidadCarrito > 0 && <span className='ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs'>{cantidadCarrito}</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Agrega padding al contenido para evitar que quede oculto debajo del nav */}
      <div className='pt-5'>
        {/* Contenido de la página aquí */}
      </div>
    </>
  );
};

export default Navbar;