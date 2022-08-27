import React, {useState,useContext,  useReducer } from 'react'
import "./customerAccount.css";
import { BsPencil  } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import { Store } from '../Store/Store';
import { Helmet } from 'react-helmet-async';
import { useSnackbar } from "notistack";
import { getError } from './../Error/Error';
import axios from 'axios';

const reducer = (state , action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return {...state, loadingUpdate:true};
      case "UPDATE_SUCCESS":
        return {...state, loadingUpdate:false};
        case "UPDATE_FAIL":
          return {...state, loadingUpdate:false}
    default:
      return state
  }
}

function CustomerAccount() {
  const { enqueueSnackbar } = useSnackbar();
  const {state, dispatch:ctxDispatch}= useContext(Store);
  const {userInfo}= state;
  const [newName, setNewName] = useState(userInfo.name)
  const [newEmail, setNewEmail] = useState(userInfo.email)
   const [password, setPassword] = useState('')
   const [confirmPassword, setNewconfirmPassword] = useState("")
   const [ dispatch]=useReducer(reducer,{loadingUpdate:false,

   })
const update= async ()=>{
  
  try {
      const {data}= await axios.put("/api/users/profile",{newName,newEmail,password},{headers:{Authorization:`Bearer ${userInfo.token}`}})
      dispatch({type:"UPDATE_SUCCESS"})
      ctxDispatch({type:"USER_SIGNIN", payload:data})
      localStorage.setItem("userInfo", JSON.stringify(data))
      enqueueSnackbar(`Updated`, { variant: 'success' });
    
  } catch (err) {
    dispatch({
      type:"FAIL_FETCH",

    });
    enqueueSnackbar(getError(err), { variant: 'error' });


    
  }
  


}
  


    
    return (
        <div>
          <Helmet>
            <title>Profile</title>
            </Helmet>
               <div className="container">
            <div className="row">
                <div className='col-12 '>
                    <h1 className=''>Details Overview</h1>
                    <hr/>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-12 col-md-12 col-lg-5  col-xl-5 col-xxl-5 shadow m-lg-2 m-xl-2 m-xxl-2' >
                            <div className="">
                            <span className="accountdetailsText">Account Details</span>
                            <span className="float-end">
                       
                            {/* Button trigger modal  */}
<button type="button" class=" modalBtn shadow  " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<BsPencil className="pencil" size="3vh"/>
</button>

 {/* Modal  */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Edit Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <TextField id="outlined-basic" label="Fullname" variant="outlined"  className="w-100 mt-2" value={newName} onChange={(e)=>setNewName(e.target.value)} required/>
      <TextField id="outlined-basic" label="Email" variant="outlined" className="w-100 mt-2" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} required/>
      <TextField id="outlined-basic" label="Password" variant="outlined"  className="w-100 mt-2" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined"  className="w-100 mt-2" value={confirmPassword} onChange={(e)=>setNewconfirmPassword(e.target.value)} required/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>update()}>Update</button>
      </div>
    </div>
  </div>
</div>
{/* modal ends here */}


                    </span>
                        <hr />
                            </div>
                            <div className="">
                           <p className="detail">{userInfo.name}</p>
                           <p className="detail">{userInfo.email}</p>

                           <p className="text-success">Change Password</p>

                            </div>

                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-5 shadow m-lg-2 m-xl-2 m-xxl-2'>
                        <div className="">
                            <span className="accountdetailsText">Address </span>
                        <span className="float-end">
                       
                            {/* Button trigger modal  */}
<button type="button" class=" modalBtn shadow  " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<BsPencil className="pencil" size="3vh"/>
</button>

 {/* Modal  */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
{/* modal ends here */}
                           </span>
                        <hr />
                            </div>
                            <div className="">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquam ipsum, laboriosam dicta, excepturi cupiditate suscipit expedita doloremque voluptatibus consequuntur officia!

                          
                          
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

            
        </div>
    )
}

export default CustomerAccount
