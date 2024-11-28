const { useState, useEffect } = React;

function PortalNoticias() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Tecnologia 6G começa a ganhar espaço",
      category: "tecnologia",
      content: "Avanços na tecnologia 6G prometem revolucionar a conectividade. Em um futuro não muito distante, as redes 6G devem ser até 100 vezes mais rápidas que a 5G, permitindo novos avanços na comunicação e internet das coisas.",
      image: "image/6G.jpg",
    },
    {
      id: 2,
      title: "Novo filme quebra recordes de bilheteira",
      category: "entretenimento",
      content: "A indústria do cinema celebra um novo marco de audiência global com a estreia de um blockbuster mundialmente aguardado, que superou todos os recordes de bilheteira.",
      image: "image/deadpoolewolverine.webp",
    },
    {
      id: 3,
      title: "Brasileirão chega na reta final",
      category: "esportes",
      content: "Clubes se enfrentam em busca do título mais disputado do país. As equipes estão intensificando os treinos para garantir a melhor colocação possível nas últimas rodadas.",
      image: "image/brasileirao.jpg",
    },
    {
      id: 4,
      title: "Clima extremo preocupa especialistas",
      category: "politica",
      content: "Ondas de calor e tempestades intensas estão cada vez mais frequentes, com previsões alarmantes sobre os impactos das mudanças climáticas na próxima década.",
      image: "image/mudancas-climaticas.PNG",
    },
    {
      id: 5,
      title: "Avanços na inteligência artificial transformam indústria",
      category: "tecnologia",
      content: "Sistemas de IA estão agora sendo integrados em diversos setores, de saúde a transporte, trazendo inovação e maior eficiência para empresas e consumidores.",
      image: "image/ia.jpg",
    },
    {
      id: 6,
      title: "Incertezas econômicas afetam mercados globais",
      category: "economia",
      content: "A economia global enfrenta desafios com taxas de juros elevadas e incertezas políticas, impactando mercados financeiros e a confiança do consumidor.",
      image: "image/economia.jpg",
    },
    {
      id: 7,
      title: "Copa do Mundo de Futebol se aproxima",
      category: "esportes",
      content: "Equipes ao redor do mundo se preparam para a Copa do Mundo de Futebol, um evento que promete emocionar fãs com jogos incríveis e surpresas.",
      image: "image/copa-mundo.jpg",
    },
    {
      id: 8,
      title: "Novo acordo climático é assinado",
      category: "politica",
      content: "Países se reúnem em uma cúpula global e assinam um novo acordo climático para combater as emissões de carbono e promover práticas mais sustentáveis.",
      image: "image/acordo-climatico.jpg",
    },
    {
      id: 9,
      title: "Música pop segue em alta nas paradas globais",
      category: "entretenimento",
      content: "Artistas pop continuam dominando as paradas de sucesso ao redor do mundo, com novas colaborações e lançamentos que encantam fãs de todas as idades.",
      image: "image/pop-music.jpg",
    },
    {
      id: 10,
      title: "Tendências de moda para o próximo ano",
      category: "cultura",
      content: "Estilistas de todo o mundo revelam as principais tendências de moda para o próximo ano, com cores vibrantes e estilos inovadores para todos os gostos.",
      image: "image/moda.jpg",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('home'); // Categoria selecionada

  // Alterar as notícias com base na categoria
  const filteredNews = selectedCategory === 'home' ? news : news.filter(item => item.category === selectedCategory);

  const handleClickNews = (newsItem) => {
    const url = `noticia.html?title=${encodeURIComponent(newsItem.title)}&content=${encodeURIComponent(newsItem.content)}&image=${encodeURIComponent(newsItem.image)}`;
    window.location.href = url;
  };

  useEffect(() => {
    const handleScroll = () => {
      const categories = ['politica', 'economia', 'esportes', 'cultura'];
      const scrollPosition = window.scrollY + window.innerHeight; // Usando scrollPosition mais a altura da janela

      // Verificando a posição do scroll em relação às seções
      categories.forEach(category => {
        const section = document.getElementById(category);
        const sectionTop = section ? section.offsetTop : 0;
        const sectionBottom = section ? sectionTop + section.offsetHeight : 0;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          setSelectedCategory(category); // Atualiza a categoria
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <header>
        <a className="logo" href="/">Portal Check Notícias</a>
        <nav>
          <a href="/" onClick={() => setSelectedCategory('home')}>Home</a>
          <a href="#politica" onClick={() => setSelectedCategory('politica')}>Política</a>
          <a href="#economia" onClick={() => setSelectedCategory('economia')}>Economia</a>
          <a href="#esportes" onClick={() => setSelectedCategory('esportes')}>Esportes</a>
          <a href="#cultura" onClick={() => setSelectedCategory('cultura')}>Cultura</a>
        </nav>
      </header>

      <div className="main-news">
        {filteredNews.map((item) => (
          <div
            className="news-item"
            key={item.id}
            onClick={() => handleClickNews(item)}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2024 Portal Check Notícias</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<PortalNoticias />, document.getElementById("root"));
