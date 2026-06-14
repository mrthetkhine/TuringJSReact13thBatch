import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/app/components/HelloWorld";
import Profile from "@/app/components/Profile";
import ProfileGreet from "@/app/components/ProfileGreet";
import Demo from "@/app/components/Demo";
import Greeting from "@/app/components/Greeting";
export default function Home() {
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
        <Profile avatar='https://react.dev/images/docs/scientists/7vQD0fPs.jpg'
                name={"Leo"}/>
        <Greeting message={"Hello"}/>
        <Greeting message={"Hi"}/>
      </main>
    </div>
  );
}
