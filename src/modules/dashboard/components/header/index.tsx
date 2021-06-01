import styles from '../../style.module.css';
import {selectToken,doLogout} from '../../../../shared/store/slice/authSlice';
import {useSelector,useDispatch} from 'react-redux';
const Header=()=>{
    const token=useSelector(selectToken);
    const dispatch=useDispatch();
    const handleLogout=()=>{
         dispatch(doLogout({},()=>{
             window.location.href='/#/login';
         }))
    }
    const handleLogin=()=>{
        window.location.href='/#/login';
    }
    return <> {token? '你好 '+token:'匿名'}

    {token && <><button onClick={handleLogout}>登出</button></>}
    {!token && <><button onClick={handleLogin}>登录</button></>}
    </>
}
export default Header;