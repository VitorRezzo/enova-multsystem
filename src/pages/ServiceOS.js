import React,{useState,useEffect} from 'react';
import '../App.css';
import {firestore} from '../config/Firebase';


function ServiceOs(){

    const [options,setOptions] = useState([]);
    
    const [selectedOption,setSelectedOption] = useState();
    
    let idUser = [];
    

    useEffect(() => {
        const Filter = async () =>{
            await firestore.collection("USERS").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {                               
                        setOptions(querySnapshot.docs.map(doc => doc.data().Nome))    
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        } 
        Filter()
       
    }, []);


    async function SelectId (name){
         
       await firestore.collection("USERS").where("Nome", "==", name).get()   
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {            
                 idUser[0] =   doc.data().Id                
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    } 



 

        async function Submit ( e ) {
           
           e.preventDefault();
        
        
        try{
           
          await firestore.collection(idUser[0]).add({
            PT: e.target.pt.value,
            Responsavel: selectedOption,
            Data: e.target.data.value,
            Cliente: e.target.cliente.value,
            Problema:e.target.problema.value,
            Descricao:e.target.descricao.value,
            Endereco: e.target.endereco.value,
            Localizacao: e.target.localizacao.value 
            
          })
          console.log(idUser[0])
         alert("dados enviados com sucesso")
            
        }catch(error){
            alert("dados não anviados",error)
            
        }
        
        }
        
    return(

        <div className="Service" >
                <header className="Service-Header">
            
                <h1>Cadastro Atendimentos</h1>
                </header>

                <div className="Service-Form">
                    <form onSubmit={Submit} >
                        <label>OS: </label>
                        <input name="os" type="number" placeholder=""  required/>
                        <label>PT: </label>
                        <input name="pt" type="number" placeholder=""  required/>
                        <label>Responsavel: </label>    
                        
                        <select 
                        
                        value={ selectedOption }
                        onChange={(e) => setSelectedOption(e.target.value)}
                        onClick={(e) => SelectId(e.target.value)}
                        > 
                            <option>selecionar</option>
                             {options.map((option) => (
                                <option name="op" key={option}>{option}</option>
                                ))
                             }
                             
                        </select>         
                        <label>Data: </label>
                        <input name="data" type="date" placeholder=""  required/>
                        <label>Cliente: </label>
                        <input name="cliente" type="text" placeholder=""  required/>
                        <label>Problema: </label>
                        <input name="problema" type="text" placeholder=""  required/>
                        <label>Descrição: </label>
                        <input name="descricao" type="text" placeholder=""  />
                        <label>Endereço: </label>
                        <input name="endereco" type="text" placeholder=""  required/>
                        <label>Localização: </label>
                        <input name="localizacao" type="text" placeholder=""  />
                        <button type="submit"  className="App-bnt">Enviar</button>
                    </form>
                </div>
        
        
        </div>

    );

}



export default ServiceOs;