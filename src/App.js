import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { requestCoins } from './actions'
import CoinList from './CoinList'

const mapStateToProps = state => {
  return {
    coins: state.coins,
    isPending: state.isPending,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestCoins: () => dispatch(requestCoins())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestCoins()
  }

  render() {
    const { coins, isPending } = this.props
    return isPending ? <h1>LOADING</h1> : 
    (
      <div className="App">
        <CoinList coins={coins} isPending={isPending}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
