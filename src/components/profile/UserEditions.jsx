import React from "react";
import "./Profile.css";
import img from "../../assets/secciones-02.png";
import ButtonUser from "../common/ButtonUser";
import { Link } from "react-router-dom";
import BootcampCard from "../bootcamp/BootcampCard";
import {useSelector} from 'react-redux'
import axios from 'axios'

const UserEditions = ({}) => {
    const {token} = useSelector(({user})=>user)
    const [editions, setEditions] = React.useState([]) 
    console.log("ediciones: ", editions);

    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_ROUTE}/editions/self`, {headers:{Authorization:token}})
        .then(({data})=>{
            setEditions(data.editions)
        })
        .catch(e=>console.log(e))
    },[])

  return (
    <section className="user-courses">
      {editions.length < 1 ? (
        <div className="box-c none-user">
          <p>
            El próximo Bootcamp Online inicia el 21 de Febrero. <br />{" "}
            <strong>¡Incríbete ya! </strong>
          </p>
          <img style={{ opacity: ".7" }} src={img} alt="" />
          <br />
          <br />
          <Link to="/bootcamp">
            <ButtonUser text="SABER MÁS" />
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {editions.map((bootcamp, i) => (
            <BootcampCard bootcamp={bootcamp} key={i} {...bootcamp} />
          ))}
        </div>
      )}
    </section>
  );
};

export default UserEditions
