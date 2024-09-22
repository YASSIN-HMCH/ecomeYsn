import React, {useState , useEffect } from "react";
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faSmile, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



function Cards(){
  const [backendData, setBackendData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch("https://ecome-ysn-4ojqhuy.vercel.app/products")
      .then(response => response.json())
      .then(data => {
        setBackendData(data.products); // Store products data in state
      })
      .catch(err => console.error("Error fetching data:", err)); // Error handling
  }, []);
    const coralColor = 'rgb(252, 70, 4)'
    return(
        <>
        <div  id="Card" className="container">
          <div className="row">
              {backendData.map((p)=>{return(<div class="column">
          <div className="card">
          <img src={p.image} alt="imageys"  className="Rouge01"/>
          <p>{p.name} </p>
          <div className="card-footer">
              <span className="price">${p.Price}</span>
              <Link to={`/info/${p.id}`}>
                <button className="buy-btn-card">See More</button>
              </Link>
            </div>
          </div>
  </div>)})}
</div>
</div> 
<div className="descriptions-container" id="Carde">
        <div className="description">
          <FontAwesomeIcon icon={faTruck} size="4x" color={coralColor} />
          <h3>Livraison à Domicile</h3>
          <p>Profitez de la livraison rapide et sécurisée directement à votre domicile.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faCreditCard} size="4x"  color={coralColor} />
          <h3>Paiement</h3>
          <p>Choisissez parmi nos options de paiement sécurisées pour une expérience sans souci.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faSmile} size="4x" color={coralColor} />
          <h3>Satisfaction Client</h3>
          <p>Votre satisfaction est notre priorité. Nous nous efforçons de vous offrir la meilleure expérience.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faHeadset} size="4x" color={coralColor} />
          <h3>Service Client</h3>
          <p>Notre équipe de service client est disponible pour répondre à vos questions et résoudre vos problèmes.</p>
        </div>
      </div>  

        </>

    );
}
export default Cards