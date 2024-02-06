import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { removecart, changeqtep, changeqtem } from '../counterSlice';
export default function Cart() {

      let dispach = useDispatch();
      let newarray = useSelector((state) => state.counter.cartdata);
      let total = useSelector((state) => state.counter.total)
      const removedata = (item) => {
            console.log(item)
            let z = newarray.filter((data, index) => {
                  return (index !== item);
            })
            let y = total - (newarray[item].qte * newarray[item].price)
            dispach(removecart({ z, y }));
      }
      return (
            <>
                  <table className="table table-striped">
                        <thead>
                              <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Detail</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Prise</th>
                                    <th scope="col">Qte</th>
                                    <th scope="col">Total Prise</th>
                                    <th scope="col">Remove</th>
                              </tr>
                        </thead>
                        <tbody>

                              {
                                    newarray.map((item, index) => {
                                          return (
                                                <tr key={index}>
                                                      <td>{item.id}</td>
                                                      <td>{item.title}</td>
                                                      <td>{item.description}</td>
                                                      <td>
                                                            <img src={item.thumbnail} alt="" height={"100px"} />
                                                      </td>
                                                      <td>{item.price}</td>
                                                      <td>
                                                            <button onClick={() => { dispach(changeqtem(index)) }}><FaMinus /></button>
                                                            {item.qte}
                                                            <button onClick={() => { dispach(changeqtep(index)) }}><FaPlus /></button>
                                                      </td>
                                                      <td>{item.qte * item.price}</td>
                                                      <td><button className='ms-5' onClick={() => { removedata(index) }}>Remove</button></td>
                                                </tr>
                                          )
                                    })
                              }
                        </tbody>
                  </table >
                  < span > Final All Prise </ span> <span>{total}</span>
            </>
      )
}
