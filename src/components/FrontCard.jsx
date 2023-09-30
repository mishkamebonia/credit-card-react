import './frontCard.scss';
import cardCircleImage from '../assets/card-cyrcles.svg'

function FrontCard({formData}) {
  
  return (
    <div className="front-card front-card__position">
      <div className="card-content">
        <img src={cardCircleImage} />
        <p className='number'>{formData.number ? formData.number : '**** **** **** ****'}</p>
        <div className='row'>
          <p className='user-name'>{formData.holder ? formData.holder : 'your name here'}</p>
          <p className="validation-time">{formData.month ? formData.month : 'mm'} / {formData.year ? formData.year : 'yy'}</p>
        </div>
        <div className="blur-effect blur-effect__pink"></div>
        <div className="blur-effect blur-effect_orange"></div>
        <div className="blur-effect blur-effect_blue"></div>
      </div>
    </div>
  )
}

export default FrontCard;