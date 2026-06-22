'use client';
import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/app/components/HelloWorld";
import Profile from "@/app/components/Profile";
import ProfileGreet from "@/app/components/ProfileGreet";
import Demo from "@/app/components/Demo";
import Greeting from "@/app/components/Greeting";
import Border from "@/app/components/Broder";
import UserProfile from "@/app/components/conditional/UserProfile";
import ListDemo from "@/app/components/list/ListDemo";
import MyButton from "@/app/components/MyButton";
import Bubble from "@/app/components/Bubble";
import Counter from "@/app/components/Counter";
import Parent from "@/app/components/Parent";
import CounterTwo from "@/app/components/CounterTwo";
import ImmutableDemo from "@/app/components/ImmutableDemo";
import TodoItems from "@/app/components/TodoItems";
import ItemEntry from "@/app/components/ItemEntry";
import TabDemo from "@/app/components/tab/TabDemo";
import TodoList from "@/app/components/TodoList";
import DifferentRoot from "@/app/components/reconcilation/DifferentRoot";
import DifferentPosition from "@/app/components/reconcilation/DifferentPosition";
import DifferentProperty from "@/app/components/reconcilation/DifferentProperty";
import SamePosition from "@/app/components/reconcilation/SamePosition";
import IndexKeyIssue from "@/app/components/reconcilation/IndexKeyIssue";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoWithReducer from "@/app/components/reducer/TodoWithReducer";
import ContextDemo from "@/app/components/context/ContextDemo";
export default function Home() {

   let style={
       border: "1px solid black",
   }

  return (
    <div className={styles.page}>
      <main className={styles.main}>

       {/* <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>*/}
        {/*<Profile/>
        <Profile/>*/}
       {/* <ProfileGreet/>
        <Greeting/>*/}
       {/* <Demo/>*/}
      {/* <Profile person={{
           avatar:'https://react.dev/images/docs/scientists/7vQD0fPs.jpg',
           name:"Leo"
       }}
       />
       */}
        {/*<Greeting message={"Hello"}/>
        <Greeting message={"Hi"}/>*/}
         {/* <Border style={style} >
              <Greeting message={"Hello World!"} />
          </Border>
          <Border style={style} >
              <h1>Hello World!</h1>
          </Border>*/}
         {/* <UserProfile role={'admin'} />*/}
          {/*<ListDemo/>*/}
          {/*<MyButton onClick={()=>console.log("clicked")}>
              Button Label
          </MyButton>*/}
          {/*<Bubble/>*/}
         {/* <Counter />
          <Counter />*/}
          {/*<Parent/>*/}
         {/* <CounterTwo/>*/}
         {/* <ImmutableDemo/>*/}
        {/*  <TodoItems/>*/}
         {/* <ItemEntry/>*/}
         {/* <TabDemo/>*/}
         {/* <TodoList/>*/}
         {/* <DifferentRoot/>*/}
         {/* <DifferentPosition/>*/}
         {/* <DifferentProperty/>*/}
         {/* <SamePosition/>*/}
         {/* <IndexKeyIssue/>*/}
         {/* <CounterWithReducer/>*/}
         {/* <TodoWithReducer/>*/}
          <ContextDemo/>
      </main>
    </div>
  );
}
