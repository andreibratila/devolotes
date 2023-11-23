export const Section1 = () => {
  return (
    <section className="bg-boxes-amazon bg-cover bg-fixed bg-center h-screen bg-no-repeat">
      <div className="bg-white bg-opacity-10 h-screen bg-cover ">
        <div className="flex place-content-center items-center h-screen">
          <div className="bg-white bg-opacity-50 p-5 font-black text-center">
            <h1 className="text-5xl pb-2">
              Paquetes de Productos <br /> Devueltos en Amazon
            </h1>
            <h2 className="text-xl font-semibold pb-10">
              Cajas y Palés con Artículos Devueltos de Amazon
            </h2>
            <button className="bg-gradient-to-r from-footer-color to-footer-last text-white font-bold py-3 px-6 rounded shadow-lg border border-transparent hover:border hover:border-white hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Ver Nuestros Lotes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
