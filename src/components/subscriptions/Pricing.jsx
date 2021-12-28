import * as React from 'react'
import { Card, Switch, Collapse, Spin } from 'antd';
import {
    DropboxOutlined,
    RocketOutlined,
    VideoCameraAddOutlined,
    TeamOutlined,
} from '@ant-design/icons'
import robot from '../../assets/roboGeek.png'
import styles from './pricing.module.css'

const { Panel } = Collapse;

const Plus = () => <span className={styles.pro}>Plus</span>

const Pricing = ({ loading, onYearly, onMonthly }) => {
    const [yearly, setYearly] = React.useState(true)
    const onToggle = (val) => {
        setYearly(val)
    }
    return (
        <div className={styles.container}>
            <h1>
                {yearly ? <p className={styles.pe} >¡Consigue fixter.camp  < Plus />  gratis por 30 días!</p> : <p className={styles.pe}>Aprende a programar ¡hoy mismo!</p>}
            </h1>
            <p className={styles.subtitle}>
                Sube el nivel de tus habilidades técnicas y de programación con cursos avanzados, proyectos reales y mucho más.
            </p>
            <p className={styles.toggle}>
                {!yearly ? <span className={styles.highlighted}>Mensual</span> : 'Mensual'}
                <Switch defaultChecked onChange={onToggle} />
                {yearly ? <span className={styles.highlighted}>Anual</span> : 'Anual'}
                <b className={styles.save}>Ahorra 33%</b>
            </p>
            <Card
                hoverable
                className={styles.card}
            >
                <h2>fixter.camp <Plus /></h2>
                <span>
                    <span className={styles.monthlyPrice} >${yearly ? '199' : '299'}</span>/mes
                </span>
                <p className={styles.extraInfo}>
                    {
                        yearly ?
                            <span><span className={styles.lineThrough} >$3,588</span> $2,189 único pago por 12 meses</span> : <span> pago mensual</span>
                    }
                </p>
                {loading ? <Spin /> : <button
                    onClick={yearly ? onYearly : onMonthly}
                    className={styles.button}>
                    > _ {" "}
                    {yearly ? 'Obtener 30 días gratis' : 'Suscribirme'}

                </button>}
                <div className={styles.icons}>
                    <div className={styles.iconGroup}>
                        <div className={styles.icon}>
                            <DropboxOutlined />
                        </div>
                        {" "}
                        <span>
                            Acceso ilimitado a todos los cursos
                        </span>
                    </div>

                    <div className={styles.iconGroup}>
                        <div className={styles.icon}>
                            <RocketOutlined />
                        </div>
                        {" "}
                        <span>
                            Practíca con ejercicios y proyectos reales
                        </span>
                    </div>

                    <div className={styles.iconGroup}>
                        <div className={styles.icon}>
                            <VideoCameraAddOutlined />
                        </div>
                        {" "}
                        <span>
                            Nuevos cursos agregados mensualmente
                        </span>
                    </div>

                    <div className={styles.iconGroup}>
                        <div className={styles.icon}>
                            <TeamOutlined />
                        </div>
                        {" "}
                        <span>
                            Acceso a toda nuestra comunidad
                        </span>
                    </div>

                </div>
                <img className={styles.mascot} alt="fixter mascot" src={robot} />
            </Card>

            <p className={styles.comment}>
                "Las lecciones son concisas y al grano, haciendo fácil estudiar todos los días incluso cuando estoy muy ocupado"
                <br />
                -- Martin Melo
            </p>
            <h1>Preguntas frecuentes</h1>
            <Collapse style={{ textAlign: 'left', width: '80%' }} defaultActiveKey={['1']}>
                <Panel header="¿Existe alguna pelnalización por cancelar?" key="1">
                    <p>
                        Para nada, no existe ninguna penalización por cancelar tu suscripción PRO, puedes cancelar fixter.camp PRO en cualquier momento y seguirás teniendo acceso el tiempo que ya hayas pagado.
                    </p>
                </Panel>
                <Panel header="¿Cómo funcionan los 30 días gratis?" key="2">
                    <p>
                        Al suscribirte a fixter.camp PRO por pago anual (12 meses) recibes un mes entero grátis, así que solo estarías pagando 11 meses de $199, $2,189 en total
                    </p>
                </Panel>
                <Panel header="¿Cual es la diferencia entre la membresía mensual y la anual?" key="3">
                    <p>
                        fixter.camp PRO está disponible en suscripción mensual y anual, los dos tipos de suscripción te dan acceso ilimitado a todos los cursos, material extra, ejercicios y proyectos reales.
                        La suscripción mensual se renova automáticamente cada mes, mientras que la suscripción anual se renueva automáticamente cada 12 meses.
                    </p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Pricing