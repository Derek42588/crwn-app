import React, { Component } from 'react';
import './css/style.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/user.selectors'

import { setCurrentUser } from './redux/user/user.actions'

import Checkout from './pages/checkout/checkout';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';

import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      } 

        setCurrentUser(userAuth)
      })
  }

  componentWillUmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin" render = {() => this.props.currentUser ? (<Redirect to ='/' />) : <SignInAndSignOut />}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
