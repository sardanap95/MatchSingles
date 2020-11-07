/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { Type: String, require: true },
  gender: { Type: String, require: true },
  bio: { Type: String, require: true },
  synopsis: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;*/

import "./Profile.css";
import React, { useEffect, useState } from "react"; 
import database from '.db/db';
import axios from "axios";
const Pricing = () => {
    const [ProfileName, setProfileName] = useState("");
    const [ProfileCell, setProfileCell] = useState("");
    const [ProfileImage, setProfileImage] = useState("");
    const [ProfileEmail, setProfileEmail] = useState("");
    const profileData = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api/");
            setProfileCell(res.data.results[0].cell);
            setProfileEmail(res.data.results[0].email);
            setProfileImage(res.data.results[0].picture.large);
            setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`
            );
        } catch (error) {
        }
        console.log(error);
      }
    };

  useEffect(() => {
    profilrData();
  }, []);
      return <div >
          <div className="card">
              <img src={ProfileImage} style={{width: "100%"}} />
              <h1>{ProfileName}</h1>
              <p>{ProfileCell}</p>
              <p> <button> Contact</button></p>
          </div>
      </div>
};

export default Pricing;
// function Profile() {
//     const [people, setPeople] = useState([]);
//     //code runs on condition - firebase database
//     useEffect (() => {
//         database.collection('People').onSnapshot(snapshot =>(
//             setPeople(snapshot.docs.map(doc => doc.data()))
//         ))
//     }, []);
//     return (
//         <div>
//         {people.map(person => (
//             <div>{person.name}</div>
//             ))}
//         </div>
//     );
// }
// export default Profile;