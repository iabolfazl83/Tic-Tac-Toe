export default function Log({gameTurns}) {
  return <ol id="log">
    {
     gameTurns.length ?
       gameTurns.map((gameTurn, i) => {
         return (
           <li key={`${gameTurn.square.row}${gameTurn.square.col}`}>
             Player : {gameTurn.player}
             <span> --- </span>
             Selected : Row({gameTurn.square.row}), Col({gameTurn.square.col})
           </li>
         )
       })
       : null
    }
  </ol>
}