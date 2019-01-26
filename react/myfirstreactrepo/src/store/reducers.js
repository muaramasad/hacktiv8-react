const counter = {
   num: 2,
   peoples: [],
   isLoading: false,
   isError: false
}

const meetupData = {
   name: 'Hactiv8 Meetup Redux Test',
   location: 'Jakarta, Indonesia',
   members: 100,
   organizedBy: 'Ardhy Winata Redux',
}

const menu = {
   appname: "QTemu From Reducers",
   create: "Create Meetup",
   explore: "Explore"
 }

const myReducer = (state = {...counter, ...meetupData, ...menu}, action) => {
   switch(action.type) {
      case "INCREMENT":
         return({
            ...state,
            num: state.num+=1
         })
      case "DECREMENT":
      return({
         ...state,
         num: state.num-=1
      })
      case "REQUEST_DATA":
      return({
         ...state,
         isLoading: true
      })
      case "REQUEST_SUCCESS":
      return({
         ...state,
         isLoading: false,
         peoples: action.payload
      })
      case "REQUEST_ERROR":
      return({
         ...state,
         isLoading: false,
         isError: true
      })
      default:
         return state
   }
}

export default myReducer