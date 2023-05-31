import * as React from 'react';




function IconChevron({className, size}) {
    return (
        <svg 
        height={64}
        width={64} 
        viewBox="0 0 48 48" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        
        <path d="M17.18 33.16L26.34 24L17.18 14.82L20 12L32 24L20 36L17.18 33.16Z" 
        fill="currentColor"/>
        </svg>
        
    );
}

export default IconChevron; 