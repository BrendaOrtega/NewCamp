import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/geek_completo.png";
import FontAwesome from "react-fontawesome";
import avatar from "../../assets/avatar.png";

export const NavBarDisplay = ({ loggedIn, logOut }) => {
  let [toggle, setToggle] = useState(false);
    let [show, setShow] = useState(false);

  window.onscroll = (e) => {
    window.requestAnimationFrame(function () {
      if (window.scrollY > 100) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  };

  function toggleMenu(){

  }

  return (
    <div
      className="nav"
      style={
        toggle
          ? {
              transition: "all .3s",
              background: "white",
              margin: 0,
              width: "100%",
              padding:"0 5%",
              borderBottom:"1px solid #f2f2f2"
            }
          : { transition: "all .3s" }
      }
    >
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="pestanas web"

      >
        <Link to="/courses">
          <p style={
              toggle
                  ? {
                      transition: "all .3s",
                      color: "#525252",
                  }
                  : { transition: "all .3s" }
          }
          >Cursos</p>
          <hr className="red-line" />
        </Link>
        <Link to="/bootcamp">
          <p style={
              toggle
                  ? {
                      transition: "all .3s",
                      color: "#525252",
                  }
                  : { transition: "all .3s" }
          }>Bootcamp</p>
          <hr className="red-line" />
        </Link>

        {/* <Link to="/courses">
                    <p>Cursos</p>
                    <hr className="red-line" />
                </Link>*/}

        {/*   <Link to="/apply?b=5dc1db06cd0b842984edca7c">
                    <button className="btn-aply">Aplicar</button>
                </Link>*/}

        <hr className="line" />
        {loggedIn ? (
          <div className="user-log dropdown">
            <Link to="/profile">
              <img className="avatar" src={avatar} alt="avatar" />
            </Link>
            <div id="user-drop" className="dropdown-content">
              <Link to="/profile">
                <p>Perfil</p>
              </Link>
              <p onClick={logOut} className="linea">
                Cerrar Sesión
              </p>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <p>Login</p>
            <hr className="red-line" />
          </Link>
        )}
      </div>

        <div className="movil dropdown">
        <FontAwesome name="bars"
            onClick={()=>setShow(true)}
        />

            {show &&<div className="dropdown-content">
          <Link  to="/bootcamp" onClick={()=>{
              console.log("aqui")
              setShow(false)
          }}>
            <p>Bootcamp</p>
          </Link>
             <Link onClick={()=>{
                 console.log("aqui")
                 setShow(false)
             }} to="/courses">
                        <p>Cursos</p>
             </Link>
          {loggedIn ? (
            <div>
              <Link onClick={()=>{
                  console.log("aqui")
                  setShow(false)
              }} to="/profile">
                <p>Perfil</p>
              </Link>
              <p onClick={logOut} className="linea">
                Cerrar Sesión
              </p>
            </div>
          ) : (
            <Link
                onClick={()=>{
                    console.log("aqui")
                    setShow(false)
                }}
                to="/login">
              <p className="linea">Login  {loggedIn}</p>
            </Link>
          )}
        </div>}
      </div>
    </div>
  );
};
