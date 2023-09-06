import "./estilos.css";

const Greeting = (props) =>{

    const {greeting} = props

    return(
        <div className="saludo">
        <h1>{greeting}</h1>
        </div>
    )

}

export default Greeting
