import {useState} from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'

import Sidebar from './components/sidebar'
import Topnav from './components/topnav'
import Footer from './components/footer'

import EmailConfirmation from './pages/Email-template/email-confirmation'
import PasswordReset from './pages/Email-template/email-password-reset'
import EmailAlert from './pages/Email-template/email-alert'
import EmailInvoice from './pages/Email-template/email-invoices'
import AuthLogin from './pages/Authentication/auth-login'
import Signup from './pages/Authentication/auth-signup'
import AuthSignupSuccess from './pages/Authentication/auth-signup-success'
import AuthResetPassword from './pages/Authentication/auth-re-password'
import AuthLockScreen from './pages/Authentication/auth-lock-screen'
import Comingsoon from './pages/Miscellaneous/comingsoon'
import Maintenance from './pages/Miscellaneous/maintenance'
import PageError from './pages/Miscellaneous/error'
import PageThankyou from './pages/Miscellaneous/thankyou'

import Dashboard from './pages/Ekored/dashboard'


function App() {
  const[toggle, setToggle] = useState(true)
  let location = useLocation()
  return (
    <>
      {location.pathname === '/email-confirmation' || location.pathname === '/email-password-reset' || location.pathname === '/email-alert' || location.pathname === '/email-invoices' || location.pathname === '/auth-login' || location.pathname === '/auth-signup' || location.pathname === '/auth-signup-success' || location.pathname === '/auth-re-password' || location.pathname === '/auth-lock-screen'  || location.pathname === '/comingsoon' || location.pathname === '/maintenance' || location.pathname === '/error' || location.pathname === '/thankyou' ?  
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
          <div className={`page-wrapper  ${toggle ? 'toggled' : ''}`}>
            {/* {location.pathname === '/index-sidebar-light' ? <SidebarLight/> : location.pathname === '/index-sidebar-colored' ? <SidebarColored/> : location.pathname === '/email-confirmation' ? '' : <Sidebar />} */}
            <Sidebar />
            <main className="page-content bg-gray-50 dark:bg-slate-800">
              <Topnav toggle={toggle} setToggle={setToggle}/>
              <Routes>
                <Route path='/' element={<Navigate to='/inicio' />} />
                <Route exact path="/inicio" element={<Dashboard/>}/> 
              </Routes>
              <Footer/>
            </main>
          </div>
        </>
      }
    </>
    
  )
}

export default App
