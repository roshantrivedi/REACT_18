
const CardComponent = ({avenger}) =>  {

  const {img, name, company, designation} = avenger;   //destructuring props

  return (
    <div id='card' className='card-component'>
        <img src={img} alt='iron-man'></img>
        <h5>{name}</h5>
        <h6>Company: {company}</h6>
        <h6>Designation: {designation}</h6>
    </div>
  );
}
    
export default CardComponent;
