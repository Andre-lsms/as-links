import React from "react";
import { Globe, Github, Linkedin, ArrowRight } from "lucide-react";
import FotoPerfil from "./assets/perfil.png";

export default function App() {
  // Lista de links com ícones do lucide-react
  const links = [
    {
      title: "Portfólio",
      description: "Veja meus projetos de design",
      icon: <Globe className="w-6 h-6" />,
      url: "https://design.andrestudio.com.br",
    },
    {
      title: "GitHub",
      description: "Meus repositórios e códigos",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Andre-lsms",
    },
    {
      title: "LinkedIn",
      description: "Minha trajetória profissional",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/andrelms/",
    },
  ];

  return (
    <div className="relative min-h-screen w-full font-sans text-[#F8F3ED] selection:bg-[#C9AE7B] selection:text-[#2b1f10]">
      {/* 
        SOLUÇÃO DO DEGRADÊ:
        Ao invés de colocar o bg na div principal, criamos uma camada fixa (-z-10).
        Isso garante que o degradê radial fique perfeito e consistente em QUALQUER 
        tamanho de tela (mobile ou desktop) e não quebre quando a página tiver rolagem.
      */}
      <div className="fixed inset-0 -z-10 bg-[#2b1f10] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#C9AE7B]/30 via-[#71562C]/80 to-[#1a1208]"></div>

      {/* Container Principal de Conteúdo */}
      <div className="flex justify-center w-full py-16 px-5 sm:py-20 z-10 relative">
        <div className="w-full max-w-130 flex flex-col items-center">
          {/* Cabeçalho do Perfil */}
          <header className="text-center mb-12 flex flex-col items-center w-full">
            <div className="relative group">
              <img
                // Usando um placeholder que combina com as cores do tema (já que não temos o arquivo local)
                src={FotoPerfil}
                alt="Foto de Perfil"
                className="w-25 h-25 sm:w-30 sm:h-30 r object-cover mb-5 shadow-2xl border-2 border-[#C9AE7B]/40 transition-transform duration-500 group-hover:scale-105"
              />
              {/* Efeito de brilho sutil atrás da foto */}
              <div className="absolute inset-0 rounded-full bg-[#C9AE7B] opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#F8F3ED]">
              André Studio
            </h1>
            <p className="text-[#F8F3ED]/80 font-medium tracking-wide text-sm sm:text-base">
              Designer • Developer • Freelancer
            </p>
          </header>

          {/* Grid de Links */}
          <div className="flex flex-col gap-4 w-full">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center p-4 sm:py-5 sm:px-6 rounded-2xl bg-[#F8F3ED]/5 backdrop-blur-md border border-[#C9AE7B]/20 text-[#F8F3ED] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#F8F3ED]/10 hover:border-[#C9AE7B]/60 hover:shadow-[0_8px_30px_rgb(201,174,123,0.15)] overflow-hidden"
              >
                {/* Efeito de brilho interno no card ao passar o mouse */}
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-[#C9AE7B]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>

                {/* Ícone */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9AE7B]/10 text-[#C9AE7B] mr-4 group-hover:scale-110 transition-transform duration-300 z-10">
                  {link.icon}
                </div>

                {/* Textos */}
                <div className="flex-1 z-10">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F8F3ED] group-hover:text-white transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[#F8F3ED]/60 mt-0.5 group-hover:text-[#F8F3ED]/80 transition-colors">
                    {link.description}
                  </p>
                </div>

                {/* Seta com animação */}
                <div className="ml-2 z-10 text-[#C9AE7B] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>

          {/* Rodapé Opcional */}
          <footer className="mt-16 text-center">
            <p className="text-xs text-[#F8F3ED]/40 font-medium tracking-wider uppercase">
              © {new Date().getFullYear()} André Studio
            </p>
          </footer>
        </div>
      </div>

      {/* Adicionando keyframes para a animação de brilho interna do botão */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
      `,
        }}
      />
    </div>
  );
}
