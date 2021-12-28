import * as React from 'react'
import ReactMarkdown from "react-markdown/with-html";
import SyntaxHighlighter from "react-syntax-highlighter";

import styles from './blog.module.css'

const CodeBlock = ({ language = "javascript", value }) => (
    <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
);

const BlogReader = ({ match }) => {
    const [post, setPost] = React.useState('')
    const [title, setTitle] = React.useState('Fixter Blog, Aprende algo nuevo hoy')
    const { slug } = match.params

    const getFile = () => {
        try {
            const url = require(`./posts/${slug}.md`)
            fetch(url).then((response) => response.text()).then((text) => {
                const t = text.split(/\n/)[0]
                setPost(text.replace(t, ''))
                setTitle(t.replace('#', ''))
            })
        } catch (err) {
            setPost('<h1>404 No encontramos el post que buscas U_U</h1> \n <img width="100%" src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadson.dk%2Fwp-content%2Fuploads%2F2020%2F08%2F404.png&f=1&nofb=1 alt="404" />')
        }
    }

    React.useEffect(() => {
        getFile()
    }, [])

    return <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.reader}>
            <ReactMarkdown
                renderers={{
                    code: CodeBlock,
                }}
                source={post}
                escapeHtml={false}
            />
        </div>

    </section>
}


export default BlogReader