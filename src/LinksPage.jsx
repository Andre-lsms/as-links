import { FaInstagram, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import FotoPerfil from "./assets/perfil.png";

function LinksPage() {
  const links = [
    {
      title: "Portfólio",
      description: "Veja meus projetos de design",
      icon: <FaGlobe />,
      url: "https://design.andrestudio.com.br",
    },
    {
      title: "GitHub",
      description: "Meus repositórios e códigos",
      icon: <FaGithub />,
      url: "https://github.com/Andre-lsms",
    },
    {
      title: "LinkedIn",
      description: "Minha trajetória profissional",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/andrelms/",
    },

  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#C9AE7B33,#71562C)] bg-fixed flex justify-center py-10 px-5 text-[#F8F3ED] font-sans">
      <div className="w-full max-w-[520px]">
        {/* Profile Header */}
        <header className="text-center mb-10">
          <img
            src={FotoPerfil}
            alt="Foto"
            className="w-[90px] h-[90px] sm:w-[140px] sm:h-auto sm:max-h-[110px] object-contain mb-4 mx-auto"
          />
          <p className="opacity-80 mt-1.5">Designer • Developer • Freelancer</p>
        </header>

        {/* Links Grid */}
        <div className="grid gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 sm:py-[18px] sm:px-5 rounded-2xl bg-[#F8F3ED]/5 backdrop-blur-md border border-[#C9AE7B]/25 text-[#F8F3ED] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#F8F3ED]/10 hover:border-[#C9AE7B]"
            >
              <div className="text-[22px] mr-3.5 text-[#C9AE7B]">
                {link.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#F8F3ED]">
                  {link.title}
                </h3>
                <p className="text-[13px] opacity-70 mt-0.5">
                  {link.description}
                </p>
              </div>

              {/* Setinha com animação extra */}
              <span className="opacity-60 text-lg text-[#C9AE7B] group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
