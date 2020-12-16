import React, { useEffect, useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import "../assests/css/SingleMatchesCards.css";
import database from "../firebase";
import UndoIcon from "@material-ui/icons/Undo";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import RedoIcon from "@material-ui/icons/Redo";
import RepeatIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import "../assests/css/SwipeButtons.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function SingleMatchesCards() {
  /* Snackbar */

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  /*Tinder card*/

  useMemo(() => {
    database
      .collection("People")
      .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));
  }, []);

  const [people, setPeople] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const alreadyRemoved = [];
  let favourites = [];
  let charactersState = people;
  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const bringBack = (name) => {
    console.log("Bringing back " + name);
    setLastDirection("left");
    charactersState.unshift(charactersState.filter((character) => character.name === name));
    alreadyRemoved.splice(alreadyRemoved.length, 1);
  };

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
    console.log(alreadyRemoved);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter((character) => character.name !== name);
    setPeople(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = people.filter((person) => !alreadyRemoved.includes(person.name));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = people.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      console.log(childRefs);
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  const addToFav = (name, e) => {
    handleClick(e);
    console.log("Adding to favourites" + name);
    favourites.push(charactersState.filter((character) => character.name === name));
    console.log(favourites);
  };

  return (
    <div className="tinderCards_cardContainer">
      {people.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
        >
          <div className="tinder-card">
            <div className="person-img-container">
              <div className="person-img" style={{ backgroundImage: "url(" + character.url + ")" }}>
                <div className="person-info">
                  <h1 className="person-title">
                    <span>{character.name}</span>

                    <span>
                      <IconButton
                        className=" swipeButton swipeButtons__repeat"
                        onClick={() => bringBack(alreadyRemoved[alreadyRemoved.length - 1])}
                      >
                        <RepeatIcon />
                      </IconButton>
                      <IconButton
                        className=" swipeButton swipeButtons__heart"
                        onClick={(e) => {
                          addToFav(character.name, e);
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>

                      <IconButton className=" swipeButton swipeButtons__lightning">
                        <FlashOnIcon />
                      </IconButton>
                    </span>
                  </h1>
                  <h2 className="person-subtitle">
                    <span>
                      {character.Age || "22"} • {character.Ocupation || "Artist"}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Added to favourites!
        </Alert>
      </Snackbar>
      {/* <div className="tinder-card">
        <div className="person-img-container">
          <div
            className="person-img"
            style={{
              backgroundImage:
                "URL(https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            }}
          >
            <div className="person-info">
              <h1 className="person-title">Pushpi Sardana</h1>
              <h2 className="person-subtitle">18 • Artist</h2>
            </div>
          </div>
        </div>
        <div className="swipeButtons">
          <IconButton className=" swipeButton swipeButtons__repeat">
            <UndoIcon />
          </IconButton>
          <IconButton className=" swipeButton swipeButtons__left">
            <CloseIcon />
          </IconButton>

          <IconButton className=" swipeButton swipeButtons__heart">
            <FavoriteIcon />
          </IconButton>

          <IconButton className=" swipeButton swipeButtons__lightning">
            <FlashOnIcon />
          </IconButton>
          <IconButton className=" swipeButton swipeButtons__right">
            <RedoIcon />
          </IconButton>
        </div>
      </div> */}
      {/* {people.map((person) => (
        <TinderCards className="swipe tinder-card" key={person.name} preventSwipe={["up", "down"]}>
           <div style={{ backgroundImage: `url(${person.url})` }} className="card">
            <h3> {person.name}</h3>
          </div> 
         
          
        </TinderCards>
      ))} */}
    </div>
  );
}

export default SingleMatchesCards;
