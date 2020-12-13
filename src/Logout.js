import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom'


function Logout() {
    const history = useHistory()
    return (
    <div style={{marginBottom: 20}} >
        <GoogleLogout
      clientId="198258262856-mm6nm0eivtrbcdr5bqg3jvgnf1i9lbtq.apps.googleusercontent.com"
      onLogoutSuccess={() =>  history.push('/')}
      />
      </div>
    )
}

export default Logout
