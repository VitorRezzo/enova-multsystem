import React from 'react';
import firebase from '../config/Firebase';
import {useHistory} from 'react-router-dom';
import { Link} from 'react-router-dom';


function Home(){
    const history = useHistory();
    
    function logout(){

    firebase.auth().signOut()
    
    window.electron.exithomeWindow()

    }

const open = () => {
    window.electron.openWindow()
}




    return(
     

<div >
        <header >
        <button type="button" onClick={logout} >sair</button>
            <nav>
        <ul>
            <li>
                <Link to="/UserCad" target="_blank">Usuarios</Link>
                
            </li>

            <li>
            <button  onClick={open}>atendimentos</button>

            </li>
        </ul>

            </nav>
        </header>
 
    
    <div style={{background:'black', height: '100vh'}}>
    
    <h1>IIIIII</h1>
    
    </div>
    
  
 
</div >



        

        

        

    );

}



export default Home;