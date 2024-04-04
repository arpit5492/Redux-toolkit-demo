import { useDispatch, useSelector } from "react-redux"
import { ADD } from "../store/actions";

const Purchase = () => {
    const prods = useSelector(store => store.pr.products);
    const dispatch = useDispatch();
    const loginDet = useSelector(store => store.lr.loginDet);
    
    const prodHandler = (e) => {
        const text = (e.target.options[e.target.selectedIndex].innerHTML);
        const price = parseInt(e.target.value);
        // console.log(text);
        // console.log(typeof(price));
        const prodObj = {text, price};
        // console.log(prodObj);
        dispatch({type: ADD, payLoad: prodObj});
    }

    const prodItems = prods.map((prod, index) => {
        return (
            <option value={prod.price} key={index}>
                {prod.pName} - ${prod.price}
            </option>
        )
    });

    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Purchase Component - {loginDet}</h4>
                    <hr />
                    <select onChange={prodHandler} className="form-select" aria-label="default select example">
                        {prodItems}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Purchase;