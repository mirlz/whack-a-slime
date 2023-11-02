import { useState } from 'react';
import GameState from '../Utility/GameState';
import Timer from './Timer';

const GameScreen = (props) => {
    const [gameState, setGameState] = useState(GameState);
    const { isPlaying, isEnded, isPaused } = gameState;

    const startGame = () => {
        console.log('test')
        setGameState(prev => ({
            ...prev,
            isPlaying: true
        }))
    };
    const endGame = () => {
        setGameState(prev => ({
            ...prev,
            isPlaying: false
        }))
    };
    const pauseGame = () => {
        setGameState(prev => ({
            ...prev,
            isPaused: true
        }))
    };
    return (
        <div className="gameWrapper">
            <div className="sky">
                <div className="skyWrapper">
                    {(!isPlaying) && (
                        <h1>Whack A Mole</h1>
                    )}
                    {(isPlaying) && (
                        <div className="gameHeader">
                            <button
                                className="startButton button"
                                onClick={endGame}>
                                Stop Game
                            </button>
                            <Timer onEnd={endGame} />
                        </div>
                    )}
                </div>
            </div>
            <div className="land">
                <div className="landWrapper">
                    {(!isPlaying) && (
                        <button
                            className="startButton button"
                            onClick={startGame}>
                            Start Game
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GameScreen;