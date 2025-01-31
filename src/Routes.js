import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import LoginPage from './pages/loginpage/loginpage.component'
import RegisterPage from './pages/registerpage/registerpage.component'
// import HomePage from './pages/homepage/homepage.component'
import PointsPage from './pages/pointspage/pointspage.component'
import RoomsPage from './pages/roomspage/roomspage.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import FriendsPage from './pages/friendspage/friendspage.component'
import PointsContextProvider from './context/PointsContext'
import RoomsContextProvider from './context/RoomsContext'
import LoginContextProvider, {LoginContext} from './context/LoginContext'


const Routes = () => {

const {loginUser, SetLoginUser} = useContext(LoginContext);
const routerHistory = useHistory();  

    useEffect(() => {
            const currentUser =  localStorage.getItem('loginUser')
            console.log('localUser: ', currentUser)
            console.log('loginUser Logincontext: ', loginUser)

            if(currentUser){
                SetLoginUser(currentUser);
            }else{
                // ver la forma de redirigir a loginpage
            }
  }, [loginUser])

    return (
        <div>
        <BrowserRouter>
        <Header currentUser={loginUser} position="sticky" top='0' />
            <Switch>
            <Route exact path="/home">
                    <PointsContextProvider>
                        <HomePage />
                    </PointsContextProvider> 
                </Route>
                <Route exact path="/">
                    <PointsContextProvider>
                        <PointsPage />
                    </PointsContextProvider> 
                </Route>
                <Route exact path="/points">
                    <PointsContextProvider>
                        <PointsPage />
                    </PointsContextProvider> 
                </Route>
                <Route exact path="/rooms">
                    <RoomsContextProvider>
                        <RoomsPage />
                    </RoomsContextProvider> 
                </Route>
                   
                {/* <Route exact path="/rooms" />
                <RoomsContextProvider>
                    <RoomsPage />
                </RoomsContextProvider> */}

                <Route exact path="/friends" component={FriendsPage} />
                {/* <Route exact path="/signin" component={LoginPage} /> */}
                <Route exact path="/signin">
                    <LoginContextProvider>
                        <LoginPage />
                    </LoginContextProvider> 
                </Route>
                <Route exact path="/signup" component={RegisterPage} />
            </Switch>
        </BrowserRouter>
             
       </div>
    );
};

export default Routes;