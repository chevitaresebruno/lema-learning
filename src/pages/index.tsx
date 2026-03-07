import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Interfaces para os props dos componentes
interface ProfileCardProps {
  nome: string;
  imagem: string;
  descricao: string;
  lattes?: string;
  linkedin?: string;
  instagram?: string;
}

interface ProjectCardProps {
  titulo: string;
  descricao: string;
  link: string;
}

// Componente ProfileCard
const ProfileCard: React.FC<ProfileCardProps> = ({ nome, imagem, descricao, lattes, linkedin, instagram }) => {
  const imgUrl = useBaseUrl(imagem);
  return (
    <div style={cardStyle}>
      <img
        src={imgUrl}
        alt={nome}
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
      />
      <h3 style={{ margin: '0.5rem 0', color: '#0a2e5c' }}>{nome}</h3>
      <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>{descricao}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
        {lattes && (
          <a href={lattes} target="_blank" rel="noopener noreferrer">
            🌐 Lattes
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            📷 Instagram
          </a>
        )}
      </div>
    </div>
  );
};

// Componente ProjectCard
const ProjectCard: React.FC<ProjectCardProps> = ({ titulo, descricao, link }) => {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h3 style={{ color: '#0a2e5c', marginTop: 0 }}>{titulo}</h3>
      <p style={{ color: '#555' }}>{descricao}</p>
      <a href={link} style={linkStyle}>
        Saiba mais
      </a>
    </div>
  );
};

// Estilos reutilizáveis (poderiam ser movidos para CSS Modules)
const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#0a2e5c',
  color: 'white',
  padding: '0.8rem 2rem',
  borderRadius: '40px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s',
};

const sectionTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '2.2rem',
  marginBottom: '2rem',
  color: '#0a2e5c',
  borderBottom: '3px solid #ffcd00',
  paddingBottom: '0.5rem',
  display: 'inline-block',
  width: '100%',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const linkStyle: React.CSSProperties = {
  color: '#0a2e5c',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderBottom: '2px solid #ffcd00',
  paddingBottom: '2px',
};

const chipStyle: React.CSSProperties = {
  backgroundColor: '#ffcd00',
  color: '#0a2e5c',
  padding: '0.5rem 1.5rem',
  borderRadius: '30px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

const socialLinkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  border: '2px solid white',
  padding: '0.5rem 1.5rem',
  borderRadius: '40px',
  transition: 'background-color 0.3s',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '2rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '280px',
};

