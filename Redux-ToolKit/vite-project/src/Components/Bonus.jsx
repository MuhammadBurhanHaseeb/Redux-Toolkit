import React,{ useState } from "react";
import {incrementBonus } from "../slices/bonusSlice.js";
import { useDispatch, useSelector } from "react-redux";




// function Bonus({store}) / /jab react redux use nahi kiya huwa tha 
function Bonus()
{
    // let [bonus , setBonus] = useState({points : 0 });
    // function incrementBonus()
    // {
    //     setBonus({points: bonus.points +1 });
    // }

        // react-redux instead of prop drilling 
    const amount =useSelector(state => state.account.amount);
    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch(); // for dispatch in react redux 

    return (
        <>
            <div className="BonusCard">
                <h3>Bonus Component</h3> 
                <p className="para" >Amount : {amount} Bonus: {points}</p>
                <button onClick={() => dispatch(incrementBonus())}>Increment + </button>
                 {/* <p className="para" >Amount: {amount} Bonus: {points}</p> */}
                 {/* <p className="para" >Bonus: {bonus.points}</p>
                 <button onClick={incrementBonus}>Increment + </button> */}
            </div>
        </>
    )
}
export default Bonus;