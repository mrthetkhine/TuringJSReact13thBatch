import Tab from "@/app/components/tab/Tab";

export default function TabDemo() {


    return (<div>
        <Tab titles={['Page 1','Page 2','Page 3']}>
            <div>
                Page 1
            </div>
            <div>
                Page 2
            </div>
            <div>
                Page 3
            </div>
        </Tab>
    </div>);
}