import { useLocation } from 'react-router-dom'
import ganesh from '../images/ganapathi.jpg'

export default function ContactProfile(props){
    const { id, name, email } = useLocation().state;

    return (
        <div className="container mx-auto max-w-md p-6 bg-white shadow-md rounded-lg mt-10">
            <div className="flex items-center space-x-6 mb-6">
                <img src={ganesh} className="w-24 h-24 rounded-full border-2 border-blue-500" alt="Profile" />
                <div>
                    <p className="text-xl font-bold text-gray-800">Name: <span className="text-blue-600">{name}</span></p>
                    <p className="text-lg text-gray-600">Gmail: <span className="text-blue-500">{email}</span></p>
                </div>
            </div>
        </div>
    )
}
