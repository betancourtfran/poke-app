import React from 'react';
import style from './Loader.module.scss';

interface Loader {
    isFetching: boolean
}

const Loader = ({isFetching}): JSX.Element => {
    return (
        <div className={isFetching? style.showLoader : style.hideLoader}></div>
    )
}
export default Loader;