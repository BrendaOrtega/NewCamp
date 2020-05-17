import React, { Component } from "react";
import "./Home.css";
import Button from "../common/Button";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import toastr from "toastr";

// redux
import { connect } from "react-redux";
import { getBootcampsAction } from "../../redux/bootcampDuck";
import photo from "../../assets/pexels-photo-3626622.svg";
import student1 from "../../assets/carlitos.jpg";
import student2 from "../../assets/jorge.jpg";
import student3 from "../../assets/ossscar.jpg";
import { Carousel } from "antd";

let react = require("../../assets/react.png");
let vue = require("../../assets/vue.png");
let angular = require("../../assets/angular.png");
let ember = require("../../assets/ember.png");
let docker = require("../../assets/dock.png");
let node = require("../../assets/node.png");
let python = require("../../assets/python.png");
let dj = require("../../assets/dj.png");
let fire = require("../../assets/fire.png");
let go = require("../../assets/go.png");
let kuber = require("../../assets/Kubernetes_(container_engine).png");
let rails = require("../../assets/ruby.png");
let webpack = require("../../assets/icon-square-big.png");
let redux = require("../../assets/logo.png");
let android = require("../../assets/android.png");
let gatsby = require("../../assets/gatsby.jpeg");

let imagenes = [
  react,
  vue,
  angular,
  ember,
  gatsby,
  node,
  python,
  dj,
  rails,
  fire,
  docker,
  webpack,
  go,
  kuber,
  redux,
  android,
];

class HomeContainer extends Component {
  state = {
    email: null,
  };

  componentDidMount() {
    window.scroll(0, 0);
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/cmiscm/stickerjs/sticker.min.js";
    script.async = true;
    script.onload = () => {
      window.Sticker.init(".sticker");
      // change bg

      let imgs = document.querySelectorAll(".sticker-img.sticker-front");
      let back = document.querySelectorAll(".sticker-img.sticker-back");
      console.log(imgs);
      imgs.forEach((div, i) => {
        div.style = `background-image:url('${imagenes[i]}')`;
        back[i].style = `background-image:url('${imagenes[i]}')`;
      });
      //img.style = `background-image:url('${fire}')`
      //img.style = 'background-color:red'
    };
    document.body.appendChild(script);
    // redux
    //this.props.getBootcampsAction()
  }

