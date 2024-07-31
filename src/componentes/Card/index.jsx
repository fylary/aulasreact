import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function Card(){
    let icones=[faComment,faHeart,faPaperPlane];
    let nomes=["a","b","c"]
    


    return (
        <div className="card">
          <img src="https://picsum.photos/200" alt="Avatar" style={{width:"100%"}}/>
          <div className="flex-start">
            {icones.map ((item, index)=>
            <FontAwesomeIcon key={index} icon={item}/>
            )}

          
          
          </div>
          <ul>
            <li>somos linda</li>
            <li>amo vcs</li>
            <li>que praia linda</li>
          </ul>
         
           <div className="container">
            <h4><b>Fy e Lary</b></h4>
         <p>Te INCOMODO?? Que peeena!</p>
     </div>
</div>
    )
}
export default Card;



   
