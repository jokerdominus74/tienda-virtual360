// src/pages/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import { AuthProvider } from "../../Context/AuthContext";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Login from "../Login";
import Registrarse from "../Registrarse";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import Footer from "../../Components/Reutilizable/Footer";
import SobreNosotros from "../SobreNosotros";
import NuestrosServicios from "../NuestrosServicios";
import Contacto from "../Contacto";
import Privacidad from "../Privacidad";
import Terminos from "../Terminos";
import Faq from "../Faq";
import Ayuda from "../Ayuda";
import UserInfo from "../../Components/UserInfo";
import FilterSidePanel from "../../Components/FilterSidePanel";
import ProductList from '../ProductList';
import TestStripe from "../TestStripe";
import "./App.css";

// Wrapper de Contextos
const AppProviders = ({ children }) => (
  <ShoppingCartProvider>
    <AuthProvider>{children}</AuthProvider>
  </ShoppingCartProvider>
);

const App = () => {
  return (
    <AppProviders>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <UserInfo />

          <main className="flex-grow">
            <Routes>
              {/* Página de inicio y categorías */}
              <Route path="/" element={<Home />} />
              <Route path="/Ropa" element={<Home />} />
              <Route path="/Electronica" element={<Home />} />
              <Route path="/Muebles" element={<Home />} />
              <Route path="/Juguetes" element={<Home />} />
              <Route path="/Otros" element={<Home />} />
              <Route path="/category/:category" element={<Home />} />

              {/* Productos */}
              <Route path="/productos" element={<ProductList />} />

              {/* Usuario */}
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-order" element={<MyOrder />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-orders/last" element={<MyOrder />} />
              <Route path="/my-orders/:id" element={<MyOrder />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/registrarse" element={<Registrarse />} />
              <Route path="/iniciar-sesion" element={<Login />} />

              {/* Stripe y pagos */}
              <Route path="/teststripe" element={<TestStripe />} />

              {/* Información general */}
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/nuestros-servicios" element={<NuestrosServicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/ayuda" element={<Ayuda />} />

              {/* Otros componentes */}
              <Route path="/UserInfo" element={<UserInfo />} />

              {/* Ruta 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <CheckoutSideMenu />
        </div>
      </Router>
    </AppProviders>
  );
};

export default App;
