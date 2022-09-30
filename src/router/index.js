import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Home from '../pages/Home';
import Member from '../pages/Member';
import Registration from '../pages/Registration';
const Router = (props) => {


    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/member' element={<Member />} />
        </Routes>

    );
}

export default Router;
