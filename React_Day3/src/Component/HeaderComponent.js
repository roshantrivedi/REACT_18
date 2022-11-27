import img from '../images/av3.jpg';

export default function HeaderComponent() {
  return (
    <div className="navbar">
        <img src = {img} className="image"
            borderradius= "50px"
            width="70px"
            height="55px" align="left" alt="not available" />  
            <input type="text" placeholder="Search  your avenger" className='search-bar'/>
            <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  )
}

//PS: I know CSS is a mess but any reference/suggestions will be appreciated. Thank You