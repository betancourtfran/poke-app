import React from 'react';
import style from './SubmitButton.module.scss';

interface SubmitButtonProps {
    label?: string
}

const SubmitButton = ({ label = 'Search' }: SubmitButtonProps) => {
    return (
        <input className={style.submitButton} type='submit' value={label} />
    )
};

export default SubmitButton;