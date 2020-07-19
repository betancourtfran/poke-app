import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    label?: string,
}

const Button = ({ label = 'Search' }: ButtonProps): JSX.Element => {
    return (
    <button className={style.button} type='submit'>{label}</button>
    )
};

export default Button;