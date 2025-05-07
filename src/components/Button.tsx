// @flow 
import * as React from 'react';

type Props = {
    id: number
    title: string
    onClick: (id:number)=>void
    
};
export const Button = ({title, onClick, id}: Props) => {
    const onClickHandler = ()=>{
        debugger
        onClick(id)
    }
    return (
        <button onClick={onClickHandler}>
            {title}
        </button>
    );
};