import * as React from 'react';


function Icons (props)  {
    return (
        <>

            <div>{props.name}
             <img className="nombre-i" src={props.i} alt={props.alt}/>
            </div>


        </>

    )
}
export default Icons;