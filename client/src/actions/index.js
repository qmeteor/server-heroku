/**
 * Created by Bien on 2017-10-03.
 */
import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// Same as above
// export const fetchUser = () => {
//     return function(dispatch) {
//         axios.get('/api/current_user')
//             .then(res => dispatch({
//                 type: FETCH_USER,
//                 payload: res
//             }));
//     };
// };




