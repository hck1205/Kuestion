import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head title={"EXPATIK"} description={"kpop, kdrama, k-pop, k-darama"}>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/static/img/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}