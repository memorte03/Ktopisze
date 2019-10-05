import * as React from 'react';
import * as ReactDOM from 'react-dom';


export default class RegisterUser extends React.Component<any,any> {
    constructor(props: any){
        super(props)
    }

    render(){

        return(
            <div id="container">
                <div id="login-unknown-user">
                    <div className="register-btn-container">
                        <div className="register-btn">Rejestracja<i></i></div>
                    </div>
                    <div className="login-container">
                        <h1>Zaloguj się</h1>
                        <form className="input" action="">
                            <input type="text" placeholder="Adres e-mail"/>
                            <input type="password" placeholder="Hasło"/>
                            <input className="submit-btn" type="submit" value="Zaloguj"/>
                        </form>
                        <a href="">Zapomniałeś hasła?</a>
                    </div>
                </div>
            </div>
        );
    }
}