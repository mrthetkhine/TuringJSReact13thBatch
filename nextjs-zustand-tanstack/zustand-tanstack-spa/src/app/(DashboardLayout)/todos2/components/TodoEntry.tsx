'use client';
import {Box, TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useSaveTodo } from "@/app/lib/hooks/todoHook";
export default function TodoEntry()
{
    const [todoText,setTodoText] = useState("");
    const {mutate:saveTodo} = useSaveTodo();
    const addTodo = () => {
        console.log('addTodo ',todoText);
        saveTodo({
            title: todoText,
        });
    }
    return(<div>
        <TextField
            label="Title"
            fullWidth
            margin="normal"
           value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
        />
        <Button onClick={addTodo}
                type={"button"}
                variant={"contained"}
                size="small"
                >Add</Button>
    </div>);
}