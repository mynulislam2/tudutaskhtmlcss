import React from 'react';
import Footer from '../../Component/Footer/Footer';
import LastFooter from '../../Component/Footer/LastFooter';
import Header from '../../Component/Header/Header';
import MyAccount from '../../Component/MyAccount/MyAccount';

const Account = () => {
    return (
        <div>
            <Header/>
            <MyAccount/>
            <Footer/>
            <LastFooter/>
        </div>
    );
};

export default Account;