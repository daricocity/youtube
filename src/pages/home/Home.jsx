import './home.scss';
import { useState, useEffect } from 'react';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/feature/Featured';
import { axiosHandler, errorHandler } from '../../utils/utils';

const Home = ({ type }) => {
    document.title = 'Home'
    const [lists, setLists] = useState([]);
    const [genre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axiosHandler({
                    method: 'get',
                    url: `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
                    token: JSON.parse(localStorage.getItem('user')).accessToken
                }).catch((e) => console.log(errorHandler(e)));
                setLists(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getRandomLists();
    }, [type, genre]);
    
    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type} />
            {lists.map((list, ind) => (
                <List list={list} key={ind}/>
            ))}
        </div>
    )
}

export default Home
