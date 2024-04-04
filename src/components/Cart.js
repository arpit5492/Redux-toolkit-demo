import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../store/actions";

const Cart = () => {
    const prods = useSelector(store => store.pr.cart);
    const loginDet = useSelector(store => store.lr.loginDet);
    // console.log(prods);

    const dispatch = useDispatch();

    const prodClick = (index, price) => {
        // console.log(index);
        dispatch({type: REMOVE, payLoad: {index, price}});
    }
    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Cart Component - {loginDet}</h4>
                    <hr />
                    {prods.map((prod, index) => {
                        return (
                            <li key={index} onClick={() => prodClick(index, prod.price)}>
                                {prod.text}
                            </li>
                        )  
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart;