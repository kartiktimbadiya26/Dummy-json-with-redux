import React, { useState } from 'react'
import { IoIosCart } from "react-icons/io";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { allproduct } from "../counterSlice";
import { Link } from 'react-router-dom';
export default function Header() {
    let len = useSelector((state) => state.counter.cartdata.length);
    let dispach = useDispatch();
    return (
        <>
            <div className="main-header">
                <div className="part1">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" width={'100%'} onClick={() => {
                        axios.get('https://dummyjson.com/products?limit=0')
                            .then(function (response) {
                                dispach(allproduct(response.data.products))
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    }} />
                </div>
                <div className="part2">
                    <input type="text" onChange={(e) => {
                        let z = `https://dummyjson.com/products/search?q=${e.target.value}`;
                        axios.get(z)
                            .then(function (response) {
                                console.log(z)
                                console.log(response.data)
                                dispach(allproduct(response.data.products))
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    }} />
                </div>
                <div className="part3">
                    <Link to='/cart'>
                        <IoIosCart />
                        <span>Cart</span>
                        <div className="circal">{len}</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
