import React, { useEffect, useState } from 'react';
import "./Bootcamp.css"
import { CardLessons } from "./CardLessons";
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import { Tabs, Badge, Modal, Button } from 'antd';
import { CardTask } from "./CardTask";
import { connect } from 'react-redux'
import { getBootcampAction } from '../../redux/bootcampDuck'
import Learning from './Learning';
import HomeWork from './HomeWork'
import img from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg"
import { Message } from "./chat/Message";
import { SendMessage } from "./chat/SendMessage";
import moment from 'moment'

let morosos = {
    "5c6a4f9c79c3a60017bbeb65":{
    bootcamp: "5de53a8395ca540017187725",
    },
    "5c6a4f9c79c3a60017bbeb65":{
        bootcamp: "5de52ae9734c4163308b63fd",
        },
    "5c6ee1e4cf592b00174d3463":{
    bootcamp: "5de608400c0a0f0017ee98c5",
    },
    "5c6ee1e4cf592b00174d3463":{
    bootcamp: "5de6091c0c0a0f0017ee98c7",
    },
    "5dcad305c11cd50017524bd9":{
    bootcamp: "5de669ef041cc3001783c5de",
    },
    "5df68fd79e7f3e0017a70d22":{
    bootcamp: "5df691509e7f3e0017a70d24",
    },
    "5df0fd63572f030017c6961c":{
    bootcamp: "5dfe32dd426ab60017e69abe",
    },
    "5c7fe897d9677d001773ab5a":{
    bootcamp: "5e0bb2613fbcbb00175b1588",
    },
    "5e0b94ce3fbcbb00175b1586":{
    bootcamp: "5e0bcc313fbcbb00175b158a",
    },
    "5e0b93f83fbcbb00175b1585":{
    bootcamp: "5e0bd0203fbcbb00175b158c",
    },
    "5e13d447be98b700177b4487":{
    bootcamp: "5e13d630be98b700177b4489",
    },
    "5c760349906239001739c58a":{
    bootcamp: "5e1cff810cc0ec00172ea277",
    },
}

const { TabPane } = Tabs;

