// import { Button, Form, Input } from "antd";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { hideLoading, showLoading } from "../redux/alertsSlice";

// function Register() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/user/register", values);
//       dispatch(hideLoading());
//       if (response.data.success) {
//         toast.success(response.data.message);
//         navigate("/login");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="authentication">
//       <div className="authentication-form card p-3">
//         <h1 className="card-title">Sign up</h1>
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Name" name="name">
//             <Input placeholder="Name" />
//           </Form.Item>
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input placeholder="Password" type="password" />
//           </Form.Item>

//           <Button
//             className="primary-button my-2 full-width-button"
//             htmlType="submit"
//           >
//             SIGNUP
//           </Button>

//           <Link to="/login" className="anchor mt-2">
//             CLICK HERE TO SIGNIN
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Register;

//login 1

import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <Form onFinish={onFinish}>
        <h3>Signup</h3>
        <Form.Item label="Name" name="name">
        <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
        <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Token" name="password" >
        <Input placeholder="Password" type="password" />
        </Form.Item> 
        <Button
          className="primary-button my-2 full-width-button"
          htmlType="submit">
            SIGNUP
        </Button>
        <Link to="/login" className="anchor mt-2">
          CLICK HERE TO SIGNIN
        </Link>
      </Form>

      <style>{`
        *,
        *:before,
        *:after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #080710;
        }

        .background {
          width: 430px;
          height: 520px;
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
        }

        .background .shape {
          height: 200px;
          width: 200px;
          position: absolute;
          border-radius: 50%;
        }

        .shape:first-child {
          background: linear-gradient(#1845ad, #23a2f6);
          left: -80px;
          top: -80px;
        }

        .shape:last-child {
          background: linear-gradient(to right, #ff512f, #f09819);
          right: -30px;
          bottom: -80px;
        }

        form {
          height: 420px;
          width: 430px;
          background-color: rgba(255, 255, 255, 0.13);
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          padding: 50px 35px;
        }

        form * {
          font-family: 'Poppins', sans-serif;
          color: #ffff00;
          letter-spacing: 0.5px;
          outline: none;
          border: none;
        }

        form h3 {
          font-size: 32px;
          font-weight: 500;
          line-height: 42px;
          text-align: center;
        }

        label {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          font-weight: 500;
        }

        input {
          display: block;
          height: 50px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.07);
          border-radius: 3px;
          padding: 0 10px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 300;
        }

        ::placeholder {
          color: #e5e5e5;
        }

        button {
          margin-top: 50px;
          width: 100%;
          background-color: #ffffff;
          color: #080710;
          padding: 15px 0;
          font-size: 18px;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Register;

