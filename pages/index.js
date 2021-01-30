import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Card from "../components/Card"
import Link from "next/link"
import Head from "next/head"

let CardHover = ({ sx, ...props }) => <Card sx={{
    transition: "transform .2s",
    ":hover": {
        transform: "scale(1.05)",
        cursor: "pointer"
    },
    bg: "white",
    width: ["300px", "300px", "30vw"],
    height: ["auto", "auto", "50vh"],
    m: "10px",
    mx: ["auto", "auto", "10px"],
    ...sx
}} {...props} />

export default () => {
    return (
        <Flex sx={{
            px: "10px"
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,300;0,500;0,700;1,400;1,500&display=swap" rel="stylesheet" />
            <style jsx global>{`
            @font-face {
                font-family: 'AmericanTypewriter';
                src: url('/static/fonts/American Typewriter Regular.ttf');
            }
            html,body,#__next {
                width: 100%;
                margin: 0px;
                padding: 0px;
                overflow-x: hidden;
            }
            ::-webkit-scrollbar-track {background: transparent !important}
            `}</style>
            <Flex m="auto" flexDirection="column">
                <Image sx={{
                    width: ["200px", "400px"],
                    mx: "auto"
                }} src="../static/Covidb_4_kids.svg" />
                <Text mx="auto" fontWeight="bold">Select your age group</Text>
                <Flex sx={{
                    "> *": {
                        color: "secondary",
                        textAlign: "center",
                        fontSize: 1
                    },

                    flexWrap: "wrap"
                }}>
                    <Link href="/landing3to5">
                        <CardHover bg="white" >
                            <Image src="../static/3-5.svg" sx={{
                                width: "40%"
                            }} mx="auto" mb="15px" />
                            <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                            <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">3-5</Heading>
                            <Text m="auto">Simple Educational Videos.</Text>
                        </CardHover>
                    </Link>
                    <Link href="/landing6to8">
                        <CardHover bg="white" >
                            <Image src="../static/6-8.svg" sx={{
                                width: "40%"
                            }} mx="auto" mb="15px" />
                            <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                            <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">6-8</Heading>
                            <Text m="auto">Educational Videos and interactive media.</Text>
                        </CardHover>
                    </Link>
                    <Link href="/landing9to12">
                        <CardHover bg="white" >
                            <Image src="../static/9-12.svg" sx={{
                                width: "40%"
                            }} mx="auto" mb="15px" />
                            <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                            <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">9-12</Heading>
                            <Text m="auto">Advanced educational tools and interactive experiences for enriched learning.</Text>
                        </CardHover>
                    </Link>
                </Flex>

                <Text textAlign="center" mx="auto" mt="30px">CoviDB 4 Kids is a COVID-19 (a new coronavirus) educational resource database.</Text>
            </Flex>
        </Flex >
    )
}