import { useDispatch, useSelector } from "react-redux";
import { USERADD } from "../store/actions";

const Login = () => {

    const users = useSelector(store => store.lr.login);
    const dispatch = useDispatch();

    const eachUser = users.map((user, index) => {
        return (
            <option key={index}>{user}</option>
        )
    });

    const loginHandler = (e) => {
        const text = (e.target.options[e.target.selectedIndex].innerHTML);
        console.log(text);
        dispatch({type: USERADD, payLoad: text});
    }
    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Login Component</h4>
                    <hr />
                    <select onChange={loginHandler} className="form-select" aria-label="default select example">
                        {eachUser}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Login;