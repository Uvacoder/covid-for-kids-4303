import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Card from "../components/Card"
import CategoryCircle from "../components/CategoryCircle";

let CategoryCardHover = ({ sx, textM, imageSource, imageWidth, imageHeight, boxMargin, ...props }) =>
    <CategoryCircle sx={{
        transition: "transform .2s",
        ":hover": {
            transform: "scale(1.05)",
            cursor: "pointer"
        },
        border: "10px solid #258CD4",
        bg: "white",
        height: "165px",
        width: "165px",
        m: "10px",
        mx: ["auto", "auto", "10px"],
        ...sx
    }} {...props} >
        <Image src={imageSource} sx={{
            width: { imageWidth },
            height: { imageHeight }
        }} m="auto" />
    </CategoryCircle>

export default () => {
    return (
        <Flex sx={{
            minHeight: "100vh",
            px: "30px"
        }}>
            <Flex flexDirection="column">
                <Heading mt="20px" mb="50px" fontSize={[1, 2, 3]} fontFamily="type">CoviDB <Text as="span" color="primary">For Kids</Text></Heading>
                <Flex sx={{
                    "> *": {

                        color: "primary",
                        textAlign: "center",
                        fontSize: 1
                    },
                    mt: "10px",
                    flexDirection: "row",
                }}>
                    <Flex flexDirection="column" sx={{
                        mt: "50px",
                        ml: "50px",
                        mr: "100px"
                    }}>
                        <Text as="span" color="white" fontSize={[2, 3, 4]}>Coronavirus</Text>
                        <CategoryCardHover
                            ml="155px"
                            bg="white"
                            width="250px"
                            height="250px"
                            imageSource="../static/coronavirus.png"
                            imageHeight="130px"
                            imageWidth="130px" />
                    </Flex>

                    <Flex flexDirection="column">
                        <Flex sx={{
                            "> *": {
                                color: "white",
                                textAlign: "center",
                                fontSize: 3
                            },
                            flexDirection: "row",
                            m: "auto"
                        }}>
                            <Flex flexDirection="column" sx={{
                                mr: "45px"
                            }}>
                                <Text as="span" >Hand Washing</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="HandWashing"
                                    border="10px solid #4EB546"
                                    imageSource="../static/image2.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />
                            </Flex>
                            <Flex flexDirection="column" sx={{
                                mr: "45px"
                            }}>
                                <Text as="span" >Social Distancing</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="Social Distancing"
                                    imageSource="../static/image_distance.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />
                            </Flex>
                            <Flex flexDirection="column" sx={{
                                mr: "45px"
                            }}>
                                <Text as="span">Face Mask</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="FaceMask"
                                    imageSource="../static/image_facemask.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />
                            </Flex>
                        </Flex>
                        <Flex sx={{
                            "> *": {
                                color: "white",
                                textAlign: "center",
                                fontSize: 3
                            },
                            flexDirection: "row",
                        }}>
                            <Flex flexDirection="column" sx={{
                                mt: "20px",
                                mr: "45px"
                            }}>
                                <Text as="span" >School & Friends</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="HandWashing"
                                    imageSource="../static/image2.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />
                            </Flex>
                            <Flex flexDirection="column" sx={{
                                mt: "20px",
                                mr: "45px"
                            }}>
                                <Text as="span" >Learn At Home</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="Social Distancing"
                                    imageSource="../static/image_distance.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />

                            </Flex>
                            <Flex flexDirection="column" sx={{
                                mt: "20px",
                                mr: "45px"
                            }}>
                                <Text as="span">Mental Health</Text>
                                <CategoryCardHover
                                    bg="white"
                                    textM="Coronavirus"
                                    imageSource="../static/Image 68.png"
                                    imageHeight="94px"
                                    imageWidth="100px" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}