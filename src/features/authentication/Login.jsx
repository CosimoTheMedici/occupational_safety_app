import React, { useEffect, useState } from "react";
import { images } from "../../assets/img";
import MainLayoutNoAuth from "../../layouts/MainLayoutNoAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import jwt_decode from "jwt-decode";


const Login = () => {

  const { auth,setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const from = location.state?.from?.pathname || "/home";

    useEffect(() => {
      if(auth && auth.accessToken) navigate(from, {replace:true})
    
      
    }, [])
    

    let [credentials, setCredentials] = useState({
        email: '',
        password: ''
      })
      
      const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
      
        setCredentials((prevalue) => {
          return {
            ...prevalue,                
            [name]: value
          }
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            email : credentials.email,
            password :credentials.password
        };
        console.log("payload",payload)
        try {

          const { data: fetchLoginResponses, status } = await  axiosPrivate.post(`/api/v1/auth/users/login`, payload,
          {
            withCredentials: true,
          }
          );
          if(fetchLoginResponses.message==="login successfully"){
            var decoded = jwt_decode(fetchLoginResponses.accessToken);
            console.log("decoded",decoded)
            const email = decoded.email
            let cat = decoded.result.user_category.split(",");
             cat = cat.map(Number);
             console.log("cat",cat)

            setAuth({user:email,roles:cat,accessToken:fetchLoginResponses.accessToken})
            

            console.log("auth",cat)
            let value = cat[1]
            // if(value===2000){
            //    localStorage.setItem("token", 'tenant');
            //   navigate('/home/tenant', {replace:true});

            // }
            // if(value===3000){
            //    localStorage.setItem("token",'agent' );
            //   navigate('/home/agent', {replace:true});

            // }
            // if(value===4000){
            //    localStorage.setItem("token",'owner' );
            //   navigate('/home/owner', {replace:true});

            // }
            if(value===5000){
               localStorage.setItem("token",'agent_owner ');
              navigate('/home', {replace:true});

            }

            
            //navigate(from, {replace:true});
            
          }
          
          
        } catch (error) {

          console.log(error)
          
        }
        // hashPassword
        // 1email.jnjc@gmail.com

        // setAuth({user:"cosmas", payload, roles:[2001,2002],accessToken:"accessTokenrefu"})
        // console.log(auth);
        //navigate(from, {replace:true});

        
        // const loginResponse = await loginUser(payload)
        // const {status,data, message} = loginResponse
        // if (status ===200 && message === "authorised")loginUserData(data) 

       


      }
      const loginUserData = (data) => {
        let accessToken =  data.access_token;
        let refreshToken = data.refresh_token;
        localStorage.set("accessToken",data.access_token)
        localStorage.set("refreshToken",data.refresh_token)

      }

  return (
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <img class="img-fluid logo-dark mb-2" src={images.logo} alt="Logo" />
          <div class="loginbox">
            <div class="login-right">
              <div class="login-right-wrap">
                <h1>Login</h1>
                <p class="account-subtitle">Access to our dashboard</p>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label class="form-control-label">Email Address</label>
                    <input type="email" name= "email"  id="email"  onChange={handleChange} class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Password</label>
                    <div class="pass-group">
                      <input type="password" id="password" name="password"  onChange={handleChange} class="form-control pass-input" />
                      <span class="fas fa-eye toggle-password"></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-6">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="cb1"
                          />
                          <label class="custom-control-label" for="cb1">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="col-6 text-end">
                        <a class="forgot-link" href="/forgot/password">
                          Forgot Password ?
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn btn-lg btn-block btn-primary w-100"
                    type="submit"
                  >
                    Login
                  </button>
                  <div class="login-or">
                    <span class="or-line"></span>
                    <span class="span-or">or</span>
                  </div>

                  <div class="social-login mb-3">
                    <span>Login with</span>
                    <a href="#" class="facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="google">
                      <i class="fab fa-google"></i>
                    </a>
                  </div>

                  <div class="text-center dont-have">
                    Don't have an account yet?{" "}
                    <a href="/register">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutNoAuth(Login);
