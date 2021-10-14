import React from 'react';
import firebase from '../../config/Firebase';



function Home(){

    
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
                <button to="/UserCad" target="_blank">Usuarios</button>
                
            </li>

            <li>
            <button    onClick={open}>atendimentos</button >
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