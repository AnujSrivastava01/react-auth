import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'


function Login() {
    const history = useHistory()
    return (
        <GoogleLogin
      clientId="198258262856-mm6nm0eivtrbcdr5bqg3jvgnf1i9lbtq.apps.googleusercontent.com"
      onSuccess={() =>  history.replace('/Upload')}
      onFailure={(response) => console.log(response)}
      isSignedIn={true}
      />
    )
}

export default Login
