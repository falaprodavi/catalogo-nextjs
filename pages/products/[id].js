/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ProductId() {
  return (
    <>
      <header className="shadow ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Nome do Produto</h1>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-4">
            <img
              alt="Nome"
              src="https://agencianatural.com.br/admin-ebicen/public/storage/produtos/August2022/Xx118u3F97DSXDtE8rwZ.jpg"
            />
          </div>
          <div className="col-span-5 p-4 text-gray-600">
            <div className="mb-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an
            </div>

            <div className="mb-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an
            </div>

            <div className="mb-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an
            </div>
          </div>
          <div className="col-span-3 p-4">
            <div className="text-[#000] font-medium my-2">
              Cód. barra pacote (EAN-13)
            </div>
            <div className="text-gray-600 my-2">CÓDIGO DE BARRAS</div>
            <div className="text-[#000] font-medium my-2">
              Cód. barra caixa embarque (EAN/DUN-14)
            </div>
            <div className="text-gray-600  my-2">EMBARQUE</div>
            <div className="text-[#000] font-medium my-2">
              Quantidade (pct/cx)
            </div>
            <div className="text-gray-600  my-2">QUANTIDADE</div>
            <div className="text-[#000] font-medium my-2">
              Dimensões caixa (mm)
            </div>
            <div className="text-gray-600 ">DIMENSÕES</div>
            <div className="text-[#000] font-medium my-2">
              Peso caixa (kg)
            </div>
            <div className="text-gray-600 ">PESO</div>
          </div>
        </div>
      </div>
    </>
  );
}
