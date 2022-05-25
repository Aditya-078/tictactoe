import React from 'react'

const StatusMessage = ({winner, current }) => {
  


    const NoMovesLeft = current.board.every((el) => el !== null)

    return (
    
    <h2>
      
        { winner  && `Winner is ${winner}` }
        { !NoMovesLeft && !winner && `Next player is ${current.isXNext ? 'X' : 'O'} `}
        {!winner && NoMovesLeft && 'X and O tied'}
      
    </h2>
  )
}

export default StatusMessage