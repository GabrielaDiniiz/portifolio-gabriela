import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";
import perfil from "../assets/perfil.jpg";
import "../styles/global.css";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <div className="portfolio-wrapper">
      {/* Header / Navegação */}
      <nav className="navbar container">
        <div className="logo-container">
          <div className="logo-badge">GD</div>
          <span className="logo-text">Gabriela Diniz</span>
        </div>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>

          {/* 6. Botão com evento de clique e troca de ícone */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
      {/* Seção Hero Principal */}
      <main className="hero-container">
        <div className="hero-content">
          <div className="badge">Desenvolvedora Frontend</div>

          <h1 className="hero-title">
            Do Direito à <br />
            <span className="gold-text">Tecnologia</span>
          </h1>

          <p className="hero-description">
            Sou Gabriela Diniz, desenvolvedora frontend com transição de
            carreira da Advocacia. Combino rigor analítico com criatividade para
            criar interfaces modernas e acessíveis.
          </p>

          <div className="button-group">
            <button className="btn-filled">
              Ver Projetos <ArrowRight size={18} />
            </button>
            <button className="btn-outline">Baixar CV</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-ring">
            <img src={perfil} alt="Gabriela Diniz" className="profile-img" />
          </div>
        </div>
      </main>
      {/* Seção Sobre Mim / Jornada */}
      <section id="sobre" className="section-padding container">
        <h2 className="section-title">Minha Jornada</h2>
        <div className="sobre-content">
          <p>
            Minha transição de carreira da Advocacia para o Desenvolvimento
            Frontend não foi apenas uma mudança profissional, mas uma evolução
            natural. A formação jurídica me proporcionou:
          </p>
          <ul className="jornada-list">
            <li>
              <strong>Rigor Analítico:</strong> Atenção minuciosa à sintaxe e
              lógica, minimizando erros.
            </li>
            <li>
              <strong>Foco em Padrões:</strong> Aplicação de boas práticas de
              semântica HTML e CSS.
            </li>
            <li>
              <strong>Resolução de Problemas:</strong> Capacidade de interpretar
              documentações complexas.
            </li>
          </ul>
        </div>
      </section>
      <section id="projetos" className="section-padding container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          <div className="project-card">
            <span className="card-badge">Destaque</span>
            <h3>Site Connect</h3>
            <p>Plataforma para conectar voluntários, mentores e doadores.</p>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">SASS</span>
            </div>
            <div className="card-links">
              <a href="#">
                <ExternalLink size={18} /> Ver Projeto
              </a>
              <a href="#">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <span className="card-badge">Destaque</span>
            <h3>VIVA-BEM</h3>
            <p>
              Landing page responsiva para conectar médicos e dentistas a
              projetos de voluntariado.
            </p>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">UX/UI</span>
            </div>
            <div className="card-links">
              <a href="#">
                <ExternalLink size={18} /> Ver Projeto
              </a>
              <a href="#">
                <Github size={18} /> Github
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section-padding container">
        <h2 className="section-title">Vamos Conversar?</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label>Mensagem</label>
            <textarea rows="5" placeholder="Como posso ajudar?"></textarea>
          </div>
          <button type="submit" className="btn-send">
            Enviar Mensagem
          </button>
        </form>

        <div className="contact-direct">
          <h3>Contato Direto</h3>
          <div className="contact-item">
            <Mail size={20} /> gabrieladiniz@aluno.uespi.br
          </div>
          <div className="contact-item">
            <Linkedin size={20} /> Linkedin
          </div>
          <div className="contact-item">
            <Github size={20} /> Github
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Gabriela Diniz. Desenvolvido com React e CSS Puro</p>
      </footer>
    </div>
  );
}
