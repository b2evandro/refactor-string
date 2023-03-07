import Head from "next/head";
import { useState } from "react";
import { Toggle } from "../components/toggle";


export default function Home() {
  const [output, setOutput] = useState('')

  const normaliza_texto = (texto) => {
    return texto
      .normalize("NFD")
      .replace(/[^a-zA-Z0-9\s]/g, "")
  };
  const optionsMap = {
    space: (text) => text.replace(/ /g, ""),
    uppercase: (text) => text.toUpperCase(),
    downcase: (text) => text.toLowerCase(),
    undescore: (text) => text.replace(/ /g, "_"),
  };

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const texto = form.elements.texto.value;


    let result = normaliza_texto(texto);
    Object.keys(optionsMap).forEach((option) => {
      if (form.elements[option].checked) {
        result = optionsMap[option](result);
      }
    });
    setOutput(result);

  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Latin</title>
        <link
          rel="icon"
          href="https://rafaell-lycan.com/assets/images/posts/comecando-com-es6.jpg"
        />
      </Head>
      <div className="w-full md:w-5/12 mx-auto py-5 px-4">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibold">
            Remoção de caracters específicos
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            A partir do JavaScript ES6 (2015), existe um recurso chamado
            &apos;Normalize&apos; que permite substituir acentos por caracteres
            sem acentuação. Para Latino-americanos essa funcionalidade é
            importante para não quebrar a aplicação com nomes de
            variaveis/funções em linguagem com caracteres não pertencentes a
            todos os idiomas. Nesse exemplo só deixei letras e número. Os
            espaços são retirados, mas é facil deixalos usando na regex de
            subtituição. Exemplo: São Paulo =&gt; saopaulo
          </p>
        </div>


        <form onSubmit={handleForm} >
          <div className="grid p-4">
            <Toggle name='space' description="Remover espaço?" />
            <Toggle name='uppercase' description="Converter para maiúscula?" />
            <Toggle name='downcase' description="Converter para minúscula?" />
            <Toggle name='undescore' description="Converter espaço em sublinhado?" />
          </div>

          <div className="flex py-4">
            <span className="text-sm border border-2 rounded-l px-4 py-2 w-28 bg-gray-300 whitespace-no-wrap text-center">
              Texto
            </span>
            <input
              name="texto"
              className="border border-2 rounded-r px-4 py-2 w-full"
              type="text"
              placeholder="Insira o texto..."
              ref={input => input && input.focus()}
            />


            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mx-1 border border-2 rounded-l shadow" type="submit">Converter</button>
          </div>
          <div
            className="flex py-4"
          >
            <span className="text-sm border border-2 rounded-l px-4 py-2 w-28 bg-gray-300 whitespace-no-wrap text-center">
              Output
            </span>
            <input
              name="output"
              className="border border-2 rounded-r px-4 py-2 w-full "
              type="text"
              placeholder="Saida.."
              value={output}
              readOnly
            />
          </div>


        </form>
      </div>
    </div>
  );
}