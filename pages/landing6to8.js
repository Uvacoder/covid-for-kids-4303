import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Card from "../components/Card"
import CategoryCircle from "../components/CategoryCircle";
import CategoryBar from "../components/CategoryBar";

let CategoryBarHover = ({ sx, textM, imageSource, imageWidth, imageHeight, boxMargin, ...props }) =>
    <CategoryBar sx={{
        transition: "transform .2s",
        ":hover": {
            transform: "scale(1.05)",
            cursor: "pointer"
        },
        bg: "white",
        border: "2px solid #EF9C2C",
        m: "15px",
        mx: ["auto", "auto", "10px"],
        ...sx
    }} {...props} >
        <Flex sx={{
            "> *": {
                color: "primary",
                textAlign: "left",
                fontSize: 1,
                fontFamily: "body"
            },
            flexDirection: "row",
            my: "auto"
        }}>
            <Image src={imageSource} sx={{
                width: "40px",
                height: "40px",
                mt: "-20px"
            }} />
            <Text sx={{ mt: "-10px", ml: "25px", fontWeight: "bold" }} color="secondary" fontFamily="body" fontSize="15px">{textM}</Text>
        </Flex>
    </CategoryBar>

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
                        fontSize: 1
                    },
                    mt: "10px",
                    ml: "75px",
                    flexDirection: "row",
                }}>
                    <Flex flexDirection="column" sx={{
                        m: "50px"
                    }}>
                        <CategoryBarHover
                            imageSource="../static/coronavirus.png"
                            textM="What is this coronavirus?"
                        />
                        <CategoryBarHover
                            textM="What is social distancing?"
                            imageSource="../static/image2.png"
                        />
                        <CategoryBarHover
                            textM="What about school, sports and friends?"
                            imageSource="../static/image_distance.png"
                        />
                        <CategoryBarHover
                            textM="This is hard, what can I do to feel better?"
                            imageSource="../static/image_facemask.png"
                        />
                    </Flex>
                    <Flex flexDirection="column" sx={{
                        mt: "50px",
                        ml: "50px",
                    }}>
                        <CategoryBarHover
                            textM="How/Why should I wash my hands?"
                            imageSource="../static/image2.png"
                        />
                        <CategoryBarHover
                            textM="Why should I wear a mask?"
                            imageSource="../static/image_distance.png"
                        />
                        <CategoryBarHover
                            textM="What can I do to learn at home?"
                            imageSource="../static/image_distance.png"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}