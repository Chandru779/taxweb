import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Evo Tax"}
                </title>
            </Head>
        </>
    )
}

export default PageHead