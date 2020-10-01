import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Card from "../components/Card"
import Link from "next/link"

let CardHover = ({ sx, ...props }) => <Card sx={{
    transition: "transform .2s",
    ":hover": {
        transform: "scale(1.05)",
        cursor: "pointer"
    },
    bg: "white",
    width: "300px",
    m: "10px",
    mx: ["auto", "auto", "10px"],
    ...sx
}} {...props} />

export default () => {
    return (
        <Flex sx={{
            minHeight: "100vh",
            px: "10px"
        }}>
            <Flex m="auto" flexDirection="column">
                <Heading mb="50px" fontSize={[4, 5, 6]} mx="auto" fontFamily="type">CoviDB <Text as="span" color="primary">For Kids</Text></Heading>
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
                        <CardHover bg="white" width="300px">
                            <Image src="../static/3-5.png" sx={{
                                width: "75px",
                                height: "75px"
                            }} mx="auto" mb="15px" />
                            <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                            <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">3-5</Heading>
                            <Text m="auto">Simple Educational Videos.</Text>
                        </CardHover>
                    </Link>
                    <Link href="/landing6to8">
                        <CardHover bg="white" width="300px">
                            <Image src="../static/6-8.png" sx={{
                                width: "75px",
                                height: "75px"
                            }} mx="auto" mb="15px" />
                            <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                            <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">6-8</Heading>
                            <Text m="auto">Educational Videos and interactive media.</Text>
                        </CardHover>
                    </Link>
                    <CardHover bg="white" width="300px">
                        <Image src="../static/9-12.png" sx={{
                            width: "75px",
                            height: "75px"
                        }} mx="auto" mb="15px" />
                        <Text mx="auto" fontSize={3} fontWeight="300">Age</Text>
                        <Heading mx="auto" fontSize={[4, 5, 6]} fontFamily="type">9-12</Heading>
                        <Text m="auto">Advanced educational tools and interactive experiences for enriched learning.</Text>
                    </CardHover>
                </Flex>

                <Text mx="auto" my="20px">CoviDB For Kids is a Coronavirus educational resource database.</Text>
                <A href="/about" sx={{
                    color: "white",
                    fontWeight: "bold",
                    mx: "auto"
                }}>About</A>
            </Flex>
        </Flex >
    )
}