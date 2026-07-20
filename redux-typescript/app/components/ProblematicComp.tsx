'use client';
export default function ProblematicComp()
{
    let data:any = 123;
    return (<div>
        <h1>
            {
                data.toUpperCase()
            }
        </h1>
    </div>)
}