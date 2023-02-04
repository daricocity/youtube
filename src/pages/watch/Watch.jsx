import './watch.scss';
import { Link, useLocation } from 'react-router-dom';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
    const location = useLocation();
    const { movie } = location.state;
    return (
        <div className='watch'>
            <Link to='/'>
                <div className="back">
                    <ArrowBackOutlined/> Home
                </div>
            </Link>
            <video className='video' autoPlay progress={true.toString()} controls src={movie.video}/>
        </div>
    )
}

export default Watch
