'use client';

function Cabeçalho() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Isso adiciona uma animação suave
        });
    };

    return (
        <header className=" z-10 w-full fixed px-[100px] h-24 flex justify-between items-center bg-[#112240]">
            <h1 className="text-4xl text-white">Agencia.IA</h1>
            <ul className="text-xl flex flex-row gap-20">
                <li>
                    <button onClick={scrollToTop} className="text-white hover:text-sky-500 transition-colors">
                        Início
                    </button>
                </li>
                <li>
                    <a href="#Sobre">
                        <button className="text-white hover:text-sky-500 transition-colors">
                            Sobre Nós
                        </button>
                    </a>
                </li>
                <li>
                    <button className="text-white hover:text-sky-500 transition-colors">
                        Serviços
                    </button>
                </li>
            </ul>

            <button className="px-5 rounded-xl py-2 bg-sky-800 text-lg font-bold text-white hover:bg-sky-700 transition-colors">
                Contate-nos
            </button>
        </header>
    )
}

export default Cabeçalho
