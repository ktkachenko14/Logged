import React from "react"
import '../components/Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           isLogged: false,
           textBtn: 'Log In'
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

   handleClick(){
       const isLogged = !this.state.isLogged;
       this.setState({isLogged});
       
   }
   
    render() {
        return (
            <div className='LoginForm'>
                <button onClick={this.handleClick}>{this.state.isLogged ?  'LOG OUT':'LOG IN'}</button>
                <p>Status: {this.state.isLogged ? 'Logged in': 'Logged out'}</p>
            </div>
        )
    }


}
