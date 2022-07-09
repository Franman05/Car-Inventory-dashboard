import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import car from '../../assets/images/carpic.jpg';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom'

interface Cars {
    title: string;
}


const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${car})`,
        width: "100%",
        height: "200%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        zIndex: -1,
      },
    main_text: {
        textAlign: "center",
        position: "relative",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
      },
      button_text: {
        color: "white",
        textDecoration: "none",
      },
    });
export const Home = ( props: Cars) => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
            <h1>{props.title}</h1>
            <Button>
              <Link to="/cars" className={classes.button_text}>
                The Collection
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  };