import { Form, Input, message } from "antd";
import "./style.scss";
import { request } from "../../../server";
import Cookies from "js-cookie";
import { TOKEN, USER } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/slices/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (values) => {
    try {
      const {
        data: { token, user },
      } = await request.post("/auth/login", values);
      Cookies.set(TOKEN, token);
      localStorage.setItem(USER, JSON.stringify(user));
      dispatch(setAuth(user));
      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/")
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  return (
    <section className="login">
      <div className="container">
        <h2 className="login__title">Sign In</h2>
        <Form
          className="login-form"
          name="login"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={login}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            className="btn-container"
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <button className="submit-btn" type="submit">
              Sign In
            </button>
          </Form.Item>
          <div className="loginsub">
            <div className="login__subinfo">
              <p>No account? </p>
              <Link to="/register">Sign Up</Link>
            </div>
            <div className="login__subinfo">
              <p>Forgot Password ?</p>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;