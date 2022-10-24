import myFirstPictures from '../first experience.png';
import star from '../star.png';
export default function Card (props) {

    return (
        <>
         <div className='cardscontainer'>   
            <div className="card">
                  <img className = 'cardimage' src={`../images/${props.img}`} />
                  <div className='cardspan'>
                    <img className='cardstar' src={star} />
                    <span className='cardratings'>({props.rating})</span>
                    <span className='grey'> {props.reviewCount} • </span>
                    <span className='grey'>{props.location}</span>
                 </div>
                 <p className='cardparagraph'>{props.title}</p>
                 <p className='cardprice'> <b> $ {props.price}</b> / person </p> 
            </div>
         </div>  
        </>
    )
}