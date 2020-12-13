import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom'
import { GoogleLogout } from 'react-google-login'
import Logout from './Logout'

function AfterUpload() {
    const location = useLocation()
    const objectUrl = URL.createObjectURL(location.state.selectedFile)
    const [imageSrc, setImageSrc] = useState(objectUrl)
    
    const fileData = () => {       
        return(
            <div>
                <h2>file details:</h2>
                <p>file name: {location.state.selectedFile.name}</p>
                <p>file type: {location.state.selectedFile.type}</p>
            </div>
        )  
    }
    const props = { width: 400, height: 250, scale:2,zoomPosition: 'bottom', img:imageSrc}
    return (

        <div>
            <Logout/>
            <ReactImageZoom {...props}/>
            {fileData()}
        </div>
    )
}

export default AfterUpload
