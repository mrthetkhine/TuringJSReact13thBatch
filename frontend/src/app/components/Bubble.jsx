export default function Bubble()
{
    const childHandler =(e)=>{
        console.log("child clicked");
        e.stopPropagation();
    };
    const parentHandler =(e)=>{
        console.log("parent clicked");

    }
    const rightClickHandler =(e)=>{
        console.log("rightClicked clicked");
        e.preventDefault();
    }
    return (<div onClick={parentHandler} onContextMenu={rightClickHandler}>
        Parent
        <div onClick={childHandler}>
            Child
        </div>
    </div>);
}