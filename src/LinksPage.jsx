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
    // {
    //   title: "Instagram",
    //   description: "Conteúdo e bastidores",
    //   icon: <FaInstagram />,
    //   url: "#",
    // },
  ];

  return (
    <div className="page">
      <div className="container">
        <header className="profile">
          <img src={FotoPerfil} alt="Foto" className="avatar" />

          <p>Designer • Developer • Freelancer</p>
        </header>

        <div className="grid">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="card"
            >
              <div className="icon">{link.icon}</div>

              <div className="card-text">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>

              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`

        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
          font-family: Inter, system-ui, sans-serif;
        }

        .page{
          min-height:100vh;
          background: radial-gradient(circle at top, #C9AE7B33, #71562C);
          display:flex;
          justify-content:center;
          padding:40px 20px;
          color:#F8F3ED;
        }

        .container{
          width:100%;
          max-width:520px;
        }

        .profile{
          text-align:center;
          margin-bottom:40px;
        }

        .avatar{
  width:140px;
  height:auto;
  max-height:110px;
  object-fit:contain;
  margin-bottom:16px;
}
        .profile h1{
          font-size:26px;
          font-weight:700;
        }

        .profile p{
          opacity:0.8;
          margin-top:6px;
        }

        .grid{
          display:grid;
          gap:16px;
        }

        .card{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:18px 20px;
          border-radius:16px;
          background:rgba(248,243,237,0.05);
          backdrop-filter: blur(10px);
          border:1px solid rgba(201,174,123,0.25);
          text-decoration:none;
          color:#F8F3ED;
          transition:all .25s ease;
        }

        .card:hover{
          transform:translateY(-4px);
          background:rgba(248,243,237,0.1);
          border-color:#C9AE7B;
        }

        .icon{
          font-size:22px;
          margin-right:14px;
          color:#C9AE7B;
        }

        .card-text{
          flex:1;
        }

        .card-text h3{
          font-size:16px;
          font-weight:600;
          color:#F8F3ED;
        }

        .card-text p{
          font-size:13px;
          opacity:.7;
          margin-top:2px;
        }

        .arrow{
          opacity:.6;
          font-size:18px;
          color:#C9AE7B;
        }

        @media (max-width:480px){

          .profile h1{
            font-size:22px;
          }

          .avatar{
            width:90px;
            height:90px;
          }

          .card{
            padding:16px;
          }
        }

      `}</style>
    </div>
  );
}
export default LinksPage;
