import React from 'react'

export const Card = ({img,desc}) => {
    return (
        <div className=" mr-2 h-full  p-3">
            <img src={img}  alt="" />
            <p className="font-extrabold ">{desc}</p>
        </div>
    )
}
