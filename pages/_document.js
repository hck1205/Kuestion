import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head title={"EXPATIK"} description={"kpop, kdrama, k-pop, k-darama"}>
                    <link rel="icon" href="/static/img/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}