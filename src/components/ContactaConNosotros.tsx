import { contactaConNostrosAddress } from "@/data/contactaConNostrosAddress";
import { Horario, Map, Telefono, Whatsapp } from "@/data/svg";
import Image from "next/image";

export const ContactaConNosotros = () => {
  const getImageBySrc = (src: string) => {
    switch (src) {
      case "Map":
        return Map;
      case "Whatsapp":
        return Whatsapp;
      case "Telefono":
        return Telefono;
      case "Horario":
        return Horario;
      default:
        return null;
    }
  };

  const renderParagraphs = (src: string, text: string): JSX.Element[] => {
    const lines: string[] = text.split("\n");
    return lines.map(
      (line: string, index: number): JSX.Element => (
        <p className="lg:pl-8" key={index}>
          {renderContent(src, line)}
        </p>
      )
    );
  };

  const renderContent = (src: string, content: string): JSX.Element => {
    if (src === "Whatsapp") {
      return (
        <a
          href="https://www.instagram.com/lapizzadehugo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return <>{content}</>;
  };
  return (
    <div className="pt-10 lg:px-20">
      <h1 className="text-center font-bold lg:text-5xl text-3xl">
        Contacta Con Nosotros
      </h1>

      <address className="divide-y pt-10">
        {contactaConNostrosAddress.map(({ src, alt, p }) => (
          <div
            key={src}
            className="lg:py-4 sm:py-4 py-4 flex place-items-center "
          >
            <Image
              className=""
              width={35}
              height={35}
              src={getImageBySrc(src)}
              alt={alt}
            />
            <div>{renderParagraphs(src, p)}</div>
          </div>
        ))}
      </address>
    </div>
  );
};
