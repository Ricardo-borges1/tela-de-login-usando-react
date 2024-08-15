import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import "./Login.css";


const Login = () => {

    const [username, setUsername] = useState ("") //Vaiavel para consultar o valor e uma para alterar o valor;
    const [password, setPassword] = useState ("") 

    //função que será ativada depois de enviar o formulário
    const handleSubmit = (event) => {
        //função para não recarregar a página
        event.preventDefault();

        alert("Enviando os seguintes dados: " +  username  + " - " + password)

        console.log("envio");
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">

            <input type="email" placeholder="E-mail" 
            //"e" estou pegando o evento de clicar, "target" é o input alvo e o value é o valor dele
            onChange={ (e => setUsername (e.target.value)) }/>
            
            <FaUser className="icon"/>
            </div>
            <div className="input-field">

            <input type="password" placeholder="Senha"
            onChange={ (e => setPassword (e.target.value))}/>
            
            <FaLock className="icon"/>
            </div>


            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha? </a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a>
                    </p>
            </div>
        </form>
    </div>
  )
}

export default Login
