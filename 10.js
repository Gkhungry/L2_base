function bingo(ticket, win){
    let miniWins = 0
    for (let i = 0; i < ticket.length; i++) {
      for( let j = 0; j < ticket[i][0].length; j++) {
        if (ticket[i][0][j].charCodeAt() === ticket[i][1]) {
            miniWins++
            break
          }
      }
    }
    if (miniWins >= win) return 'Winner!';
    return 'Loser!'
  }