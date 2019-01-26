import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux' //object destructuring

import {incrementAction, decrementAction, fetchPeople} from './store/actions'

class Home extends Component {
//   componentDidMount() {
//      this.props.fetchPeople()
//   }
  render() {
    return (
      <div >
         <p>
            Number: {this.props.myNum}
         </p>
         <div>
            <button id="increment" onClick={ () => this.props.incrementAction() }>+</button>
            <button id="decrement" onClick={ () => this.props.decrementAction() }>-</button>
         </div>
         <button id="getData" onClick={ () => this.props.fetchPeople() }>getData</button>
         <h3>Dari Swapi</h3>
         {
            (this.props.isLoading === true) 
            ? <div>  
               Loading
              </div>
            : (this.props.isError === true) 
            ? <div>Ops something error</div>
            :
            //console.log(this.props.peoples)
            this.props.orang.map((people,index) => 
            <div key={index}>
               <h4>{people.name}</h4>
            </div>
            )
            
         }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   myNum: state.num,
   orang: state.peoples,
   isLoading: state.isLoading,
   isError: state.isError
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
   incrementAction, decrementAction, fetchPeople
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home);