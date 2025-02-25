import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Leaderboard_Stats.css'
import First from "../../assets/images/prize/first.png"
import Second from "../../assets/images/prize/second.png"
import Third from "../../assets/images/prize/third.png"

import { db } from '../../firebaseconfig'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export const LeaderboardStats = () => {

    let position = 1;
    const navigate = useNavigate();
    const [leaderboardData, setLeaderboardData] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(query(collection(db, "users"), orderBy("xp", "desc"), limit(10)));
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
            setLeaderboardData(newData);
        }
        fetchData();
    }, []);

    const handleClick = () => {
        navigate('/leaderboard')
    }

    return (
        <div className="leaderboard_stats">
            <div className="leaderboard_stats_top">
                <div className="title">Leaderboard</div>
                <div className="view_btn" onClick={handleClick}>View all</div>
            </div>
            <div className="leaderboard_stats_bottom">
                {
                    // need to sort by position
                    leaderboardData && leaderboardData.map((user) => {
                        return (
                            <div className="leaderboard_stats_card" key={position}>
                                <div className="pos">
                                    {(position > 3) ? position++ :
                                        (position === 1) ? position++ && <img src={First} alt="" /> :
                                            (position === 2) ? position++ && <img src={Second} alt="" /> : position++ && <img src={Third} alt="" />
                                    }
                                </div>
                                <div className="dp">
                                    <img src={user.dp} alt="" />
                                </div>
                                <div className="name">{user.name}</div>
                                <div className="xp">{user.xp} XP</div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}