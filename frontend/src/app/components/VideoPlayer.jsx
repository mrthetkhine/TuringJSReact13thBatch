import {useEffect, useRef} from "react";

export default function VideoPlayer()
{
    const ref = useRef(null);


    useEffect(()=>{
        console.log('Use effect ',ref);
        ref.current.muted = true;
        ref.current.play();
    });
    console.log('VideoPlayer render ',ref);
    const play=()=>{
        ref.current.play();
    }
    return(<div>
        <video width="250" ref={ref}>
            <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
            />
        </video>
        <button type={"button"} onClick={play}>Play</button>
    </div>);
}