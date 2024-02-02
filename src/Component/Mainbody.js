import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Mainrightpart from './Mainrightpart'
import Mainleftpart from './Mainleftpart'
import Loder from './Loder';
import { useSelector, useDispatch } from 'react-redux';
import { allcategory, allproduct } from '../counterSlice';
export default function Mainbody(props) {

    let category = useSelector((state) => state.counter.allcatdata)
    let product = useSelector((state) => state.counter.allprodata)
    let dispach = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                dispach(allcategory(response.data))
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('https://dummyjson.com/products?limit=0')
            .then(function (response) {
                dispach(allproduct(response.data.products))
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
            {
                // bool ? <Loder /> :
                <div className="container mainbody">
                    <div className="row">
                        <Mainleftpart data={category} />
                        <Mainrightpart data={product} />
                    </div>
                </div>
            }
        </>
    )
}