
import { useLocation } from 'react-router-dom'
import ganesh from '../images/ganapathi.jpg'
export default function ContactProfile(props){
    const {id,name,email} = useLocation().state;
    return (
        <div className="ProfileCard">
            <div className="profileImg">
                <img  src={ganesh} alt="" />
            </div>
            <div className="profileDetails">
                <p className="name"> Name: <span>{name} </span></p>
                <p className="gmail">Gmail: <span>{email}.. </span></p>
            </div>
        </div>
    )
}