import {useState} from "react";
import './filterable-product.css';
import classNames from "classnames";

const initData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
function SearchBar({onFilter})
{
    const [formState, setFormState] = useState({
        item:'',
        inStock: false,
    })
    const onChangeHandler =(e)=>{
        setFormState({
            ...formState,
            item:e.target.value,
        });
        onFilter({
            ...formState,
            item:e.target.value,
        })
    }
    const labelOnChangeHandler =(e)=>{
        setFormState({
            ...formState,
            inStock:e.target.checked,
        });
        onFilter({
            ...formState,
            inStock:e.target.checked,
        })
    }
    console.log('formState', formState);
    return(<div>
        <div>
            <input type={"text"} value={formState.item}
                            onChange={onChangeHandler}/>
        </div>
        <div>
            <input type={"checkbox"} value={formState.inStock}
                        onChange={labelOnChangeHandler}/>
            <label>Only show product in stock</label>
        </div>

    </div>);
}
function ProductRow({item})
{
    const productClass = classNames({
        'product-item':true,
        'out-of-stock': !item.stocked,
    });
    return(<div className={"product-row"}>
        <div className={productClass}>{item.name}</div>
        <div className={'product-price'}>{item.price}</div>
    </div>);
}

function ProductCategoryRow({items})
{
    console.log('items ', items);
    let categoryName= items[0].category;
    return(<div>
        <h2 className={'product-category'}>{categoryName}</h2>
        {
            items.map((item,index)=><ProductRow key={index} item={item}/>)
        }
    </div>);
}
function groupByCategory(items)
{
    let group = {};
    for(const item of items)
    {
        if(group[item.category]){
            group[item.category].push(item);
        }
        else
        {
            group[item.category]= [item];
        }
    }
    return group;
}
function ProductTable({items})
{
    const group = groupByCategory(items);
    const categories = Object.keys(group);
    console.log('Group ',group);
    console.log('Categories ',categories);
    return(<div>
        {
            categories.map((category,index)=><ProductCategoryRow
                                                items={group[category]}
                                                key={index}/>)
        }

    </div>);
}
function filterItemsByName(items,name)
{
    console.log('filterItemsByName ',name ,' items ',items);
    if(name=='')
    {
        console.log('Name empty ',name);
        return [...items];
    }
    return items.filter(item=>item.name.includes(name));
}
function filterItemByStock(items,stocked)
{
    console.log('filterItemByStock ',items , 'stocked ',stocked );
    if(stocked){
        return items.filter(item=>item.stocked );
    }
    else
    {
        return [...items];
    }

}
export default function FilterableProductDemo(){
    const [items,setItems] = useState(initData);
    const onFilter =(formState)=>{

        console.log('FilterableProductDemo filter form State', formState);
        let newItems =filterItemByStock(initData,formState.inStock);
        newItems = filterItemsByName(newItems,formState.item);
        console.log('Filter  ',newItems);
        setItems(newItems);
    }
    return(<div>
        <SearchBar onFilter={onFilter}/>
        <ProductTable items={items} />
    </div>)
}