import { SHOW_HOME,SHOW_USER} from '../constants/actionTypes.js';

const initialstate={
    show : false
}
export default (state = {show : true},action)=>{
    switch(action.type){
        case 'SHOW_USER':
            console.log(action.payload)
            return {
                ...state,
                show:false
            }
        case 'SHOW_HOME' :
            return {
                ...state,
                show :true
            }
        default:
            // console.log("default state",state)
            return state
    }
}
// export default HeaderPageReducer