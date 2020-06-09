import React from "react"
import { Link, Redirect } from "react-router-dom"
import axios from "axios"
import './Login.css'

class Login extends React.Component {
    state = {
        mail: "",
        pwd: "",
        
    }


    getLogin = (e) => {
        const logCatch = e.target.value
        this.setState({ mail: logCatch })
    }

    getPwd = (e) => {
        const pwdCatch = e.target.value
        this.setState({ pwd: pwdCatch })
    }

    getApi = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:8000/authentification',
            data: {
                mail: this.state.mail,
                pwd: this.state.pwd
            }
        })
        .then(() => {
            this.setState({ success: true })
        })
        .catch(() => {
            this.setState({ failed: true })
        })
    }


    render() {
        return(
            <div>
                <form>
                    <h1>Authentification</h1>
                    <label for="eMail">eMail :</label>
                    <input name="eMail" type="text" onChange={this.getLogin} placeholder="Enter your adress mail"></input>
                    <label for="pwd">Password :</label>
                    <input name="pwd" type="text" onChange={this.getPwd} placeholder="Enter your password"></input>
                    { this.state.failed ? <p className='incorrect'>Your login or your password is incorrect !</p> : "" }
                    { this.state.success ? <Redirect to="/success" /> : "" }
                    <Link><button onClick={this.getApi}>Sign In</button></Link>
                </form>
            </div>
        )
    }
}

export default Login