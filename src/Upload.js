import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login'
import Logout from './Logout'

function Upload() {
    const history = useHistory()
    const [selectedFile, setSelectedFile] = useState(null)
    const onFileChange = e => {
        setSelectedFile(e.target.files[0])
    }
    const onFileUpload = () => {
        const formData = new FormData()
        formData.append('pic', selectedFile, selectedFile.name)
        history.push({
            pathname:'/AfterUpload',
            state:{selectedFile}
        })
    
    }
    return (
        <div>
            <Logout/>
            <form onSubmit={onFileUpload}>
                <input type="file" onChange={onFileChange} required/>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default Upload
