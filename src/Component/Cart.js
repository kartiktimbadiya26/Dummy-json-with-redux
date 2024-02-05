import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removecart } from '../counterSlice';
export default function Cart() {

      let dispach = useDispatch();
      let newarray = useSelector((state) => state.counter.cartdata);
      let total = useSelector((state) => state.counter.total)
      const removedata = (item) => {
            console.log(item)
            let z = newarray.filter((data, index) => {
                  return (index !== item);
            })
            let y = total - (newarray[item].item * newarray[item].price)
            dispach(removecart({ z, y }));
      }
      return (
            <>
                  {
                        newarray.map((item, index) => {
                              return (
                                    <div className="box m-3" key={index}>
                                          <div className="row m-0 p-0">
                                                <div className="col-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                                      <div className="img cart-img text-center">
                                                            <img src={item.thumbnail} alt="" height={'100%'} />
                                                      </div>
                                                </div>
                                                <div className="col-9 m-0">
                                                      <div className="details">
                                                            <div className="tital">{item.title}</div>
                                                            <div className='description'>{item.description}</div>
                                                            <div className='stock'>
                                                                  <div className="rating" style={{ marginRight: '10px' }}>{item.rating} <FaStar style={{ marginLeft: '5px' }} /></div>
                                                                  (<span>{item.stock}</span>)</div>
                                                            <div>
                                                                  <div className="prise"><span style={{ fontWeight: '700' }}>Prise : </span><FaRupeeSign />{item.price}</div>
                                                                  {/* <div className="discount"><FaRupeeSign />{item.discountPercentage}</div> */}
                                                                  <div className="off">{item.discountPercentage}% off</div>
                                                            </div>
                                                            <div className="brand"><span style={{ fontWeight: '700' }}>Brand : </span> {item.brand}</div>
                                                            <div className="category"><span style={{ fontWeight: '700' }}>Category :</span> {item.category}</div>
                                                            <div className=''><span style={{ fontWeight: '700' }}>Items : </span><span>{item.item}</span></div>
                                                            <div className='me-5'><span style={{ fontWeight: '700' }}>Final Prise : </span><span>{item.item * item.price}</span><button className='ms-5' onClick={() => { removedata(index) }}>Remove</button></div>
                                                      </div>
                                                </div>
                                          </div>

                                    </div>
                              )
                        })
                  }
                  < span > Final All Prise </ span> <span>{total}</span>
            </>
      )
}
