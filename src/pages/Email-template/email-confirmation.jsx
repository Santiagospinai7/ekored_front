import React from "react";
import LogoLight from '../../assets/images/logo-light.png'

export default function EmailConfirmation(){
    return(
        <body style={{fontFamily: 'Nunito sans-serif', fontSize: '15px',fontWeight: "400"}}>
            <div style={{marginTop: '50px'}}>
                <table cellpadding="0" cellspacing="0" style={{fontFamily:"Nunito, sans-serif" , fontSize:'15px', fontWeight:"400", maxWidth:'600px', border:"none", margin:'0 auto', borderRadius:'6px', overflow:"hidden", backgroundColor:'#fff', boxShadow:'0 0 3px rgba(60, 72, 88, 0.15)' }}>
                    <thead>
                        <tr style={{backgroundColor: '#4f46e5', padding: '3px 0', border: 'none', height: '68px', textAlign: 'center', color: '#fff', fontSize:' 24px', letterSpacing: '1px'}}>
                            <th scope="col" style={{height:'68px', display:'flex', justifyContent:'center', alignItems:'center'}}><img src={LogoLight} alt="" style={{margin:'0, auto'}}/></th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td style={{padding: '48px 24px 0', color: '#161c2d', fontSize:' 18px', fontWeight: '600'}}>
                                Hello, Harry
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding: '15px 24px 15px', color: '#8492a6'}}>
                                Thanks for creating an Techwind account. To continue, please confirm your email address by clicking the button below :
                            </td>
                        </tr>
        
                        <tr>
                            <td style={{padding: '15px 24px'}}>
                                <a href="" style={{padding: "8px 20px", outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing:' 0.5px', transition: 'all 0.3s', fontWeight: '600', borderRadius: '6px', backgroundColor: '#4f46e5', border:' 1px solid #4f46e5', color: '#ffffff'}}>Confirm Email Address</a>
                            </td>
                        </tr>
        
                        <tr>
                            <td style={{padding:' 15px 24px 0', color: '#8492a6'}}>
                                This link will be active for 30 min from the time this email was sent.
                            </td>
                        </tr>
        
                        <tr>
                            <td style={{padding: '15px 24px 15px', color: '#8492a6',}}>
                                Techwind <br/> Support Team
                            </td>
                        </tr>
        
                        <tr>
                            <td style={{padding: '16px 8px', color: '#8492a6', backgroundColor: '#f8f9fc', textAlign: 'center'}}>
                                © <script>{new Date().getFullYear()}</script> Techwind.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    )
}