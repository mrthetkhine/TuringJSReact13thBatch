import Counter from "@/app/components/Counter";
import {useState} from "react";

export default function DifferentPosition()
{
    const [showB, setShowB] = useState(true);

    return (
        <div>
            <Counter/>

            {showB && <Counter />}

            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}