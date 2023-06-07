import * as React from 'react';

function Icons (props)  {
    return (
        <>

            <div className="nombre-i">{props.name}
             <img src={props.i} alt={props.alt}/>
            </div>


        </>

    )
}
export default Icons;