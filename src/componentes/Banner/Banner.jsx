import "./Banner.css";
function Banner(props) {

     //"https://www.diariodepernambuco.com.br/static/app/foto_127989356258/2012/06/20/1955/20120620153018612649e.jpg"

  return (
    <figure className="banner"> 
        <img src={props.imagem}>
        </img>
        <figcaption id="legenda"> bunitin de mainha </figcaption>
    </figure>
  

  )
}

export default Banner;


