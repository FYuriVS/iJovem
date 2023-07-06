import "./App.css";
import { Card } from "./components/Card/Card";

import medico from "./assets/images/medico.svg";
import programador from "./assets/images/programmer.svg";
import advogado from "./assets/images/advogado.svg";
import cientista from "./assets/images/cientista.svg";
import artista from "./assets/images/artista.svg";
import empreendedor from "./assets/images/empreendedor.svg";
import psicologo from "./assets/images/pisicologo.svg";
import robo from "./assets/images/robo.svg";

interface iProf {
  name: string;
  description: string;
  image: string;
}

function App() {
  const profs: iProf[] = [
    {
      name: "Profissionais de saúde",
      description:
        "Médicos, enfermeiros e outros profissionais de saúde exigem habilidades e conhecimentos especializados que são difíceis de automatizar completamente. Embora a tecnologia possa apoiar essas profissões, é improvável que substitua totalmente os cuidados e a tomada de decisões humanas.",
      image: medico,
    },
    {
      name: "Programadores",
      description:
        "Os programadores desempenham um papel crucial na era da tecnologia da informação. Eles são os profissionais responsáveis por criar, desenvolver e manter softwares, aplicativos e sistemas que impulsionam a nossa sociedade cada vez mais digital",
      image: programador,
    },
    {
      name: "Advogados",
      description:
        "Embora a automação possa ajudar na pesquisa e organização de informações legais, a prática do direito envolve interpretação complexa, argumentação persuasiva e aconselhamento jurídico estratégico que exigem o julgamento humano.",
      image: advogado,
    },
    {
      name: "Cientistas",
      description:
        "Descobertas científicas e avanços tecnológicos exigem pensamento criativo, experimentação e raciocínio lógico. Embora a tecnologia possa auxiliar no processo de pesquisa, a contribuição humana é fundamental nessa área.",
      image: cientista,
    },
    {
      name: "Artistas",
      description:
        "A criatividade humana é uma força única que é difícil de replicar por máquinas. Artistas, escritores, músicos e outros profissionais criativos continuarão a trazer perspectivas únicas e expressões artísticas que não podem ser totalmente substituídas.",
      image: artista,
    },
    {
      name: "Empreendedores",
      description:
        "A inovação e a identificação de oportunidades de negócios são impulsionadas por mentes empreendedoras. Embora a tecnologia possa apoiar os empreendedores, a capacidade de identificar lacunas no mercado e criar soluções únicas continua sendo uma habilidade humana essencial.",
      image: empreendedor,
    },
    {
      name: "Psicólogos",
      description:
        "Aconselhamento, diagnóstico e tratamento de problemas emocionais e de saúde mental envolvem uma compreensão profunda das emoções humanas, empatia e habilidades interpessoais que são difíceis de replicar em máquinas.",
      image: psicologo,
    },
    {
      name: "Especialista em robótica",
      description:
        "Com o avanço da automação e da robótica, profissionais capazes de projetar, programar e manter robôs e sistemas automatizados serão essenciais em setores como manufatura, logística e medicina.",
      image: robo,
    },
  ];

  return (
    <div className="container">
      <h1>Profissões</h1>
      <div className="card-grid">
        {profs.map((prof) => (
          <Card
            name={prof.name}
            description={prof.description}
            image={prof.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
