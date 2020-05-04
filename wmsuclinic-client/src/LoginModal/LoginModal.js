import React, { Fragment,useState } from 'react';
import {toast} from "react-toastify";

import welcome from "../assets/img/welcome.png";
import female from "../assets/img/female.png";
import style from "../assets/css/Homepage.module.css";

const LoginModal = ( {setAuth} ) => {

      const  [inputs, setInputs] = useState({
          username : "",
          password : ""
      })

      const {username, password } = inputs;

      const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});

    };
    const onSubmitForm = async(e) => {
      e.preventDefault();
      try {
            const body = {username,password} 
          const response = await fetch("http://localhost:5000/auth/login", {
              method : "POST",
              headers : {"Content-Type" : "application/json"},
              body : JSON.stringify(body)
          });
            const parseRes = await response.json();
          
          if(parseRes.token){
            localStorage.setItem('token', parseRes.token);
            setAuth(true);
            toast.success("Login Succesfully");
          } else{ 
            setAuth(false);
            toast.error(parseRes);
          }
      } catch (err) {
        console.error(err.message);
      }
    }
  return (
      <Fragment>              
                <form onSubmit={onSubmitForm}>
                  <input 
                  type="text" 
                  name="username" 
                  className="form-control my-3" 
                  placeholder="username"
                  value= {username}
                  onChange={e => onChange(e)}
                  />
                  <input 
                    type="password" 
                    name="password" 
                    className="form-control my-3" 
                    placeholder="password"
                    value={password}
                    onChange={e => onChange(e)}
                  />
                  <button className="btn btn-success">Login</button>
                </form>   
      <div className="container text-center">
        <div className={style.wrapper} >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={style.img}>
                  <img className={style.featureImg} src={welcome} alt="welcome"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.loginContent}>
                  <form onSubmit={onSubmitForm}>
                      <img src={female} alt="logo"/>
                        <h2 className="title">Welcome</h2>
                        <div className={style.inputDiv + " " + style.one}>
                          <div className="i">
                            <i className="fas fa-user"></i>
                          </div>
                          <div className={style.div}>
                                  <h5>Username</h5>
                                  <input type="text" 
                                    name="username" 
                                    className={style.input + "form-control my-3"}
                                    value={username}
                                    onChange={e => onChange(e)}
                                  />
                        </div>
                          </div>
                          <div className={style.inputDiv + " " + style.pass}>
                            <div className="i">
                              <i className="fas fa-lock"></i>
                            </div>
                            <div className={style.div}>
                                    <h5>Password</h5>
                                  <input  type="password"
                                    name="password"
                                    className={style.input + "form-control my-3"}
                                    value={password}
                                    onChange={e => onChange(e)}
                                    />
                            </div>
                            </div>
                            <a href="_blank">Forgot Password?</a>
                            <input type="submit" className={style.btn} value="Login" />
                    </form>
                          </div>
                        </div>
              </div>
                     
            </div>
        </div>
      </div>               
        </Fragment>
      );
    };

export default LoginModal;
// class LoginModal extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: "",
//       password: "",
      
//     }

//   }


//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   }
 


//   onSubmitForm =  async e => {
//     e.preventDefault() 
//     try {

//         const body = {...this.state};

//         const response = await fetch("http://localhost:5000/auth/login", {
//             method: "POST",
//             headers: { "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(body)
//         }
//         );

//         const parseRes = await response.json();
//         localStorage.setItem("token", parseRes.token);
//         console.log(parseRes);
//         if (parseRes.jwtToken) {
//             localStorage.setItem("token", parseRes.jwtToken);
//            this.setAuth(true);
//             toast.success("Logged in Successfully");
//           } else {
//             this.setAuth(false);
//             toast.error(parseRes);
//           }
            
//     } catch (err) {
//         console.error(err.message);
        
//     }
// }
    
//     render() {
      
//   console.log(this.props.setAuth);
//       return (
          
//         <React.Fragment>
          
//             <Formik>  
//               <Form onSubmit= {this.onSubmitForm}>
//                 <FormGroup>
//                   <input type="text" name="username" className="form-control my-3"  placeholder="Username" value={this.state.username} onChange={this.handleChange} ></input>
//                 </FormGroup>
                  
//                 <FormGroup>
//                 <input type="password" name="password" className="form-control my-3" placeholder="password" value={this.state.password} onChange={this.handleChange} ></input>
//                 </FormGroup>
//                   <button className="btn btn-success btn-block"  >Submit</button>
                
//               </Form>
              
//               </Formik>    
//         </React.Fragment>
       
//       );
  
//     }
    
//   }
  
//   export default LoginModal;