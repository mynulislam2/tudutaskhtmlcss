
import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Css/account.css'
import user2 from '../../Assests/user2.png'


const MyAccount = () => {
    return (


        <Container className="d-flex justify-content-center mt-5">
            <div className=' mx-auto text-justify w-75'>
                <div>
                    <h1 className="accountTittle text-center">MY <span className="accountdivor">ACCOUNT</span></h1>

                    <div className='d-flex justify-content-center'>
                        <img width="150px" src={user2} />
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div className='NamingWrapper'>
                        <h6>
                            Name
                        </h6>
                        <p>
                            Arjun G N
                        </p>
                    </div>
                    <div  className='actionsWrapper'>
                        <a>edit</a>
                    </div>

                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                Email

                            </h6>
                            <p>
                                arjun@gmail.com                                </p>
                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a>edit</a>
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                Phone
                            </h6>
                            <p>
                                9826369270
                            </p>
                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a>edit</a>
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                Password
                            </h6>

                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a>Change password</a>
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                Subscription Details
                            </h6>

                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a></a>
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                1 Year membership for 750 AED
                            </h6>
                            <p>
                                Started on: 13-11-2020
                                Valid till: 13-11-2021
                            </p>
                            <a>
                                Subscription history
                            </a>
                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a>Change plan</a>
                    </div>
                </div>
                <div className=' d-flex justify-content-between'>
                    <div  className='NamingWrapper'>
                        <div className='w-75'>
                            <h6>
                                Referral Details
                            </h6>
                            <p>Share your referral code and earn cash credits for each friend that subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend receives a 5 USD credit.</p>
                            <p>
                                Referral Code: HSAGBWBDAV
                            </p>
                            <a>
                                Referral History
                            </a>
                        </div>
                    </div>
                    <div className='actionsWrapper'>
                        <a>Copy</a>
                    </div>
                </div>

            </div>
        </Container>






    );
};

export default MyAccount;