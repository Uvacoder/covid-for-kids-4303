import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import { Flex, Image, Text } from "rebass"
import Link from "next/link"
import Head from "next/head"

export default ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Flex flexDirection="column" sx={{
                width: "100vw",
                minHeight: "100vh"
            }}>
                <Head>
                    <title>CoviDB 4 Kids</title>
                    <meta name="title" content="CoviDB 4 Kids" />
                    <meta name="description" content="CoviDB 4 Kids is a COVID-19 (a new coronavirus) educational resource database." />


                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://kids.covidb.org" />
                    <meta property="og:title" content="CoviDB 4 Kids" />
                    <meta property="og:description" content="CoviDB 4 Kids is a COVID-19 (a new coronavirus) educational resource database." />
                    <meta property="og:image" content="https://kids.covidb.org/static/preview.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://kids.covidb.org" />
                    <meta property="twitter:title" content="CoviDB 4 Kids" />
                    <meta property="twitter:description" content="CoviDB 4 Kids is a COVID-19 (a new coronavirus) educational resource database." />
                    <meta property="twitter:image" content="https://kids.covidb.org/static/preview.png" />

                </Head>
                <Flex width="100vw" height="70px">
                    <Link href="/">
                        <Image sx={{
                            width: "150px",
                            ":hover": {
                                cursor: "pointer"
                            },
                            ml: "20px",
                            mr: "auto",
                        }} src="../static/Covidb_4_kids.svg" />
                    </Link>
                    <Flex sx={{
                        m: "20px",
                        ml: "auto",
                        my: "auto",
                        pr: "30px",
                        fontWeight: "bold",
                        ":hover": {
                            cursor: "pointer",
                        }
                    }}>
                        <Link href="/about">
                            <Text>About</Text>
                        </Link>
                    </Flex>
                </Flex>
                <Component {...pageProps} />
            </Flex>
        </ThemeProvider>
    )
}