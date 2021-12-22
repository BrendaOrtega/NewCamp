import * as React from 'react'
import LearningNoModal from '../bootcamp/LearningNoModal'

import url from './challengeLearning.md'

const DiciplineChallenge = () => {
    const [description, setDescription] = React.useState(null)
    React.useEffect(() => {
        fetch(url).then((response) => response.text()).then((text) => {
            console.log(text)
            setDescription(text)
        })
    }, [])

    return (<div style={{
        width: '60%',
        margin: '0 auto',
        padding: '100px 0',
    }}>
        <LearningNoModal
            learning={{
                title: "Blisso",
                description,
            }}
            visible={true}
        />
    </div>
    )
}

export default DiciplineChallenge