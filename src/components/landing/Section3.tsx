import Image from "next/image";

import { typeClients } from "@/data/typeClients";

export const Section3 = () => {
  return (
    <section className="bg-section3 bg-fixed py-16">
      <h1 className="lg:text-6xl text-4xl font-bold text-center mb-10">
        Servicio Personalizado para Cada Cliente
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2 grix-cols-1 sm:px-10 px-2">
          {typeClients.map(({ title, description, imageUrl }) => (
            <div
              key={title}
              className="border border-gray-200 rounded-lg shadow-xl bg-white"
            >
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-2xl pt-6"
                  src={imageUrl}
                  width={270}
                  height={270}
                  alt={title}
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  {title}
                </h2>
                <p className="text-gray-600 mb-4 text-justify text-lg">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
