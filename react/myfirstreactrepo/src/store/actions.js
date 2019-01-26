import axios from 'axios'

export const fetchPeople = () => {
   return dispatch => {
      dispatch(requestPeopleLoading())
      return axios.get("https://swapi.co/api/people")
         .then(response => {
            console.log('response->', response)
            dispatch(requestPeopleSuccess(response.data.results))
         })
         .catch( err => {
            console.log('err', err)
            dispatch(requestPeopleError())
         })
   }
}

export const getMeetUpData = () => {
   return dispatch => {
      dispatch(requestMeetupData())
   }
}

export const incrementAction = () => ({type: "INCREMENT"})
export const decrementAction = () => ({type: "DECREMENT"})
export const requestPeopleLoading = () => ({type: "REQUEST_DATA"})
export const requestPeopleSuccess = (payload) => ({
   type: "REQUEST_SUCCESS",
   action: payload
})
export const requestPeopleError = () => ({type: "REQUEST_ERROR"})
export const requestMeetupData = () => ({type: "REQUEST_MEETUP"})