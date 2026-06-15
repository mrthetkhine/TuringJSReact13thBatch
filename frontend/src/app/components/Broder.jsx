export default function Border({children,...props})
{
    console.log('children ',props.children);
    return <div {...props} >
        {children}
    </div>
}