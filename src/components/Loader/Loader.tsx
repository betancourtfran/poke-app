import React from 'react';
import style from './Loader.module.scss';

interface ILoaderProps {
    isFetching: boolean
}

const Loader = ({isFetching}: ILoaderProps): JSX.Element => {
    return (
        <div className={isFetching? style.showLoader : style.hideLoader}></div>
    )
}
export default Loader;