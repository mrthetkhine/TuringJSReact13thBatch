import {useState} from "react";
import Counter from "@/app/components/Counter";
import Clock from "@/app/components/effect/Clock";

export default function CleanUp()
{
    const [showB, setShowB] = useState(true);

    return (
        <div>

            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Close Clock
            </label>
            {showB && <Clock />}


        </div>
    );
}