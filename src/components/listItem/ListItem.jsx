import './listItem.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosHandler, errorHandler } from '../../utils/utils';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

const ListItem = ({index, item}) => {
    const [movie, setMovie] = useState({});
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axiosHandler({
                    method: 'get',
                    url: '/movies/find/' + item,
                    token: JSON.parse(localStorage.getItem('user')).accessToken
                }).catch((e) => console.log(errorHandler(e)));
                setMovie(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getMovies();
    },[item])
    return (
        <Link to={'/watch'} state={{movie: movie}}>
            <div 
                className='listItem' 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                style={{left: isHovered && index * 255 - 50 + index * 2.5}}
            >
                <img src={movie?.img} alt="" />
                {isHovered && (
                    <>
                        <video src={movie?.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon'/>
                                <Add className='icon'/>
                                <ThumbUpAltOutlined className='icon'/>
                                <ThumbDownAltOutlined className='icon'/>
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie?.duration}</span>
                                <span className='limit'>+{movie?.limit}</span>
                                <span>{movie?.year}</span>
                            </div>
                            <div className="desc">{movie?.desc}</div>
                            <div className="genre">{movie?.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
};

export default ListItem;
