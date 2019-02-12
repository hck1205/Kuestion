import NextHead from 'next/head'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || defaultDescription} />
        <link href='/static/css/normalize.css' rel="stylesheet" type='text/css' />
    </NextHead>
)

export default Head
