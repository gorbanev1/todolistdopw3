// @flow 
import * as React from 'react';

type Props = {
    id: number
    title: string
    onClick: ()=>void
    
};
export const Button = ({title, onClick, id}: Props) => {
    const onClickHandler = ()=>{
        onClick()
    }
    return (
        <button onClick={onClickHandler}>
            {title}
        </button>
    );
};