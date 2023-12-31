import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-white min-h-screen bg-gradient-to-tr from-blue-900 to-slate-700">
      <Image src="/assets/white_logo_title.webp" width={500} height={500} alt="Guardian Bank" title="Guardian Bank" className="mx-auto pt-10 w-auto h-auto" priority />

      <div className="flex justify-center flex-col ">
        <h1 className="font-bold text-white pt-32 text-3xl mx-auto text-center">
          Upss, No pudimos encontrar esta pagina
        </h1>
        <p className="font-bold text-white mx-auto text-xl pt-10 text-center">
          Hemos buscado por todos lados, pero no hemos conseguido encontrar el sitio
          que estas buscando.
        </p>
      </div>
      <div className="flex">
        <Link href='/home' className="mx-auto mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volver al sitio principal
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
