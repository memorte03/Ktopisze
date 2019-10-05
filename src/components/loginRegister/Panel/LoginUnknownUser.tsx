import * as React from 'react';
import * as ReactDOM from 'react-dom';


export default class LoginUnknownUser extends React.Component<any,any> {
    public navBtn:string;

    constructor(props: any){
        super(props);
        this.navBtn = "Rejestracja";
        
    }

    render(){
        return(
            <div className="input-container">
                <h1>Zaloguj się</h1>
                    <form className="input" action="">
                        <input type="text" placeholder="Adres e-mail"/>
                        <input type="password" placeholder="Hasło"/>
                        <input className="submit-btn" type="submit" value="Zaloguj"/>
                    </form>
                <a href="">Zapomniałeś hasła?</a>
            </div>
        );
    }
}