'use client';
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greet from "./components/Greet";
import TodoWithReducer from "@/app/components/TodoWithReducer";
import Container from "@/app/components/Container";
import GreetTwo from "@/app/components/GreetTwo";
import FormDemo from "@/app/components/from/FormDemo";

export default function IndexPage() {
  return (<div>
    {/*<Greet message={"Hi there!"} />*/}
   {/* <TodoWithReducer/>*/}
    {/*<Container>
      <GreetTwo message={"Hi there!"} />
      <div>
        <h1>Another child</h1>
      </div>
    </Container>*/}
    <FormDemo/>
  </div>);
}

