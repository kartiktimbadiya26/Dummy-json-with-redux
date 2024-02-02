import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addcart } from "../counterSlice";
export default function Mainrightpart(props) {

    let dispach = useDispatch();
    return (
        <>
            <div className="col-9 rightpart">
                {
                    props.data.map((item, index) => {
                        return (
                            <div className="box" key={index}>
                                <Link to={`/${item.id}`}>
                                    <div className="img">
                                        <img src={item.thumbnail} alt="" width={'100%'} height={'100%'} />
                                    </div>
                                </Link>
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
                                    <button className="" onClick={() => { dispach(addcart(item.id)) }}>add...</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
