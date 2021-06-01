import {useEffect} from 'react';
import http from '../../../shared/httpclient';
const List=()=>{
    useEffect(()=>{
       http.get('/index-infos').then((res)=>{
           console.log('res',res);
       })
    })
    return <div>list of user </div>
}
export default List;