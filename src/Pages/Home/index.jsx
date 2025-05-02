import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import FilterSidePanel from "../../Components/FilterSidePanel";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();
  const navigate = useNavigate();

  // 👉 Estado para abrir/cerrar el panel lateral
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 🔹 Actualiza la categoría desde la URL cuando cambia
  useEffect(() => {
    if (category) {
      context.setSearchByCategory(category);
    } else {
      context.setSearchByCategory(null);
    }
    context.setSearchByTitle('');
  }, [category]);

  // 🔄 Función para cambiar de categoría desde el panel
  const handleCategorySelect = (selectedCategory) => {
    const route = selectedCategory === "Todo" ? "/" : `/category/${selectedCategory}`;
    navigate(route);
  };

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <div>No tenemos productos disponibles :(</div>;
    }
  };

  return (
    <Layout>
      {/* 🔘 Botón flotante para abrir panel de filtros */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 z-40 bg-gradient-to-r from-indigo-700 to-blue-500 hover:from-indigo-600 hover:to-blue-400 text-white px-3 py-2 rounded-r-xl shadow-lg transition-all"
      >
        Filtros
      </button>

      {/* Panel lateral de filtros */}
      <FilterSidePanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onCategorySelect={handleCategorySelect}
      />

      {/* Título centrado */}
      <div className="flex items-center justify-center w-full mb-4">
        <h1 className="font-medium text-xl text-center">
          {category ? `Categoría: ${category}` : "Productos Exclusivos"}
        </h1>
      </div>

      {/* Input de búsqueda centrado */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar un producto"
          className="rounded-lg border border-black w-80 p-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>

      {/* Contenedor principal con animación de desplazamiento */}
      <div 
        className={`flex justify-center w-full transition-transform duration-300 ease-in-out ${
          context.isProductDetailOpen || context.isCheckoutSideMenuOpen 
            ? "-translate-x-20"
            : "translate-x-0"
        }`}
      >
        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-lg">
          {renderView()}
        </div>
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
