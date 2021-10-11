import logo from '../img/EnovaLogo.png';
import '../App.css';
import firebase from '../config/Firebase';





function Login({history}) { 




  

  async function Submit ( e ) {
      e.preventDefault();
  try{
   await firebase.auth().signInWithEmailAndPassword(e.target.email.value,e.target.password.value)
   
    history.push("/Home")
  }catch(error){
    console.log(error)
  }
  
  }



  return (
    <div className="App">
    
        <form onSubmit={Submit} className="App-header">
        
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