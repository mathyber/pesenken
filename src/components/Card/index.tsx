import React, {FC} from 'react';
import './styles.scss';
import {ISongWithAddParams} from "../../types/types";

interface CardProps {
    onMouseDown: (e: React.MouseEvent) => any,
    onTouchStart: (e: React.TouchEvent) => any,
    onPlay: () => void,
    song: ISongWithAddParams,
    zIndex?: number,
    isPlay?: boolean
}

const stopPropagation = (e: any) => e.stopPropagation();

const stopPropagationProps = {
    onMouseDown: stopPropagation,
    onTouchStart: stopPropagation,
}

const Card: FC<CardProps> = ({onMouseDown, onTouchStart, song, zIndex, isPlay, onPlay}) => {
    return (
        <div
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            className={`card gradient ${!isPlay ? 'paused' : ''}`}
            style={{
                zIndex,
                background: `linear-gradient(153deg, ${!isPlay ? 'grey' : song.color1}, ${!isPlay ? 'black' : song.color2})`
            }}
        >
            <div className='song-number' {...stopPropagationProps}>
                Song No.{song.number}
            </div>
            <button
                {...stopPropagationProps}
                className='btn_play'
                onClick={(e) => {
                    e.preventDefault()
                    onPlay()
                }}>
                <span className="material-symbols-outlined">{!isPlay ? 'play_arrow' : 'pause'}</span>
            </button>
        </div>
    );
};

export default Card;