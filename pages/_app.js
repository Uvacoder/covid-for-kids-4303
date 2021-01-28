import React, { useState, useEffect } from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import { Flex, Image, Text } from "rebass"
import Link from "next/link"

export default ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Flex flexDirection="column" sx={{
                width: "100vw",
                minHeight: "100vh"
            }}>
                <Flex width="100vw">
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