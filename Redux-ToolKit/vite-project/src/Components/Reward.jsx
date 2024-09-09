import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment } from "../redducers/reward.js";

// function Bonus({store}) / /jab react redux use nahi kiya huwa tha 
export default function Reward()
{

    // let [bonus , setBonus] = useState({points : 0 });
    // function incrementBonus()
    // {
    //     setBonus({points: bonus.points +1 });
    // }

        // react-redux instead of prop drilling 
    const amount = useSelector(state => state.account.amount);
    const points = useSelector(state => state.reward.points);
    const dispatch = useDispatch(); // for dispatch in react redux 

    return (
        <>
            <div className="BonusCard">
                <h3>Reward Component</h3> 
                <p className="para" >Amount : {amount} Reward: {points}</p>
                <button onClick={() => dispatch(increment())}>Increment + </button>
                 {/* <p className="para" >Amount: {amount} Bonus: {points}</p> */}
                 {/* <p className="para" >Bonus: {bonus.points}</p>
                 <button onClick={incrementBonus}>Increment + </button> */}
            </div>
        </>
    )
}