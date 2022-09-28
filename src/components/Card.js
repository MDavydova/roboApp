import React from 'react'

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-3'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

//<></> тоже самое что Fragment
//Strict mode checks are run in development mode only; they do not impact the production build.
