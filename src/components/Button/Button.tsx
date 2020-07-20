import React from 'react';
import style from './Button.module.scss';

interface IButtonProps {
    label?: string,
}

const Button = ({ label = 'Search' }: IButtonProps): JSX.Element => {
    return (
    <button className={style.button} type='submit'>{label}</button>
    )
};

export default Button;