import { useState } from 'react';

const GameScreen = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);

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
                                onClick={() => {
                                    setIsPlaying(!isPlaying);
                                }}>
                                Stop Game
                            </button>
                            <div className="timer">
                                Timer: 00:00
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="land">
                <div className="landWrapper">
                    {(!isPlaying) && (
                        <button
                            className="startButton button"
                            onClick={() => {
                                setIsPlaying(!isPlaying);
                            }}>
                            Start Game
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GameScreen;