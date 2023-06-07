import './form.scss';




const Form= (props) => {
  return (
    <>
     
    <div className="fondo-tramaBlack formu">
      
      <div className="formulario__fondo">
          <h2>Contact</h2>
          <form>
            <div className="formulario__campo">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            
            <div className="formulario__campo">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" />
            </div>
            
            <div className="formulario__campo">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje"></textarea>
            </div>
            
            <div className="formulario__campo">
              <input type="checkbox" id="terminos" name="terminos" />
              <label htmlFor="terminos">Aceptar términos y condiciones</label>
            </div>
            <button type="submit">Enviar</button>
          </form>
          
          <div className="form__rr-ss">
              
              <div className="nombre-i">{props.name}
                <img src={props.i} alt={props.alt}/>
              </div>
              
              
              <div className="git-hub">
                <i className="git-hub-i"></i>
              </div>
              <div className="codepen">
                <i className="codepen-i"></i>
              </div>
              <div className="sass">
                <i className="sass-i"></i>
              </div>
              <div className="instagram">
                <i className="instagram-i"></i>
              </div>
              <div className="linkd">
                <i className="clinkd-i"></i>
              </div>
              
          </div>
      </div>
    </div>
 
    </>
  )
}
                
export default Form;
