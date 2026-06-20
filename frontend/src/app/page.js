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
          <ItemEntry/>
      </main>
    </div>
  );
}
