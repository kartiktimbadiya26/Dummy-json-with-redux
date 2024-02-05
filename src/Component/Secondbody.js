import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addcart } from "../counterSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";
import axios from 'axios';
export default function Secondbody() {
      let dispach = useDispatch();

      let [im, setim] = useState([])
      let [data, setdata] = useState(null);
      let { id } = useParams();
      let [item, setitem] = useState(1);
      useEffect(() => {
            axios.get(`https://dummyjson.com/products/${id}`)
                  .then(function (response) {
                        setdata(response.data);
                        setim(response.data.thumbnail)
                  })
                  .catch(function (error) {
                        console.log(error);
                  })
      }, [])
      const adddata = (t_id) => {
            axios.get(`https://dummyjson.com/products/${t_id}`)
                  .then(function (response) {
                        let data = response.data;
                        data.item = item;
                        dispach(addcart(data));
                  })
                  .catch(function (error) {
                        console.log(error);
                  })
      }
      return (
            data != null && <>
                  <div className="second-main">
                        <div className="container">
                              <div className="row">
                                    <div className="col-1">
                                          {
                                                data.images.map((ele, ind) => {
                                                      return (
                                                            <img src={ele} key={ind} width={"100%"} style={{ margin: '10px 0' }} onClick={() => { setim(ele) }} />
                                                      )
                                                })
                                          }
                                    </div>
                                    <div className="col-4"><img src={im} alt="" width={'100%'} /></div>
                                    <div className="col-7">
                                          <div className="details">
                                                <div className="tital">{data.title}</div>
                                                <div className='description'>{data.description}</div>
                                                <div className='stock'>
                                                      <div className="rating" style={{ marginRight: '10px' }}>{data.rating} <FaStar style={{ marginLeft: '5px' }} /></div>
                                                      (<span>{data.stock}</span>)</div>
                                                <div>
                                                      <div className="prise"><FaRupeeSign />{data.price}</div>
                                                      <div className="discount"><FaRupeeSign />{data.discountPercentage}</div>
                                                      <div className="off">{data.discountPercentage}% off</div>
                                                </div>
                                                <div className="brand"><span style={{ fontWeight: '700' }}>Brand : </span> {data.brand}</div>
                                                <div className="category"><span style={{ fontWeight: '700' }}>Category :</span> {data.category}</div>
                                                <div className="">
                                                      <button onClick={() => { setitem(item - 1) }}><FaMinus /></button>
                                                      <span className="value">{item}</span>
                                                      <button onClick={() => { setitem(item + 1) }}><FaPlus /></button>
                                                </div>
                                                <button className="" onClick={() => { adddata(id) }}>add...</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
