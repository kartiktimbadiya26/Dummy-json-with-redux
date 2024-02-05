import React from "react";
import { useDispatch } from "react-redux";
import { allproduct } from "../counterSlice";
import axios from "axios";
export default function Mainleftpart(props) {

    let dispach = useDispatch();
    const newdata = (z) => {
        z = `https://dummyjson.com/products/category?limit=0'/${z}`;
        axios.get(z)
            .then(function (response) {
                dispach(allproduct(response.data.products))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <div className="col-3 leftpart">
                <ul>
                    {
                        props.data.map((item, index) => {
                            return (
                                <li key={index} onClick={() => { newdata(item) }}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
// changedata({ item })