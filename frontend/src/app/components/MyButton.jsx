export default function MyButton({children,onClick})
{
    return (<button onClick={onClick} type={"button"}>
        {children}
    </button>);
}