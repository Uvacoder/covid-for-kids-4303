import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Card from "../components/Card"
import CategoryCircle from "../components/CategoryCircle";
import CategoryBar from "../components/CategoryBar";
import data from "../components/data/data"
import Link from "next/link";
import Back from "../components/back"

let CategoryBarHover = ({ sx, textM, imageSource, imageWidth, imageHeight, boxMargin, colorBorder, ...props }) =>
    <CategoryBar sx={{
        transition: "transform .2s",
        ":hover": {
            transform: "scale(1.05)",
            cursor: "pointer"
        },
        bg: "white",
        border: `4px solid ${colorBorder}`,
        m: "15px",
        mx: ["auto", "auto", "auto"],
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
                height: "40px",
                p: "2px"
            }} />
            <Text sx={{ ml: "25px", my: "auto", fontWeight: "bold" }} color="secondary" fontFamily="body" fontSize="15px">{textM}</Text>
        </Flex>
    </CategoryBar>

export default () => {
    return (
        <Flex sx={{
            px: "30px",
            width: "100vw",
            height: "100%",
            my: 'auto'
        }}>
            <Back />
            <Flex flexDirection="column" my="auto">
                <Flex sx={{
                    "> *": {
                        color: "primary",
                        fontSize: 1
                    },
                    mt: "10px",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {data[2].map((section, i) => {
                        return (
                            <>
                                {i % 2 == 0 ?
                                    <Flex sx={{
                                        flexBasis: ["0%", "0%", "0%", "100%"],
                                        height: 0
                                    }} />
                                    : null}
                                <Link href={`/videos/2#${section.title.toLowerCase().split(" ").join("-")}`}>
                                    <CategoryBarHover
                                        imageSource={section.img}
                                        textM={section.title}
                                        colorBorder={section.color}
                                    />
                                </Link>
                                {i % 2 == 0 && i == data[1].length - 1 ? <Flex width="450px" mx="auto" /> : null}
                            </>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}