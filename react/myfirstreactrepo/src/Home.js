import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux' //object destructuring

import {incrementAction, decrementAction} from './store/actions'

class Home extends Component {
  render() {
    return (
      <div>
         <p>
            Number: {this.props.myNum}
         </p>
         <div>
            <button id="increment" onClick={ () => this.props.incrementAction() }>+</button>
            <button id="decrement" onClick={ () => this.props.decrementAction() }>-</button>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   myNum: state.num
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
   incrementAction, decrementAction
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home);