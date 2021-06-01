import {useSelector} from 'react-redux';
import {selectTitle,selectSubTitle} from '../../store/slice/navSlice';

const BreadCrumb=()=>{
    const title=useSelector(selectTitle);
    const subtitle=useSelector(selectSubTitle);
    return <div> {title} &gt; {subtitle}</div>
}
export default BreadCrumb;