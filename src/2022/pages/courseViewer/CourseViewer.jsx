import * as React from 'react'
import classNames from 'classnames'
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Button, Divider } from 'antd'
import { Nav } from '2022/parts/nav'
import { useSelector } from 'react-redux'

import rocket from 'assets/rocket.png'
import blissito from 'assets/Jk6JaJzJ_400x400.jpg'
import colorRobot from 'assets/icons/colorRobot.svg'

import styles from './CourseViewer.module.css'
import Instructor from '2022/primitives/Instructor'
import { Footer } from '2022/parts/footer'



const CodeBlock = ({ language = "javascript", value }) => (
    <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
);


const fullDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eros, morbi morbi massa aenean tortor gravida ultrices consectetur. Mollis sodales in ut risus vel accumsan, mauris, tempus magna. Et vel scelerisque leo, duis. Gravida arcu sollicitudin tincidunt varius. Blandit aliquam eu, pulvinar volutpat lectus in molestie sit dapibus. Quam eget suspendisse adipiscing massa diam pellentesque mi. Tristique suspendisse arcu rutrum vitae, lectus eleifend sed arcu.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra`

const marky = `
## Inicializar una carpeta para ser trackeada por git
Iniciamos nuestra carpeta con el comando init

        git init

estro creara un archivo oculto.git
## Configuramos nuestros datos de autor
configuramos nuestro usuario global

        git config --global user.name
        git config --global user.email

de esta forma cada que hagamos un commit estos datos serán utilizados
## Trackear archivos
podemos agregar archivos especificos

        git add app.js

`

const Title = ({ title }) => (
    <div>
        <h1 className={classNames(styles.title)}>
            {title}
        </h1>
        <div className={styles.divider}></div>
    </div>
)

const ListItem = ({
    index,
    title,
    time,
    active = index === 0
}) => (
    <div className={classNames(styles.listItem, {
        [styles.activeItem]: active,
    })}>
        <div className={classNames(styles.itemChild1)}>
            <span>
                {index + 1}
            </span>
            <p>
                {title}
            </p>
        </div>
        <span>
            {time}
        </span>
    </div>
)

const VideoList = ({ items = [{
    title: 'Presentación',
    time: '2min 3s',
},
{
    title: 'Introducción a la programación',
    time: '2min 3s',
},
{
    title: 'Configuración del ambiente de desarrollo',
    time: '5 min 31 s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
},
{
    title: 'HTML, CSS y JavaScript',
    time: '2min 3s',
}
] }) => (
    <div>
        {items.map((item, index) => <ListItem key={index} {...item} index={index} />)}
    </div>
)

const VideoContainer = () => (
    <div className={classNames(styles.videoContainer)}>
        <div className={classNames(styles.child1)}>
            <iframe
                height="520"
                width="100%"
                src="https://player.vimeo.com/video/215490424?h=675722509e"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen></iframe>
        </div>
        <div className={classNames(styles.child2)}>
            <VideoList />
        </div >
    </div >
)

const VideoInfo = ({
    title = "Presentación",
    instructor = { name: 'HéctorBlisS', avatar: blissito },
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor orci nulla neque consequat vel, adipiscing nullam bibendum imperdiet. Felis pellentesque massa eget ut. Pellentesque mauris neque feugiat tellus. Integer eleifend magnis justo hendrerit posuere ac id parturient diam. Felis, egestas neque in platea diam rutrum. Dolor amet, ridiculus ornare fermentum pulvinar. Euismod quam fames lectus venenatis. Natoque risus hac aliquam nec phasellus feugiat tortor. Egestas condimentum eget venenatis aliquam fermentum, metus, sed sit quisque.',
}) => (
    <div className={classNames(styles.videInfoContainer)}>
        <span className={classNames(styles.videInfoTitle)}>{title}</span>
        <Instructor variant="share" {...instructor} />
        <p>
            {description}
        </p>
        <button className={styles.blackButton}>
            {"> _ "} Ver código
        </button>
        <Divider />
        <ReactMarkdown
            children={marky}
        />
    </div>
)

const CourseViewer = () => {
    const aprender = 'lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato'
    return (<>
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 160,
            paddingBottom: 100,
            maxWidth: 1400,
            margin: '0 auto',
            gap: 48,
        }}>
            <Nav />
            <Title title={'Fundamentos de Programación con Python'} />
            <VideoContainer />
            <VideoInfo />
        </section>
        {/* <Footer /> */}
    </>
    )
}

export default CourseViewer