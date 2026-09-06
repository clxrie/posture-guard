import { useEffect, useState } from "react";

function SessionTimer(){

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interValid = setInterval(() =>{
            setSeconds(s => s + 1);
        },1000);

        /* ALWAYS returning a cleanup function to prevent memory leaks */
        return () => clearInterval(interValid);
    }, []);

    /* Formatting time so that I can display it */
    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds/60);
        const secs = totalSeconds % 60;

        // Padding with leading zeros (e.g., 02:05)
        return `${String(mins).padStart(2,'0')}: ${String(secs).padStart(2,'0')}`;
    }

    return(
        <div>
            <h1>Time Elapsed: {formatTime(seconds)}</h1>
        </div>
    );
}
export default SessionTimer