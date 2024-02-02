import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addcart } from "../counterSlice";
import axios from 'axios';
export default function Cart() {

      let [data, setdata] = useState(null);
      let dispach = useDispatch();
      let array = [];
      let newarray = useSelector((state) => state.counter.cartdata)
      useEffect(() => {
            array = [...newarray]
            setdata([])
            let z = []
            for (let i = 0; i < array.length; i++) {

                  axios.get(`https://dummyjson.com/products/${array[i]}`)
                        .then(function (response) {
                              z = [...z, response.data]
                              console.log(array[i])
                              setdata(z)
                        })
                        .catch(function (error) {
                              console.log(error);
                        })
            }
      }, [])

      return (
            data != null && <>
                  {
                        data.map((item, index) => {
                              return (
                                    <div className="box" key={index}>
                                          <div className="row m-0 p-0">
                                                <div className="col-6 m-0 p-0">
                                                      <div className="img">
                                                            <img src={item.thumbnail} alt="" width={'100%'} height={'100%'} />
                                                      </div>
                                                </div>
                                                <div className="col-6 m-0">
                                                      <div className="details">
                                                            <div className="tital">{item.title}</div>
                                                            <div className='description'>{item.description}</div>
                                                            <div className='stock'>
                                                                  <div className="rating" style={{ marginRight: '10px' }}>{item.rating} <FaStar style={{ marginLeft: '5px' }} /></div>
                                                                  (<span>{item.stock}</span>)</div>
                                                            <div>
                                                                  <div className="prise"><FaRupeeSign />{item.price}</div>
                                                                  <div className="discount"><FaRupeeSign />{item.discountPercentage}</div>
                                                                  <div className="off">{item.discountPercentage}% off</div>
                                                            </div>
                                                            <div className="brand"><span style={{ fontWeight: '700' }}>Brand : </span> {item.brand}</div>
                                                            <div className="category"><span style={{ fontWeight: '700' }}>Category :</span> {item.category}</div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              )
                        })
                  }
            </>
      )
}
