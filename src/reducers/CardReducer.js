import { DESCRIPTION,REVIEW,ABOUT} from '../constants/actionTypes.js';

const initialstate={
    card : "description",
   
}
export default (state = {card : "description"},action)=>{
    switch(action.type){
        case 'DESCRIPTION':
            console.log(action.payload)
            return {
                ...state,
                card:"description"
            }
        case 'REVIEW' :
            return {
                ...state,
                card:"review"
            }
            case 'ABOUT' :
            return {
                ...state,
                card:"about"

            }
            
        default:
            // console.log("default state",state)
            return state
    }
}
// export default HeaderPageReducer