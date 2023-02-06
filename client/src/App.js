import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu, message, Badge, Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { sumBy } from 'lodash'
import logo from "./assets/images/logo.png";
import Auth from "./Auth";
import ChangePassword from "./containers/ChangePassword";
import ForgotPassord from "./containers/ForgotPassord";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ResetPassword from "./containers/ResetPassword";
import useCustomers from "./_actions/customerActions";
import Cart from './containers/Cart';
import Categories from './components/Categories';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Teams';
import Services from './components/Services';
import Foot from './components/Footer';
import banner1 from './images/img-1.jpg';
import banner2 from "./images/img-2.jpg";
import banner3 from "./images/img-3.jpg";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const contentStyle = {
  margin: 0,
  height: '600px',
  width: "100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  let auth = useSelector((state) => state.customer.auth);
  const cartItems = useSelector(state => state.cart.cartItems?.cartDetails);
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

  const renderImages = () => {
    return (
      <Carousel autoplay>
        <div>
          <img src={banner1} style={contentStyle} />
        </div>
        <div>
          <img src={banner2} style={contentStyle} />
        </div>
        <div>
          <img src={banner3} style={contentStyle} />
        </div>

      </Carousel>
    )
  }
  const renderHeader = () => {
    const fullName = `${auth?.data?.firstName} ${auth?.data?.lastName}`;
    const itemCount = sumBy(cartItems, (item) => item?.quantity);
    return (
      <>

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
            <>
              <Menu.Item key='cart'>
                <Link to='/cart'>
                  <Badge count={itemCount} offset={[8, 0]}>
                    <ShoppingCartOutlined style={{ fontSize: 20 }} />
                  </Badge>
                </Link>
              </Menu.Item>

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
            </>
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
      {renderImages()}
      </>
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
                path="/cart"
                element={
                  <Auth authRoute={true} redirectTo="/login">
                    <Cart />
                  </Auth>
                }></Route>
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
      <Categories />
      <About />
      <Gallery />
      <Team />
      <Services />
      <Foot />
    </BrowserRouter>
  );
}

export default App;
