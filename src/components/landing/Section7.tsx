import { cardsCategoria } from "@/data/cardsCategoria";
import Image from "next/image";

export const Section7 = () => {
  return (
    <section className="flex flex-col container">
      <h1 className="text-center text-xl lg:text-6xl font-bold pb-10 pt-1">
        Categorias de Lotes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 py-10">
        {cardsCategoria.map(({ imgUrl, text }) => (
          <div className="bg-footer-color bg-opacity-40 mx-10 my-1" key={text}>
            <div className=" bg-white m-2 h-40  flex flex-col place-content-center place-items-center">
              <Image
                src={`/assets/categorias/${imgUrl}`}
                width={100}
                height={100}
                alt={text}
              />
              <h2 className="text-center font-semibold">{text}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