  addToEmailList = () => {
    console.log("pressed");
    let { email } = this.state;
    fetch("https://fixtercamp.herokuapp.com/mailing/maillist", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        console.log(r);
        toastr.success("Registrad@!");
      })
      .catch((e) => toastr.error("Vuelve a intentar"));
  };

  onChange = ({ target: { value: email } }) => {
    this.setState({ email });
  };

  render() {
    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    return (
      <section>
        <meta
          name="description"
          content="FixterGeek, es una plataforma única en donde encontraras cursos, ejercicios, artículos, libros y eventos sobre tecnología."
        />
        <meta
          name="keywords"
          content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
        />
        <title>FixterGeek</title>
        <section className="back-home">
          <div className="cover">
            <div>
              <h2>
                Aprende las <strong>herramientas</strong> y{" "}
                <strong>frameworks</strong> que usan los profesionales de la
                industria
              </h2>
              <p>Cursos, botocamps, eventos y más.</p>
              <br />
              <Link to="/bootcamp">
                <Button ico=">_" text="Aplicar" />
              </Link>
            </div>
          </div>
        </section>

        <section className="box-home">
          <h2 className="subtitulo">A life-changing experience</h2>
          <p className="text">
            {" "}
            En cada curso, aprenderás las skills más demandadas de la mano de
            apasionados maestros y un plan de estudios práctico y actualizado.
            Si apenas estas iniciando o ya eres experto en programación, no te
            preocupes, encontrarás cursos de nivel básico, intermedio y
            avanzadado, así que seguramente encontrarás el ideal para ti.
          </p>
          <div className="info_box">
            <div className="dates_box">
              <div>
                <h3>+ 5</h3>
                <p>
                  Más de 5 años ofreciendo educación y mentoría de forma
                  presencial y en línea.{" "}
                </p>
              </div>
              <div>
                <h3>+ 300</h3>
                <p>
                  Alumnos graduados de nuestros cursos presenciales y en línea.{" "}
                </p>
              </div>

              <div>
                <h3>+ 15</h3>
                <p>
                  Herramientas y/o frameworks que podrás aprender en nuestros
                  cursos de 2020.
                </p>
              </div>
              <div>
                <h3>+ 10</h3>
                <p>
                  Maestros y mentores que te ayudarán a resolver dudas a lo
                  largo de cada curso.{" "}
                </p>
              </div>
            </div>
            <div className="photo_info">
              <img src={photo} alt="fotografía ilustrativa" />
            </div>
          </div>
        </section>
        <section className="comment">
          <h2 className="subtitulo">Meet our students</h2>
          <p className="text">
            {" "}
            Conoce la experiencia de algunos de nuestros estudiantes. Cada uno
            de ellos decidio aprender a programar o especificializarse en una
            herramienta, y agregar este skill a su desarrollo profesional a
            pesar de tener un background completamente diferente.
          </p>
          <br />
          <div className="comment_box">
            <div className="student">
              <div style={{ backgroundImage: `url("${student1}")` }}></div>
              <h4 className="names">Carlos Mendoza</h4>
              <p>
                Tomar un FixterCamp está lejos de ser un simple curso, es un
                acercamiento a mundo real de la tecnología y las grandes ideas,
                aprendí de forma práctica y dinámica temas complejos...
              </p>
            </div>
            <div className="student">
              <div style={{ backgroundImage: `url("${student2}")` }}></div>
              <h4 className="names">Jorge García</h4>
              <p>
                Estudié la universidad y puedo decir que el ritmo de aprendizaje
                no se compara con el que Fixter. Los profesores hacen algo más
                que enseñar y es que todos tienen lo que pocos programadores,
                calidad para compartir sus conocimientos.
              </p>
            </div>
            <div className="student">
              <div style={{ backgroundImage: `url("${student3}")` }}></div>
              <h4 className="names">Oscar Andrei Godoy</h4>
              <p>
                En Fixter desmenuzan los temas de la forma más simple para que
                comprendas a la perfección cada uno de los temas. Creo que
                cualquier persona puede aprender a programar y, qué mejor que
                sea de la mano de alguien profesional.
              </p>
            </div>
          </div>
        </section>
        <section className="extra">
          <h2 className="subtitulo">Reach your own goals</h2>
          <p className="text">
            La programación es una de las habilidades con mayor demanda en los
            últimos años, así que ya sea para comunicarte mejor con tu equipo de
            desarrollo, cambiar drásticamente tu carrera profesional, completar
            tu educación o simplemente por curiosidad, no pierdas más tiempo y
            ¡Empieza ya!
          </p>

          <div className="card-carrusell">
            <Carousel afterChange={onChange} autoplay>
              <div>
                <section className="flex-box">
                  <div id="pad">
                    <h3 className="names">Cambia tu carrera</h3>
                    <p>
                      Si has trabajado en la misma industria por muchos años, y
                      estas buscando la forma de darle un giro a tu carrera, la
                      programación puede ser la herramienta que te ayude a
                      lograrlo; ya sea para crear tu propia empresa o
                      convertirte en un desarrollador de tiempo completo.
                    </p>
                    <Link to="/bootcamp">
                      <p className="arrow-i">Empezar → </p>
                    </Link>
                    <span>1</span>
                  </div>
                  <div className="ilustrate-photo">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fpexels-photo-269323.jpeg?alt=media&token=46319af1-7b01-47eb-9a82-602ca2cda967"
                      alt=""
                    />
                  </div>
                </section>
              </div>
              <div>
                <section className="flex-box">
                  <div id="pad">
                    <h3 className="names">Alcanza tus objetivos</h3>
                    <p>
                      Si ya sabes programar pero quieres ampliar tus
                      conocimientos o especializarte para obtener una mejor
                      posición, o si tienes una empresa o puesto de managemente
                      que requiere una línea de comunicación directa con
                      desarrolladores, aprende lo necesario para lograrlo de
                      manera efectiva.
                    </p>
                    <Link to="/bootcamp">
                      <p className="arrow-i">Ver más → </p>
                    </Link>
                    <span>2</span>
                  </div>
                  <div className="ilustrate-photo">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fpexels-photo-1051075.jpeg?alt=media&token=5b3eb252-c207-46ed-a8ac-902ab67ce48f"
                      alt=""
                    />
                  </div>
                </section>
              </div>
              <div>
                <section className="flex-box">
                  <div id="pad">
                    <h3 className="names">Complementa tu educación</h3>
                    <p>
                      Al terminar la universidades, muchos profesionistan
                      sienten que no tienes las habilidades necesarias para
                      cubrir una posición e integrarse a un equipo de
                      desarrollo, así que, si queires adquirir habilidades
                      técnicas que te permitan iniciar tu carrera como
                      desarrollador o product manager, inscríbete ya.
                    </p>
                    <Link to="/bootcamp">
                      <p className="arrow-i">Ir ahora → </p>
                    </Link>
                    <span>3</span>
                  </div>
                  <div className="ilustrate-photo">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fpexels-photo-301926.jpeg?alt=media&token=d48c9409-947e-4af0-81d4-f6949dc51214"
                      alt=""
                    />
                  </div>
                </section>
              </div>
            </Carousel>
          </div>
          <div className="common inf" style={{ alignItems: "center" }}>
            <h2 className="subtitulo">A world class curriculum</h2>

            <div className="flexbox">
              <div className="containers">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="laptop"
                />
              </div>
              <div className="containers">
                <p>
                  {" "}
                  Nuestro equipo de educación prepara un Curriculum adoc a cada
                  herramienta y por cada modalidad, en donde cada uno de
                  nuestros estudiantes pueda aprender las habilidades necesarias
                  para convertirse en desarrollador, y así mejorar sus skills
                  profesionales o conseguir un mejorar trabajo sin importar en
                  donde se encuentre.
                </p>
                <p>
                  Durante cada curso, como alumno, desarrollarás varios
                  proyectos y ejercicios, además de tener acceso a recursos
                  extra que te ayudarán a mejorar e impulsar tu aprendizaje,
                  además de recibir mentoría de nuestros expertos, profesionales
                  del desarollo de software con años de experiencia en el área.
                </p>
              </div>
            </div>
          </div>
          <div className="box-framework">
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
          </div>
        </section>
        <section className="newsletter">
          <h2 style={{ fontFamily: "ProximaRegular" }}>
            ¿Quieres mantenerte al día sobre los próximos cursos y eventos?{" "}
            <br /> Inscríbete a nuestro newsletter
          </h2>
          <br />
          <div>
            <input
              onChange={this.onChange}
              type="email"
              placeholder="contacto@fixter.org"
            />
            <button onClick={this.addToEmailList}>Enviar</button>
          </div>
        </section>

        {/* <section className="slide">
                    <div className="cover">
                        <div className="slogan">
                            <h2>Aprende las <strong>herramientas</strong> y <strong>frameworks</strong> que usan los profesionales de la industria</h2>
                            <p>Cursos, botocamps, eventos y más.
                            </p>
                            <br />
                            <Link to="/bootcamp">
                                <Button ico=">_" text=" Explorar" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="box-framework">
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                        <div className="sticker" />
                    </div>
                    <div className="descript">
                        <h2>¿Qué es FixterGeek? </h2>
                        <p>
                            Es una plataforma única en donde profesionales del desarrollo de software
                            que ofrecen cursos en video sobre herramientas especificas utilizadas en la industria
                            de forma concisa y clara.
                        </p>
                        <p>
                            Tenemos más de 4 años de experiencia impartiendo cursos presenciales, así que buscamos
                            ofrecerte una experiencia única; no encontrarás 10 videos de 1hr cada uno, encontrarás cursos pequeños y concretos.
                        </p>
                        <p>
                            Además, encontrarás bootcamps online,
                            eventos, artículos y libros sobre tecnología.
                        </p>
                        <p>
                            Si eres un <strong>apasionado del código, los bugs y el localhost,</strong>  estas en el lugar correcto.</p>
                        <br />
                        <Link to="/courses">
                            <Button ico="</>" text=" Iniciar" />
                        </Link>
                    </div>
                </section>
                <section className="why">
                    <h2>¿Por qué aprender en Fixter? </h2>
                    <div className="box-why">
                        <div className="card-beneficios">
                            <img src={cuatro} alt="" />
                            <div className="beneficios">
                                <h3>Diversidad</h3>
                                <p>Explora nuestros cursos y bootcamps, y elige el que más te interese.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={tres} alt="" />
                            <div className="beneficios">
                                <h3>Práctica</h3>
                                <p>Toma cada curso a tu ritmo y a tu tiempo. Están siempre disponibles.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt="" />
                            <div className="beneficios">
                                <h3>Asesoría</h3>
                                <p>Ten asesorías sobre el curso directamente de nuestros instructores.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={dos} alt="" />
                            <div className="beneficios">
                                <h3>Certificado</h3>
                                <p>Recibirás un diploma y un pack de stickers como recompensa al terminar.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="destacados">
                    <h2 className="subtitulos">Nuevos Bootcamps</h2>
                    <div className="box-destacados">
                        <CardBootcamp
                            image={pyth}
                            name="Fundamentos de Desarrollo con Python"
                            descript="Aprende a programar con Python, aprende lo necesario sobre el modelo vista controlador"
                            lecciones="45 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-descript"
                            link2="/apply/?b=5dc1db06cd0b842984edca7c"
                            action="Inscribirme"
                        />
                        <CardBootcamp
                            image={web}
                            name="Fundamentos de Desarrollo Web con JavaScript"
                            descript="Aprende a crear y hostear tu propio sitio web con JavaScript"
                            lecciones="74 lecciones"
                            tiempo="7hrs"
                            link="/bootcamp-descript-web"
                            link2="/apply/?b=5d632e4c339a1b379df68a74"
                            action="Inscribirme"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Construye un backend API con NodeJs y ExpressJs "
                            lecciones=" 70 lecciones"
                            tiempo="6hrs"
                            link="/bootcamp-backend-nodejs"
                            link2="/apply/?b=5de52ae9734c4163308b63fd"
                            action="Inscribirme"
                        />


                        <CourseCard image={siete} name="Empezando con Firebase Realtime Database"
                        lecciones="12 lecciones" tiempo="35 minutos"
                        />
                        <CourseCard image={cinco} name="Tu primer aplicación con Firebase"
                                    lecciones="14 lecciones" tiempo="30 minutos"
                        />
                        <CourseCard image={seis} name="Estructura de Datos Complejos con Realtime DB"
                                    lecciones="10 lecciones" tiempo="40 minutos"
                        />
                    </div>
                </section>
                <section className="testimonios">
                    <h2 className="subtitulos">Conoce a nuestros ex-alumnos</h2>
                    <div>
                        <Carousel afterChange={this.onChange} autoplay>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${oscar}')` }}></div>
                                <div className="testimonio ">
                                    <span className="signo">“</span>  <p> "En Fixter aprendí a programar viniendo de un pasado totalmente distinto al desarrollo de tecnología. Desmenuzan los temas de la forma más simple para que sin importar si sabes mucho o poco, comprendas a la perfección cada uno de ellos o simplemente te actualices. Al día de hoy trabajo en esta industria que además de ser divertida, también es bien remunerada. Considero que cualquier persona puede aprender a programar y cambiar su futuro, qué mejor que sea de la mano de alguien profesional como FixterGeek." </p>

                                    <p>— Oscar Villeada</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${carlitos}')` }}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> Tomar un FixterCamp está lejos de ser un simple curso, es un acercamiento a mundo real de la tecnología y las grandes ideas, aprendí de forma práctica y dinámica temas complejos lo cual profesionalizó mi carrera como developer y me impulso a emprender mi propio negocio.</p>
                                    <p>— Carlos Mendoza</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{ backgroundImage: `url('${jorge}')` }}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> Estudie la universidad y puedo decir que el ritmo de aprendizaje no se compara con el que Fixter te puede dar en tan solo unas semanas. Además de aprender tecnologías modernas, los profesores hacen algo más que enseñar y es que todos tienen lo que pocos programadores, calidad humana para compartir sus conocimientos.</p>
                                    <p>— Jorge García</p>
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </section>
                <section className="newsletter">
                    <h2 >¿Quieres mantenerte al día sobre los próximos cursos y eventos? <br /> Inscríbete a nuestro newsletter
                    </h2>
                    <br />
                    <div>
                        <input type="email" placeholder="contacto@fixter.org" />
                        <button>Enviar</button>
                    </div>
                </section>
*/}
      </section>
    );
  }
}
function mapState() {
  return {};
}
export default connect(mapState, { getBootcampsAction })(HomeContainer);
