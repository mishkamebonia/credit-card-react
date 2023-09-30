import './backCard.scss';

function BackCard({formData}) {

  return (
    <div className="back-card">
      <div className="card-content">
        <div className="line"></div>
        <div className="cvc-number">{formData.cvc ? formData.cvc : '***'}</div>
      </div>
    </div>
  )
}

export default BackCard;