// Componente principal Home
const Home: React.FC = () => {
  // Usamos useBaseUrl para gerar caminhos corretos das imagens
  const logoIfes = useBaseUrl('/img/logo-ifes.png');
  const logoLema = useBaseUrl('/img/logo-lema.png');
  const parceiroIfes = useBaseUrl('/img/parceiros/ifes.png');
  const parceiroLcc = useBaseUrl('/img/parceiros/lcc.png');
  const parceiroImpa = useBaseUrl('/img/parceiros/impa.png');

  return (
    <Layout
      title="Página Inicial"
      description="LEMA - Laboratório de Estudos em Matemática Aplicada - Ifes Campus Serra"
    >
      {/* Hero Section com as duas logos lado a lado */}
      <header style={{ backgroundColor: '#f5f5f5', padding: '3rem 0', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <img src={logoIfes} alt="Logo Ifes" style={{ height: '100px' }} />
          <img src={logoLema} alt="Logo LEMA" style={{ height: '100px' }} />
        </div>
        <h1 style={{ marginTop: '2rem', fontSize: '3rem', color: '#0a2e5c' }}>LEMA</h1>
        <p style={{ fontSize: '1.3rem', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          Laboratório de Estudos em Matemática Aplicada – Ifes Campus Serra
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#777',
            maxWidth: '700px',
            margin: '1.5rem auto 0',
          }}
        >
          Compartilhando e desenvolvendo saberes
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/docs/intro" style={buttonStyle}>
            Conheça o laboratório
          </a>
        </div>
      </header>

      {/* Seção Sobre */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={sectionTitleStyle}>Sobre o LEMA</h2>
        <p style={paragraphStyle}>
          O LEMA é um espaço do Instituto Federal do Espírito Santo (Ifes), campus Serra,
          dedicado a promover a troca de conhecimentos entre alunos e professores nas áreas
          de matemática aplicada e computacional. Atuamos em ensino, pesquisa e extensão,
          sempre com foco na colaboração e na aplicação prática da matemática.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <a href="/docs/laboratorio/sobre" style={linkStyle}>
            Saiba mais →
          </a>
        </div>
      </section>

      {/* Seção Pessoas em Destaque (cards) */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>Nossa equipe</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <ProfileCard
              nome="Prof. Dr. João Silva"
              imagem="/img/equipe/joao.jpg"
              descricao="Coordenador, atua em Cálculo Numérico e Otimização."
              lattes="http://lattes.cnpq.br/..."
              linkedin="https://linkedin.com/in/..."
            />
            <ProfileCard
              nome="Profa. Dra. Maria Oliveira"
              imagem="/img/equipe/maria.jpg"
              descricao="Pesquisadora em Estatística e Ciência de Dados."
              lattes="http://lattes.cnpq.br/..."
              linkedin="https://linkedin.com/in/..."
            />
            <ProfileCard
              nome="Ana Souza"
              imagem="/img/equipe/ana.jpg"
              descricao="Aluna de Iniciação Científica, projeto de análise de dados."
              lattes="http://lattes.cnpq.br/..."
              instagram="https://instagram.com/..."
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/docs/pessoas/docentes" style={linkStyle}>
              Conheça todos →
            </a>
          </div>
        </div>
      </section>

      {/* Seção Projetos em Destaque */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={sectionTitleStyle}>Projetos em andamento</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          <ProjectCard
            titulo="Análise de Dados da COVID-19 no ES"
            descricao="Uso de técnicas estatísticas e machine learning para analisar a evolução da pandemia."
            link="/docs/projetos/projeto-1"
          />
          <ProjectCard
            titulo="Modelagem Matemática em Engenharia"
            descricao="Desenvolvimento de modelos para problemas de otimização em processos industriais."
            link="/docs/projetos/projeto-2"
          />
          <ProjectCard
            titulo="Educação Matemática com Tecnologias"
            descricao="Criação de materiais didáticos interativos para o ensino de matemática."
            link="/docs/projetos/projeto-3"
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/docs/projetos" style={linkStyle}>
            Veja todos os projetos →
          </a>
        </div>
      </section>

      {/* Seção Parceiros */}
      <section style={{ backgroundColor: '#f0f4f8', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={sectionTitleStyle}>Parceiros</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            <img src={parceiroIfes} alt="Ifes" style={{ height: '60px' }} />
            <img src={parceiroLcc} alt="LCC" style={{ height: '60px' }} />
            <img src={parceiroImpa} alt="IMPA" style={{ height: '60px' }} />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href="/docs/parceiros" style={linkStyle}>
              Conheça nossos parceiros →
            </a>
          </div>
        </div>
      </section>

      {/* Seção Trilhas de Aprendizado */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={sectionTitleStyle}>Trilhas de aprendizado</h2>
        <p style={paragraphStyle}>
          Organizamos materiais e referências para quem deseja se aprofundar em tópicos de
          matemática aplicada. Cada trilha contém leituras, vídeos, exercícios e projetos
          práticos.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <a href="/docs/aprendizado/trilha-matematica-basica" style={chipStyle}>
            Matemática Básica
          </a>
          <a href="/docs/aprendizado/trilha-calculo" style={chipStyle}>
            Cálculo
          </a>
          <a href="/docs/aprendizado/trilha-estatistica" style={chipStyle}>
            Estatística
          </a>
          <a href="/docs/aprendizado/recursos" style={chipStyle}>
            Recursos Gerais
          </a>
        </div>
      </section>

      {/* Seção Contato / Redes Sociais */}
      <section style={{ backgroundColor: '#0a2e5c', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ ...sectionTitleStyle, color: 'white', borderBottomColor: 'white' }}>
          Acompanhe o LEMA
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
          <a href="https://instagram.com/lema.ifes" style={socialLinkStyle}>
            Instagram
          </a>
          <a href="https://linkedin.com/company/lema-ifes" style={socialLinkStyle}>
            LinkedIn
          </a>
          <a href="https://github.com/lema-ifes" style={socialLinkStyle}>
            GitHub
          </a>
        </div>
        <p>
          <a href="mailto:lema@ifes.edu.br" style={{ color: 'white', textDecoration: 'underline' }}>
            lema@ifes.edu.br
          </a>
        </p>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
          Ifes Campus Serra – Rodovia ES-010, Km 6,5 – Manguinhos, Serra – ES, 29173-087
        </p>
      </section>
    </Layout>
  );
};

export default Home;