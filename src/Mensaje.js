//props = params de la funcion
const Mensaje = (props) => {
    return (
      <h1 style = {{color: props.color}}>mensaje: {props.message}</h1>
    );
  }

  export default Mensaje;