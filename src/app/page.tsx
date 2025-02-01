import Cabeçalho from "./components/Header/Header";
import { ChevronDown, PlayCircle, Check, MessageCircle} from 'lucide-react';


export default function Home() {
  return (
    <div className="bg-[#0a192f] flex flex-col">
      <Cabeçalho />
      <main className="overflow-y-auto flex-1 flex flex-col mt-[100px]">
        <section id="Inicio" className=" w-full flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-white max-w-lg text-3xl text-center mt-5">
            Aumente o faturamento da sua Clínica 10x mais rápido com{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              IA
            </span>
          </h1>
          <span>
            <ChevronDown className=" mt-2 m-auto w-10 h-10 text-white animate-bounce" />
          </span>
        </section>
        <div className="flex justify-center items-center mb-10">
          <video
            className="rounded-lg shadow-lg w-1/2 "
            controls
            src="/videos/AsgoreTheme.mp4">
            https://www.youtube.com/watch?v=6J6XWDX0CjE
          </video>
        </div>
        <section className="bg-[#1d232a] flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-10 mt-10">
            Por que escolher nossa IA?
          </h1>
          <div className="flex gap-24">
            <div className="text-center">
              <Check className="m-auto w-10 h-10 text-purple-500 mb-5" />
              <h3 className="text-xl font-semibold text-white mt-4">
                Eficiência
              </h3>
              <p className="text-gray-400 mt-2">Automatize processos e ganhe tempo.</p>
            </div>

            <div className="text-center">
              <PlayCircle className="m-auto w-10 h-10 text-pink-500 mb-5" />
              <h3 className="text-xl font-semibold text-white mt-4">
                Simplicidade
              </h3>
              <p className="text-gray-400 mt-2">Interface intuitiva e fácil de usar.</p>
            </div>

            <div className="text-center">
              <MessageCircle className="m-auto w-10 h-10 text-purple-500 mb-5" />
              <h3 className="text-xl font-semibold text-white mt-4">
                Suporte
              </h3>
              <p className="text-gray-400 mt-2">Equipe especializada disponível 24/7</p>
            </div>
          </div>
        </section>
        <section id="Sobre" className="bg-[#1d232a] pt-40 pb-40 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            Sobre Nós
          </h2>
          <div>
            <p className="text-gray-400 max-w-2xl text-center">
              Somos uma empresa especializada em soluções de IA para clínicas médicas. Nosso objetivo é ajudar você a aumentar o faturamento e a eficiência da sua clínica, oferecendo ferramentas inovadoras e suporte especializado.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}