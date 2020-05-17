import React, { Component } from "react";
import "./Contacto.css";
import ButtonWhite from "../common/ButtonWhite";
import toastr from "toastr";

class Contacto extends Component {
  state = {
    form: {},
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  onChange = ({ target: { name, value } }) => {
    let { form } = this.state;
    form[name] = value;
    this.setState({ form });
    this.setState({ form });
  };

  sendForm = () => {
    let { form } = this.state;
    fetch("https://fixtercamp.herokuapp.com/mailing/contacto", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        console.log(r);
        toastr.success("Recibido!");
      })
      .catch((e) => toastr.error("Vuelve a intentar"));
  };

  render() {
    return (
      <div className="">
        <meta
          name="description"
          content=" Completa el formulario y nos pondremos en contacto contigo lo antes posible."
        />
        <meta
          name="keywords"
          content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
        />
        <title>Contacto | FixterGeek</title>
        <div className="black"></div>
        <div className="contacto">
          <div className="map">
            <iframe
              title="map-fixter"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8548848559817!2d-99.1632528855843!3d19.418674986892213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3a3e482343%3A0x8bff98d2fed2edfc!2sJalapa+100%2C+Roma+Nte.%2C+06700+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1561928145598!5m2!1ses-419!2smx"
              frameBorder={0}
              style={{ border: "0" }}
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="contact">
            <p>
              {" "}
              <strong style={{ fontSize: "18px" }}>
                ¿Quieres ponerte en contacto con nosotros?
              </strong>{" "}
              <br /> Completa el formulario y nos pondremos en contacto contigo
              lo antes posible.
            </p>
            <input
              onChange={this.onChange}
              name="displayName"
              placeholder="Nombre"
              type="text"
              required={true}
            />
            <input
              onChange={this.onChange}
              name="email"
              placeholder="Email"
              type="text"
              required={true}
            />
            <input
              onChange={this.onChange}
              name="tel"
              placeholder="Teléfono"
              type="number"
            />
            <textarea
              onChange={this.onChange}
              name="text"
              placeholder="Mensaje"
              type="text"
            />
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <ButtonWhite onClick={this.sendForm} text="ENVIAR" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
