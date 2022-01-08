import './WinModal.css'

const WinModal = ({ isComplete, restartGame, leaveGame }) => {
  return (
    <div className="outline" data-show={isComplete} >
      <div className="modal">
        <h2>Winner</h2>
        <span>Do you wanna:</span>
        <p><button className='btn' onClick={restartGame}>Play again</button> or <button className='btn' onClick={leaveGame}>Leave</button></p>
      </div>
    </div>
  )
}

export default WinModal
