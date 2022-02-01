import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark py-3" >
            <React.Fragment>
                <React.Fragment>
                    <div className='container bg-dark py-3'>
                        <div className="row">
                            <div className="col-md-3 ft-link-control">
                                <h5 className="mb-3">EXTRAS</h5>
                                <Link to='/terms'>Terms Condition</Link>
                                <Link to='#'>Gift Certificates</Link>
                                <Link to='#'>Affiliate</Link>
                                <Link to='#'>Specials</Link>
                                <Link to='#'>Site Map</Link>
                            </div>
                            <div className="col-md-3 ft-link-control">
                                <h5 className="mb-3">INFORMATION</h5>
                                <Link to='#'>About Us</Link>
                                <Link to='/policy'>Privacy Policy</Link>
                                <Link to='#'>Terms & Conditions</Link>
                                <Link to='#'>Contact Us</Link>
                                <Link to='#'>Site Map</Link>
                            </div>
                            <div className="col-md-3 ft-link-control">
                                <h5 className="mb-3">EXTRAS</h5>
                                <Link to='#'>Brands</Link>
                                <Link to='#'>Gift Certificates</Link>
                                <Link to='#'>Affiliate</Link>
                                <Link to='#'>Specials</Link>
                                <Link to='#'>Site Map</Link>
                            </div>
                            <div className="col-md-3 ft-link-control">
                                <h5 className="mb-3">CONTACT US</h5>
                                <address>
                                    <div>
                                        <span>
                                            <i className='fa fa-map'></i>
                                        </span>
                                        42 Dream House, Dreammy street, 7131 Dreamville, USA
                                    </div>
                                    
                                    <div>
                                    <span>
                                        <i className='fa fa-envelope'></i>
                                    </span>
                                        Develope by  <a href="mailto:online.aid@outlook.com" style={{textDecoration: 'none', paddingLeft: '10px', fontWeight: 'bold'}}>Online Aid</a> <br />
                                    </div>
                                    <div>
                                    <span>
                                        <i className='fa fa-phone'></i>
                                    </span>
                                    01771-133111
                                    </div>
                                    
                                </address>
                                <div className='payment-methods'>
                                   <img src='../images/payment.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                <div className="py-1">
                    <p className="text-center mt-1">
                        Shopping Cart - {currentYear}, All Rights Reserved
                    </p>
                </div>
            </React.Fragment>
        </footer>
    )
}

export default Footer

