import React, { useEffect, useState } from "react"; 
import TinderCards from 'react-tinder-card';
import './SingleMatchesCards.css';
import database from './firebase';


function SingleMatchesCards() {
    const [people, setPeople] = useState([]);

    //code runs on condition - firebase database
    useEffect (() => {
        database.collection('People').onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    console.log
    (people);
    return (
<div className="tinderCards_cardContainer">

{people.map(person => (
<TinderCards
    className="swipe"
    key={person.name}
    preventSwipe={['up' , 'down']}
    >
        <div 
        style={{backgroundImage: `url(${person.url})`}}
        className="card">
            <h3> {person.name}</h3>
        </div>
    </TinderCards>

))}

</div>
    )
}

export default SingleMatchesCards;