function callback(key) {
}
const BD = ({ user, uHomeworks, history, getBootcampAction, subscribed, match, bootcamp = { students: 0, weeks: [{ homeworks: [], learnings: [], itemsOrder: [] }] } }) => {

    let [activeWeek, setActiveWeek] = useState(0)
    let [learning, setLearning] = useState({})
    let [homework, setHomework] = useState({})
    let [modal, showModal] = useState(false)
    let [hModal, showHmodal] = useState(false)
    let [visible, setVisible] = useState(false)

    useEffect(() => {
        // get bootcmp with or without learnings
        let { id } = match.params
        if (id) getBootcampAction(id)
            .then(() => {
                // no habia weeks todavia
                let index = localStorage.activeWeek
                if (index) setActiveWeek(Number(index))
            })

            console.log("el user", user)
            console.log("mugroso", morosos[user._id])
            console.log("bootcamp", id)

        if(morosos[user._id] && morosos[user._id].bootcamp === id && !user.payments.find(p=>p===id)){
            setVisible(true)
        }


    }, [])

    function changeWeek(index) {
        setActiveWeek(index)
        localStorage.activeWeek = index
    }

    function showLearning(item) {
        if (!item || !item.tipo) return
        setLearning(item)
        showModal(true)
    }

    function showHomework(item) {
        if (!item || !item.tipo) return
        setHomework(item)
        showHmodal(true)
    }

    function renderHomeworkCard(item, i) {
        return (
            <CardTask
                uHomework={uHomeworks ? uHomeworks[item._id] : null}
                onClick={() => showHomework(item)}
                week={bootcamp.weeks[activeWeek].title} date="Tarea 1: Setup del entorno de desarrollo [Por subir]" name={item.title} descript="Prework" />
        )
    }

    let learnings = {}
    let order = []
    if (!bootcamp) return null
    if (bootcamp.weeks[activeWeek].learnings) bootcamp.weeks[activeWeek].learnings.forEach(l => learnings[l._id] = l)
    order = bootcamp.weeks[activeWeek].itemsOrder
    let homeworks = bootcamp.weeks[activeWeek].homeworks
    return (
        <section className="camp">
            <div className="camp-descript">
                <div className="camp-info">
                    <div className="camp-banner" style={{ backgroundImage: `url(${img})` }}>

                    </div>
                    <div className="camp-avatar">
                        <img src={js} alt="logo-javascript" />
                    </div>
                    <div style={{ padding: "0 4%" }}>
                        <h3>Bootcamp Online: {bootcamp.title}</h3>
                        <p>{bootcamp.description} ⚛️</p>
                        <p> <FontAwesome name="user" /> {bootcamp.students.length + 195} Estudiantes</p>
                        <p> <FontAwesome name="calendar" /> 5 semanas </p>
                        <p> <FontAwesome name="file" /> Exámen final  </p>
                        {subscribed ? <button className="btn-in">Inscrito</button> : <button onClick={() => history.push('/apply')} className="btn-in">Inscríbete</button>}
                    </div>
                </div>
                <div className="camp-dates">
                    {bootcamp.weeks.map((w, i) => {
                        let available = moment(w.startDate) < moment()
                        return (
                            <div
                                onClick={() => changeWeek(i)}
                                className={available ? activeWeek === i ? "camp-dates-week active" : "camp-dates-week" : "deactivated"}
                                key={i} >
                                <p>
                                    {w.title}
                                </p>
                                {available ? <FontAwesome name="chevron-right" /> : <FontAwesome name="lock" />}
                            </div>
                        )
                    })}


                </div>
            </div>
            <div className="camp-task">
                <Tabs defaultActiveKey="1" onChange={callback} >
                    <TabPane tab="Lecciones" key="1">
                        <div id="tp" className="summary">
                            <p className="textos">El Bootcamp tiene una duración de 5 semanas. ¡Recuerda! Semanalmente se liberará
                                el contenido correspondiente, por lo que aunque siempre tendrás acceso a las lecciones en video, no podrás subir tus tareas
                                al terminar la semana.
                            </p>
                            <div className="box-lessons">
                                {order.map((id, i) => {
                                    let text = "Semana del " + moment(bootcamp.weeks[activeWeek].startDate).format('ll') +
                                        " al " + moment(bootcamp.weeks[activeWeek].endDate).format('ll')
                                    return <CardLessons
                                        onClick={() => showLearning(learnings[id])}
                                        week={`Lección ${i + 1}`}
                                        date={text}
                                        name={learnings[id] && learnings[id].title}
                                        descript={bootcamp.weeks[activeWeek].title} />

                                })}

                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab={<Badge count={homeworks && homeworks.length} >Tareas -</Badge>} key="2">
                        <div className="box-lessons"
                            style={{ flexWrap: "wrap", display: "flex", padding: " 1% 2%" }}>
                            {homeworks && homeworks.map(renderHomeworkCard)}
                        </div>
                    </TabPane>
                    {/* <TabPane style={{ paddingLeft: 20 }} tab="Recursos" key="3">
                        Esta semana no cuenta con recursos extra
                    </TabPane>
                    <TabPane className="tab-pad" tab="Ayuda" key="4">
                        <p>
                            Recibe ayuda relacionada a la semana activa del bootcamp directamente de un miembro de nuestro equipo.
                        </p>
                        <br/>
                      {/*  <section className="window-chat">
                            <div className="fix">
                                <Message/>
                            </div>
                            <div >
                                <SendMessage/>
                            </div>
                        </section>*/}
                    {/* </TabPane> */}

                    {activeWeek === 4 && <TabPane style={{ paddingLeft: 20, textAlign: "center" }} tab={<Badge count={"new"} >Examen -</Badge>} key="5">
                        <p>Completa el examen que se promediará con tus tareas para que puedas obtener tu certificado</p>
                        <h3
                            onClick={() => history.push(`/exam/${bootcamp._id}`)}
                            style={{
                                padding: 30,
                                color: "red",
                                textAlign: "center",
                                cursor: "pointer"
                                // border: "2px dashed red"
                            }} >
                            Resuelve tu examen aquí, o imprime tu certificado 📈
                            </h3>
                    </TabPane>}

                </Tabs>




            </div>
            <Learning

                onOk={() => showModal(false)}
                learning={learning}
                visible={modal} />
            <HomeWork onOk={() => showHmodal(false)}
                homework={homework}
                visible={hModal} />


<Modal
onCancel={()=>history.push('/profile')}
visible={visible}
footer={<Button onClick={()=>history.push("/preorder")} type="danger">Pagar</Button>}
>
<h2> ¡Hey! El momento de pagar el bootcamp ha llegado</h2>
<p> Esperamos que estes disfrutando del Bootcamp, y recuerda, si tienes alguna duda siempre puedes ponerte en contacto con nosotros.</p>
<br/>
<img style={{opacity:".3", width:"40%", marginLeft:"30%"}} src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fpay.png?alt=media&token=e17aef6d-014a-4c07-807b-652312295388" />
</Modal>

        </section>
    );
};

function mapState({ user, user: { homeworks }, bootcamps: { object } }, { match: { params: { id } } }) {
    let bootcamp = object[id]
    let subscribed = bootcamp ? bootcamp.weeks[0].learnings ? true : false : false
    if(!user.payments) user.payments = []
    return {
        user,
        bootcamp,
        subscribed,
        uHomeworks: homeworks
    }
}

export const BootcampDetail = connect(mapState, { getBootcampAction })(BD)

