// import './styles.css'
import ganesh from '../images/ganapathi.jpg'
export default function ContactProfile(props){

    
    return (
        <div className="ProfileCard">
            <div className="profileImg">
                <img  src={ganesh} alt="" />
            </div>
            <div className="profileDetails">
                <h2 className="name"><span>Name: </span>aravind</h2>
                <p className="gmail"><span>Email: </span>ari@gamil.com..</p>
            </div>
        </div>
    )
}