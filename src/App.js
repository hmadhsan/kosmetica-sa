import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo.png";
import Auth from "./Auth";
import ChangePassword from "./containers/ChangePassword";
import ForgotPassord from "./containers/ForgotPassord";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ResetPassword from "./containers/ResetPassword";
import useCustomers from "./_actions/customerActions";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function App() {
  let auth = useSelector((state) => state.customer.auth);
  const { customerLogout } = useCustomers();
  const dispatch = useDispatch();

  const handleLogout = ({ key }) => {
    if (key === "logout") {
      dispatch(customerLogout()).then((res) => {
        if (res.payload.status) {
          localStorage.removeItem("customerToken");
          message.success(res.payload.message);
        }
      });
    }
  };
  const renderHeader = () => {
    const fullName = `${auth?.data?.firstName} ${auth?.data?.lastName}`;
    return (
      <Header className="app-header">
        <img src={logo} className="app-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["login"]}
          onClick={handleLogout}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          {auth?.status ? (
            <SubMenu
              key="account"
              icon={<UserOutlined />}
              title={`Hi ${fullName}`}
            >
              <Menu.Item key="changePassword">
                <Link to="changePassword">Change Password</Link>
              </Menu.Item>
              <Menu.Item key="logout">Logout</Menu.Item>
            </SubMenu>
          ) : (
            <>
              <Menu.Item key="login">
                <Link to="login">Login</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="register">Register</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        {renderHeader()}
        <Content className="app-content">
          <div className="app-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Auth>
                    <Home />
                  </Auth>
                }
              />
              <Route path="/forgotPassword" element={<ForgotPassord />} />
              <Route path="/resetPassword/:token" element={<ResetPassword />} />
              <Route
                path="/changePassword"
                element={
                  <Auth authRoute={true} redirectTo="/login">
                    <ChangePassword />
                  </Auth>
                }
              />
              <Route
                path="/login"
                element={
                  <Auth redirectTo="/">
                    <Login />
                  </Auth>
                }
              />
              <Route
                path="/register"
                element={
                  <Auth redirectTo="/">
                    <Register />
                  </Auth>
                }
              />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Dev It Media @2022</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
