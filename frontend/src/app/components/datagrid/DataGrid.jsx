import {useState} from "react";

function DataGridColumn({columns,onColumnClick,sortedBy})
{
    //down &#8595;
    //up arrow &#8593;
    return(<thead>
        <tr>
        {
            columns.map((column, i) =><th
                onClick={()=>onColumnClick(i)}
                key={i}
                style={{
                width: column.width,
                cursor: 'pointer',
            }}>
                {column.headerName }&nbsp;
                {
                    sortedBy[i]? <span> &#8595;</span> :<span>&#8593;</span>
                }

            </th>)
        }
        </tr>
        </thead>);
}
function DataGridBody({columns,rows}) {
    return(<tbody>
    {
        rows.map((row, i) =><tr key={i}>
            {
                columns.map((column, j) =><td key={j} >
                    {
                       column.valueGetter?column.valueGetter(row[column.field],row) : row[column.field]
                    }
                </td>)
            }
        </tr>)
    }
    </tbody>);
}
export default function DataGrid({columns,rows})
{
    //[true,true,true,true] =>true = >ascending
    const [sortByAscending, setSortByAscending] = useState(columns.map((column, i) =>true));
    console.log('sorted by sortByAscending ',sortByAscending);
    const [rowData, setRowData] = useState(rows);
    const onColumnClick = (index) => {
        console.log('Click on column', index);
        rowData.sort((rowA,rowB)=>{
            //console.log('rowA ',rowA);
            //console.log('rowB ',rowB);
            let dataA = rowA[columns[index].field]??'';
            let dataB = rowB[columns[index].field]??'';
            //console.log('Data A',dataA);
            //console.log('Data B ',dataB);
            let ascending = sortByAscending[index];
            if(typeof dataA ==='number')
            {
                if(ascending)
                {
                    return dataB- dataA;
                }
                else
                {
                    return dataA- dataB;
                }

            }
            else
            {
                console.log('Compare as string');
                if(ascending)
                {
                    return dataB.localeCompare(dataA);
                }
                else
                {
                    return dataA.localeCompare(dataB);
                }

            }

        });
        sortByAscending[index] = !sortByAscending[index];
        setSortByAscending(sortByAscending);
        setRowData([...rowData]);
    };
    return(<table border="1" className="table table-striped">
        <DataGridColumn columns={columns} onColumnClick ={onColumnClick}
                        sortedBy={sortByAscending}/>
        <DataGridBody columns={columns} rows={rowData}/>
    </table>);
}