import React from 'react';
import firebase,{firestore} from '../../config/Firebase';
import HeaderWind from '../../components/HeaderWind';
import Box from '@material-ui/core/Box';
function UserCad(){

    async function Submit ( e ) {
        e.preventDefault();
       
    await firebase.auth().createUserWithEmailAndPassword(e.target.email.value, e.target.senha.value)
    .then((userCredential) => {
        var user = userCredential.user;
 
    firestore.collection("USERS").add({
        Id: user.uid, 
        Nome: e.target.nome.value,
        Cargo: e.target.cargo.value,
        Email: e.target.email.value,
        Senha: e.target.senha.value
    });

    }).catch((error) => {;
        console.log(error.message)
    });
    }
    return(

        <Box sx={{height: '100vh',width:'100vw',background:  '#FFF', borderRadius: 3}}>
            <HeaderWind nameWind="UserCad" type="drag"/>
                <header>
                <h1>Cadastro Usuario</h1>
                </header>

                <div>
                    <form onSubmit={Submit}>
                        <label>Nome: </label>
                        <input name="nome" type="text" placeholder=""  required/>
                        <label>Cargo: </label>
                        <input name="cargo" type="text" placeholder=""  required/>
                        <label>Email: </label>
                        <input name="email" type="email" placeholder=""  required/>
                        <label>Senha: </label>
                        <input name="senha" type="text" placeholder=""  required/>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
        
        
        </Box>

    );

}

export default UserCad;