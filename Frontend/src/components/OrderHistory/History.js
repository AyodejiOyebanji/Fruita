import React, {useContext, useReducer,useEffect} from 'react'
import { Helmet } from 'react-helmet-async';
import Loadingbox from '../LoadingBox/Loadingbox';
import MessageBox from '../MessageBox/MessageBox';
import { Store } from '../Store/Store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../Error/Error';

const reducer = (state, action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
            return {...state, loading:true};
            case "FETCH_SUCCESS":
                return {...state, orders:action.payload, loading:false};
                case "FETCH_FAIL":
                    return {...state, loading:false, error:action.payload};
                    default:
                        return state
    }
}

function history() {
    const {state}= useContext(Store)
    const {userInfo}= state
    const navigate = useNavigate()

    const [{loading, error,orders}, dispatch]= useReducer(reducer,{
        loading:true,
        error:'',

    })
    useEffect(() => {
      const fetchData =async()=>{
          dispatch({type:"FETCH_REQUEST"});
          try{
              const {data}= await axios.get(
                `/api/orders/history`, 
                {headers:{Authorization:`Bearer ${userInfo.token}`}}
              );
              
              dispatch({type:"FETCH_SUCCESS", payload:data})
          }catch(error){
              dispatch({
                  type:"FETCH_FAIL", payload:getError(error)

              })
          }

      };
      fetchData()
      console.log(userInfo);
      
    }, [userInfo])
    
  return (
    <div>
        <Helmet>
            My History
        </Helmet>
            <h1>My History</h1>

            {
                loading? (<Loadingbox></Loadingbox>): error ?(<MessageBox variant="danger">{error}</MessageBox>):
                (
                    <table className="table">
                        <thead>
                        <tr>
                        
                            <th  scope="col">DATE</th>
                            <th  scope="col">TOTAL</th>
                            <th  scope="col">PAID</th>
                            <th  scope="col">DELIVERED</th>
                            <th  scope="col">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                            {orders.map((order)=>(
                                <tr key={order._id}>
                                  
                                    <td>{order.createdAt.substring(0,10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid? order.paidAt.substring(0,10):"NO"}</td>
                                    <td>
                                        {order.isDelivered ?order.deliveredAt.substring(0,10):"NO"}
                                    </td>
                                    <td>
                                        <button className="btn" onClick={()=>{navigate(`/order/${order._id}`)}}>
                                            Details

                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>
                )
            }
    </div>
  )
}

export default history

