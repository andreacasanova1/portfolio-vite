import './form.scss';






const Form= (props) => {
  return (
    <>
     
    <div className=" form fondo-tramaBlack formu">
      
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
          { props.children } {/*este props es necesario para poder anidar otro componentes  */}
          
      
      </div>
    </div>
 
    </>
  )
}
                
export default Form;
