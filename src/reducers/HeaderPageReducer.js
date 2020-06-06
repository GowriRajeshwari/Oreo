import { SHOW_HOME,SHOW_USER} from '../constants/actionTypes.js';

const initialstate={
    show : false
}
const HeaderPageReducer = (state = initialstate,action)=>{
    switch(action.type){
        case SHOW_USER:
            return {
                ...state,
                show:true
            }
        case SHOW_HOME :
            return {
                ...state,
                show :false
            }
        default:
            return state
    }
}
export default HeaderPageReducer