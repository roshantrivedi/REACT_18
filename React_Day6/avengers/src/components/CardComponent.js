
const CardComponent = ({avenger:{avatar_url, name, location, bio, company}}) =>  {

  return (
    <div id='card' className='card-component'>
        <img src={avatar_url} alt='iron-man'></img>
        <h5>{name}</h5>
        <h6>Location: {location}</h6>
        <h6>Bio: {bio}</h6>
        <h6>Company: {company}</h6>
    </div>
  );
}
    
export default CardComponent;
