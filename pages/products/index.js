/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

export default function Produtos({ marca }) {
  return (
    <>
      <Head>
        <title>Produtos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">PRODUTOS</h1>
        </div>
      </header>

      {marca.map((m) => (
        <section key={m.id} className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-12">
              <div className="flex items-center justify-center lg:w-3/12 lg:mb-0 -mt-9 p-12 ">
                <img
                  src={`https://agencianatural.com.br/admin-ebicen/public/storage/${m.imagem}`}
                  alt="content"
                />
              </div>

              <div
                className="lg:w-9/12 w-full leading-relaxed text-gray-500 p-6"
                dangerouslySetInnerHTML={{ __html: m.descricao }}
                key={m.id}
              ></div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="w-1/2 xl:w-1/4 md:w-1/3 sm:w-1/2 p-2">
                <div className=" p-2 rounded-lg">
                  <img
                    className="rounded w-full object-cover object-center mb-6"
                    src="https://agencianatural.com.br/admin-ebicen/public/storage/produtos/August2022/Xx118u3F97DSXDtE8rwZ.jpg"
                    alt="content"
                  />
                  <h2 className="text-gray-900 font-medium title-font mb-4 text-center">
                    NOME DO PRODUTO
                  </h2>
                </div>
              </div>
              <div className="w-1/2 xl:w-1/4 md:w-1/3 sm:w-1/2 p-2">
                <div className=" p-2 rounded-lg">
                  <img
                    className="rounded w-full object-cover object-center mb-6"
                    src="https://agencianatural.com.br/admin-ebicen/public/storage/produtos/August2022/Xx118u3F97DSXDtE8rwZ.jpg"
                    alt="content"
                  />
                  <h2 className="text-gray-900 font-medium title-font mb-4 text-center">
                    NOME DO PRODUTO
                  </h2>
                </div>
              </div>

              <div className="w-1/2 xl:w-1/4 md:w-1/3 sm:w-1/2 p-2">
                <div className=" p-2 rounded-lg">
                  <img
                    className="rounded w-full object-cover object-center mb-6"
                    src="https://agencianatural.com.br/admin-ebicen/public/storage/produtos/August2022/Xx118u3F97DSXDtE8rwZ.jpg"
                    alt="content"
                  />
                  <h2 className="text-gray-900 font-medium title-font mb-4 text-center">
                    NOME DO PRODUTO
                  </h2>
                </div>
              </div>

              <div className="w-1/2 xl:w-1/4 md:w-1/3 sm:w-1/2 p-2">
                <div className=" p-2 rounded-lg">
                  <img
                    className="rounded w-full object-cover object-center mb-6"
                    src="https://agencianatural.com.br/admin-ebicen/public/storage/produtos/August2022/Xx118u3F97DSXDtE8rwZ.jpg"
                    alt="content"
                  />
                  <h2 className="text-gray-900 font-medium title-font mb-4 text-center">
                    NOME DO PRODUTO
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://agencianatural.com.br/admin-ebicen/public/api/marcas"
  );
  const marcas = await res.json();

  return {
    props: {
      marca: marcas,
    },
  };
};
