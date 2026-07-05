
/*
config=[
    {
        name: 'Home',
        path:'/',
        component:Home
    },
    {
        name: 'Movies',
        path:'movies',
        component:Movie
    },
]
* */
import {useState} from "react";

export default function Router({config}) {
    let [activeIndex,setActiveIndex] = useState(0);

    const onClickHandler = (event,index)=>{
        event.preventDefault();
        setActiveIndex(index);
        console.log('Active index ',index);
    }
    return(<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/*<li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>*/}
                        {
                            config.map((item, index) => <li className="nav-item" key={index}
                                                            onClick={(event)=>onClickHandler(event,index)} >
                                <a className="nav-link"  href={item.path}>
                                    {item.name}
                                </a>
                            </li>)
                        }
                    </ul>

                </div>
            </div>
        </nav>
        <div>
            {
                config[activeIndex].component
            }
        </div>
    </div>);
}