import React,{useState} from "react";
import { Route, Routes, useLocation} from 'react-router-dom';

import Sidebar from "./components/sidebar";
import SidebarLight from './components/sidebarLight'
import Switcher from "./components/switcher";
import Topnav from "./components/topnav";
import Footer from "./components/footer";
import SidebarColored from "./components/sidebarColored";

import Index from "./pages/index";
import IndexDark from "./pages/Layouts/index-dark";
import IndexRtl from "./pages/Layouts/index-rtl";
import IndexDarkRtl from "./pages/Layouts/index-dark-rtl";
import IndexSidebarLight from "./pages/Layouts/index-sidebar-light";
import IndexSidebarColored from "./pages/Layouts/index-sidebar-colored";
import Chat from "./pages/Apps/chat";
import Email from "./pages/Apps/email";
import Calendar from "./pages/Apps/calendar";
import Profile from "./pages/User-Profile/profile";
import ProfileBilling from "./pages/User-Profile/profile-billing";
import ProfilePayments from "./pages/User-Profile/profile-payment";
import ProfileSocial from "./pages/User-Profile/profile-social";
import ProfileNotification from "./pages/User-Profile/profile-notification";
import ProfileSetting from "./pages/User-Profile/profile-setting";
import Blogs from "./pages/Blog/blogs";
import BlogDetails from "./pages/Blog/blog-detail";
import Shop from "./pages/Ecommerce/shop";
import ShopItemDetails from "./pages/Ecommerce/shop-item-detail";
import ShopCart from "./pages/Ecommerce/shop-cart";
import Checkout from "./pages/Ecommerce/checkout";
import GalleryOne from "./pages/Gallery/gallery-one";
import Gallerytwo from "./pages/Gallery/gallery-two";
import Starter from "./pages/pages/starter";
import Faqs from "./pages/pages/faqs";
import Pricing from "./pages/pages/pricing";
import Team from "./pages/pages/team";
import Privacy from "./pages/pages/privacy";
import Terms from "./pages/pages/terms";
import UiComponents from "./pages/ui-components";
import EmailConfirmation from "./pages/Email-template/email-confirmation";
import PasswordReset from "./pages/Email-template/email-password-reset";
import EmailAlert from "./pages/Email-template/email-alert";
import EmailInvoice from "./pages/Email-template/email-invoices";
import InvoiceList from "./pages/invoice/invoice-list";
import InvoicePrivew from "./pages/invoice/invoice";
import AuthLogin from "./pages/Authentication/auth-login";
import Signup from "./pages/Authentication/auth-signup";
import AuthSignupSuccess from "./pages/Authentication/auth-signup-success";
import AuthResetPassword from "./pages/Authentication/auth-re-password";
import AuthLockScreen from "./pages/Authentication/auth-lock-screen";
import Comingsoon from "./pages/Miscellaneous/comingsoon";
import Maintenance from "./pages/Miscellaneous/maintenance";
import PageError from "./pages/Miscellaneous/error";
import PageThankyou from "./pages/Miscellaneous/thankyou";
import IndexCrypto from "./pages/index-crypto";

import Dashboard from "./pages/Ekored/dashboard";


function App() {
  const[toggle, setToggle] = useState(true)
  let location = useLocation();
  return (
    <>
    {location.pathname === "/email-confirmation" || location.pathname === "/email-password-reset" || location.pathname === "/email-alert" || location.pathname === "/email-invoices" || location.pathname === "/auth-login" || location.pathname === "/auth-signup" || location.pathname === "/auth-signup-success" || location.pathname === "/auth-re-password" || location.pathname === "/auth-lock-screen"  || location.pathname === "/comingsoon" || location.pathname === "/maintenance" || location.pathname === "/error" || location.pathname === "/thankyou" ?  
      <Routes>
        <Route path="/email-confirmation" element={<EmailConfirmation/>}/>
        <Route path="/email-password-reset" element={<PasswordReset/>}/>
        <Route path="/email-alert" element={<EmailAlert/>}/>
        <Route path="/email-invoices" element={<EmailInvoice/>}/>
        <Route path="/auth-login" element={<AuthLogin/>}/>
        <Route path="/auth-signup" element={<Signup/>}/>
        <Route path="/auth-signup-success" element={<AuthSignupSuccess/>}/>
        <Route path="/auth-re-password" element={ <AuthResetPassword/>}/>
        <Route path="/auth-lock-screen" element={ <AuthLockScreen/>}/>
        <Route path="/comingsoon" element={<Comingsoon/>}/>
        <Route path="/maintenance" element={<Maintenance/>}/>
        <Route path="/error" element={ <PageError/>}/>
        <Route path="/error" element={ <PageError/>}/>
        <Route path="/thankyou" element={ <PageThankyou/>}/>
      </Routes> : 
      <>
      <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
        {location.pathname === '/index-sidebar-light' ? <SidebarLight/> : location.pathname === '/index-sidebar-colored' ? <SidebarColored/> : location.pathname === '/email-confirmation' ? "" : <Sidebar />}
          <main className="page-content bg-gray-50 dark:bg-slate-800">
              <Topnav toggle={toggle} setToggle={setToggle}/>
              <Routes>
                <Route exact path="/inicio" element={<Dashboard/>}/> 
              </Routes>
              <Footer/>
          </main>
          {/* <Switcher/> */}
      </div>
    </>
      }
    </>
    
  );
}

export default App;
