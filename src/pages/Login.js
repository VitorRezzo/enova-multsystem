import logo from '../img/EnovaLogo.png';
import '../App.css';
import firebase from '../config/Firebase';





function Login({history}) { 


  async function Submit ( e ) {
      e.preventDefault();
  try{
   await firebase.auth().signInWithEmailAndPassword(e.target.email.value,e.target.password.value)
  
   window.electron.openhomeWindow()
  }catch(error){
    console.log(error)
  }
  
  }

  const exit = () => {
    window.electron.exitWindow()
}

const min = () => {
  window.electron.minWindow()
}

  return (




    <div className="App">

        <div className="App-header">
            <header>
            <button onClick={exit} className="exit"></button>
            <button onClick={min} className="minimize"></button>
             
            </header>
        </div>
    
        <form onSubmit={Submit} className="App-form">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <label>Email:</label>
        
        <input name="email" type="email" placeholder="enova@enovarenergia.com"   required />
        
        <label>Senha:</label>
        
        <input name="password" type="password" placeholder="******"   required />
        
        <button type="submit"   className="App-bnt">Acessar</button>
        </form>
      
       
    </div>
  );
  
}

export default Login;