 import _ from 'lodash';

import jsonPlaceholder from "../apis/jsonPlaceholder";

//calling a action creator from a action creator and making it wait until fetch has completed
export const fetchPostsAndUsers = () => async (dispatch,getState) => {
   
    await dispatch(fetchPosts());
 //called the  lodash unique map func  to get list of ids 1 10   
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //now i am sorting throught these ids to get the unigue one instead of all of them
    userIds.forEach(id => dispatch(fetchUser(id)));

};


export const fetchPosts = () => async dispatch =>{
    // return async  (dispatch ) =>{
        const response = await jsonPlaceholder.get('/posts');
  
        dispatch({
            type: 'FETCH_POST',
            payload: response.data })

      
    
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
  
        dispatch({
            type: 'FETCH_USER',
            payload: response.data })   
};

// my reminder the memoize approach
//my lodash function memoize to make the call only once(down is you can only call each user one time)

// export const fetchUser = (id) =>  dispatch =>{
    
//     _fetchUser(id, dispatch);    
    
// 
// my reminder
//my lodash function memoize to make the call only once(down is you can only call each user one time)
// const _fetchUser = _.memoize(async(id,dispatch) => {    
// const response = await jsonPlaceholder.get(`/users/${id}`);
  
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data })  
// });