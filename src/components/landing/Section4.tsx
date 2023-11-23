import Image from "next/image";

export const Section4 = () => {
  return (
    <section className="py-16">
      <div className="lg:grid lg:grid-cols-2 flex flex-col place-items-center lg:place-items-center">
        <div className=" space-y-10 lg:px-0 px-5 2xl:ml-60 xl:ml-56 mx-1">
          <h2 className="xl:text-5xl text-3xl font-bold text-center lg:text-left ">
            Nuestros Lotes
          </h2>
          <p className="lg:text-xl text-justify lg:text-left text-lg">
            Somos una organización comprometida con la revalorización de
            productos devueltos. Nuestro enfoque se centra en identificar y
            valorizar cada artículo retornado, incluyendo aquellos provenientes
            de devoluciones de clientes de Amazon. Nos destacamos en la
            recopilación, clasificación y comercialización de lotes y palets,
            cada uno representando una oportunidad única. Manejamos con cuidado
            cada paquete, conscientes de que en su interior se encuentra una
            diversidad de artículos listos para ser redescubiertos y
            aprovechados en su segundo ciclo de vida.
          </p>
        </div>
        <Image
          className="lg:my-0 my-10 rounded-xl"
          src="/assets/lotes1.jpg"
          width={500}
          height={375}
          alt="lote de amazon abierto"
        />
      </div>
    </section>
  );
};
