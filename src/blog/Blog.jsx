import { Card } from 'antd'
import * as React from 'react'

import styles from './blog.module.css'

const { Meta } = Card;

const posts = [
    {
        title: 'Comenzando con animaciones en canvas',
        slug: 'comenzando_con_animaciones_en_canvas',
        img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/introduccion-a-canvas-de-html5-t1.png',
        description: 'En vez de colocar la etiqueta `canvas` y sus atributos directamente en el archivo `.html`, vamos a hacerlo con el archivo de JavaScript `.js`'
    },
]

const PostCard = ({ title, slug, img, description, onClick }) => <Card
    style={{ maxWidth: 360 }}
    hoverable
    onClick={onClick}
    cover={<img loading="lazy" alt="blog post" src={img} />}
>
    <Meta title={title} description={description} />
</Card>

const Blog = ({ history }) => {
    const redirectToPost = (slug) => {
        if (slug) { history.push(`/blog/${slug}`) }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Fixter Blog. Aprende algo nuevo hoy.</h1>
            <div className={styles.blogList}>
                {posts.map(post => <PostCard onClick={() => redirectToPost(post.slug)} {...post} />)}
            </div>
        </div>
    )
}

export default Blog