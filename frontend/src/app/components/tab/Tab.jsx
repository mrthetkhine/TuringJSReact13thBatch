import styles from "./Tab.module.css";
import {useState} from "react";
import classNames from 'classnames';

function TabHeader({title,onClick,active}) {
    console.log('tabHeader ',styles['tab-header']);
    const tabClass = classNames({
        [styles["tab-header"]]:true,
        [styles["active-tab"]]:active,
    });
    return <div
        className={tabClass}
        onClick={onClick}
    >
        {title}
    </div>;
}

export default function Tab({titles,children})
{
    const [activeTab, setActiveTab] = useState(0);
    return (<div>
        {
            titles.map((title,index)=><TabHeader key={index}
                                                 title={title}
                                                 onClick={() => setActiveTab(index)}
                                                 active={activeTab === index}
                                                 />)
        }
        <div className={styles['tab-content']}>
            {
                children[activeTab]
            }
        </div>
    </div>)
}