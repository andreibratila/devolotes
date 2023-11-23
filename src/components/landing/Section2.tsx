import Image from "next/image";

export const Section2 = () => {
  return (
    <section className=" container py-16 ">
      <div className="lg:grid lg:grid-cols-2 flex flex-col place-items-center lg:place-items-center">
        <Image
          className="lg:pb-0 pb-10"
          src="/assets/section2-sell.png"
          width={400}
          height={400}
          alt="Dibujo de una persona trabajando en una cinta transportadora"
        />

        <div className="pt-15 space-y-10 lg:px-0 px-5">
          <h2 className="lg:text-6xl text-4xl font-bold">Quienes Somos?</h2>
          <p className="lg:text-xl text-justify lg:text-left md:text-lg">
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
      </div>
    </section>
  );
};
