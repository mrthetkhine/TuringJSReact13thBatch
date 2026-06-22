import {ThemeContext} from "@/app/components/context/ThemeContext";
import {useContext, useState} from "react";

function Parent()
{
    return (<div>
        Parent
        <Child />
    </div>)
}
function Child()
{
    return (<div>
        Child
        <GrandChild  />
    </div>);
}
function GrandChild()
{
    const theme = useContext(ThemeContext);
    return (<div style={theme}>
        GrandChild
    </div>)
}
export default function ContextDemo(){

    const [theme, setTheme] = useState({
        color:'blue'
    });
    const onChangeTheme = ()=>{
        setTheme({
            color:'orange'
        })
    }
    return (<div>
        Context demo
        <button type={"button"} onClick={onChangeTheme}>Change</button>
        <ThemeContext.Provider value={theme}>
            <Parent />
        </ThemeContext.Provider>

    </div>)
}