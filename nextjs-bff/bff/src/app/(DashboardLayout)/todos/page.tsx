import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import {getAllTodos} from "@/lib/api/todoApi";

export default async function TodoPage()
{
    const todos = await getAllTodos();
    console.log('Todo page ',todos);
    return(<PageContainer title="Todos Page" description="this is Sample page">
        <DashboardCard title="Todo Page">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" sx={{ fontWeight: 'bold' }}>Title</TableCell>

                            <TableCell align="right"  component="th" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow
                                key={todo._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {todo.title}
                                </TableCell>

                                <TableCell align="right">

                                    &nbsp;
                                    <Button variant="contained" type={"button"} >Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardCard>
    </PageContainer>);
}