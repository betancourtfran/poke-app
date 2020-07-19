import React from 'react';
import style from './Footer.module.scss';


const Footer = (): JSX.Element => {
    return(
        <div className={style.container}>
            <span>Hecho por Francisco</span>
            <a href='https://github.com/betancourtfran/poke-app' rel='noopener noreferrer' target='_blank'>Link a mi repo</a>
        </div>
    )
}

export default Footer;