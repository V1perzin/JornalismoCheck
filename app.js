const { useState } = React;

function PortalNoticias() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Tecnologia 6G começa a ganhar espaço",
      content: "Avanços na tecnologia 6G prometem revolucionar a conectividade.",
      image: "image/6G.jpg",
    },
    {
      id: 2,
      title: "Novo filme quebra recordes de bilheteria",
      content: "A indústria do cinema celebra um novo marco de audiência global.",
      image: "image/deadpoolewolverine.webp",
    },
    {
      id: 3,
      title: "Brasileirão chega na reta final",
      content: "Clubes se enfrentam em busca do título mais disputado do país.",
      image: "image/brasileirao.jpg",
    },
    {
      id: 4,
      title: "Clima extremo preocupa especialistas",
      content: "Ondas de calor e tempestades mostram os efeitos das mudanças climáticas.",
      image: "image/mudancas-climaticas.PNG",
    },
  ]);

  return (
    <div>
      <header>
        <h1>
          <a href="index.html">Portal Check Notícias</a> </h1> {/* teste adicionado href index antes de portal, anteriormente era "<h1>Portal Check Notícias</h1>" */}
        <nav className="nav-links">
          <a href="#politica">Política</a>
          <a href="#economia">Economia</a>
          <a href="#esportes">Esportes</a>
          <a href="#cultura">Cultura</a>
        </nav>
      </header>

      <div className="container">
        {/* Notícias em destaque */}
        <div className="main-news">
          <div className="news-item">
            <img src={news[0].image} alt={news[0].title} />
            <h2>{news[0].title}</h2>
          </div>
          <div className="side-news">
            {news.slice(1, 3).map((item) => (
              <div key={item.id} className="news-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de notícias */}
        <div className="news-grid">
          {news.slice(3).map((item) => (
            <div key={item.id} className="news-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PortalNoticias />);