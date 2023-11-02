import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlayCircle, mdiStop, mdiPause, mdiPlay } from '@mdi/js';
import GameState from '../Utility/GameState';
import Timer from './Timer';

const GameScreen = (props) => {
    const [gameState, setGameState] = useState(GameState);
    const { isPlaying, isEnded, isPaused } = gameState;

    const startGame = () => {
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
            isPaused: !isPaused
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
                            <div className="buttonsWrapper">
                                <button
                                    className="button iconButton"
                                    onClick={endGame}>
                                    <Icon className="icon" path={mdiStop} />
                                </button>
                                {(isPlaying && !isPaused) && (
                                    <button
                                        className="button iconButton"
                                        onClick={pauseGame}>
                                        <Icon className="icon" path={mdiPause} />
                                    </button>
                                )}
                                {(isPlaying && isPaused) && (
                                    <button
                                        className="button iconButton"
                                        onClick={pauseGame}>
                                        <Icon className="icon" path={mdiPlay} />
                                    </button>
                                )}
                            </div>
                            <Timer onEnd={endGame} paused={isPaused} />
                        </div>
                    )}
                </div>
            </div>
            <div className="land">
                <div className="landWrapper">
                    {(!isPlaying) && (
                        <button
                            className="button buttonWithText"
                            onClick={startGame}>
                            Start Game
                            <Icon className="icon" path={mdiPlayCircle} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GameScreen;