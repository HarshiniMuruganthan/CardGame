import { useState } from 'react';

function Home() {
  const [cards, setCards] = useState([
    'claverace.png', 'claver2.jpeg', 'claver3.jpeg', 'claver4.jpeg', 'claver5.jpeg', 'claver6.png', 'claver7.jpeg', 'claver8.png', 'claver9.jpeg', 'claver10.jpeg', 'claverjack.png', 'claverqueen.jpeg', 'claverking.png','diamondace.png',
  ]);

  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [selectedCardPlayer1, setSelectedCardPlayer1] = useState(null);
  const [selectedCardPlayer2, setSelectedCardPlayer2] = useState(null);
  const [playArea, setPlayArea] = useState({ player1Card: null, player2Card: null });

  const drawCard = (player) => {
    if (cards.length > 0) {
      const drawnCard = cards[0];
      if (player === 'Player1') {
        setPlayer1Hand((prevHand) => [...prevHand, drawnCard]);
      } else {
        setPlayer2Hand((prevHand) => [...prevHand, drawnCard]);
      }
      setCards((prevCards) => prevCards.slice(1));
    }
  };

  const playCard = () => {
    if (selectedCardPlayer1 && selectedCardPlayer2) {
      setPlayArea({
        player1Card: selectedCardPlayer1,
        player2Card: selectedCardPlayer2,
      });

      setPlayer1Hand((prevHand) =>
        prevHand.filter((card) => card !== selectedCardPlayer1)
      );
      setPlayer2Hand((prevHand) =>
        prevHand.filter((card) => card !== selectedCardPlayer2)
      );

      setSelectedCardPlayer1(null);
      setSelectedCardPlayer2(null);
    }
  };

  return (
    <div className="App">
      <h1>
        <span className="color-one">Soli</span>
        <span className="color-two">taire</span>
      </h1>

      <div className="available-cards">
        <h2>Available Cards</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={`${card}`} alt={card} />
            </div>
          ))}
        </div>

      </div>

      <div className="play-area">
        <h2>Play Area</h2>
        <div className="cards">
          <div className="card play-card">
            {playArea.player1Card ? (
              <img
                src={`${playArea.player1Card}`}
                alt={playArea.player1Card}
              />
            ) : (
              <p>Player 1's card</p>
            )}
          </div>
          <div className="card play-card">
            {playArea.player2Card ? (
              <img
                src={`${playArea.player2Card}`}
                alt={playArea.player2Card}
              />
            ) : (
              <p>Player 2's card</p>
            )}
          </div>
        </div>
      </div>

      <div className="players-hand">
        <div className="player-hand">
          <h2>Player 1's Hand</h2>
          <div className="cards">
            {player1Hand.map((card, index) => (
              <div
                key={index}
                className={`card ${selectedCardPlayer1 === card ? 'selected' : ''}`}
                onClick={() => setSelectedCardPlayer1(card)}
              >
                <img src={`${card}`} alt={card} />
              </div>
            ))}
          </div>
          <button onClick={() => drawCard('Player1')} disabled={cards.length === 0}>
            Draw Card (Player 1)
          </button>
        </div>

        <div className="player-hand">
          <h2>Player 2's Hand</h2>
          <div className="cards">
            {player2Hand.map((card, index) => (
              <div
                key={index}
                className={`card ${selectedCardPlayer2 === card ? 'selected' : ''}`}
                onClick={() => setSelectedCardPlayer2(card)}
              >
                <img src={`${card}`} alt={card} />
              </div>
            ))}
          </div>
          <button onClick={() => drawCard('Player2')} disabled={cards.length === 0}>
            Draw Card (Player 2)
          </button>
        </div>
      </div>

      <button
        onClick={playCard}
        disabled={!selectedCardPlayer1 || !selectedCardPlayer2}
      >
        Play Selected Cards
      </button>
    </div>
  );
}

export default Home;
