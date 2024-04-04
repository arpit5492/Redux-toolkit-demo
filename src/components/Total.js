import { useSelector } from "react-redux";

const Total = () => {
    const total = useSelector(store => store.pr.total);
    const loginDet = useSelector(store => store.lr.loginDet);
    return (
        <div className="col-sm-4">
            <div className="card mt-4" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Total price component - {loginDet}</h4>
                    <hr />
                    <h4>Total: ${total}</h4>
                </div>
            </div>
        </div>
    )
}

export default Total;