import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import CategoryCircle from "../../components/CategoryCircle"
import data from "../../components/data/data"
import Card from "../../components/Card"
import { Flex, Text, Image, Box } from "rebass"
import tinycolor from "tinycolor2"
import theme from "../../components/theme"
import YoutubeVideo from "../../components/youtube"
import { X } from 'react-feather';
import Back from "../../components/back"

let CategoryCard = ({ sx, textM, imageSource, imageWidth, imageHeight, boxMargin, ...props }) =>
    <CategoryCircle sx={{
        border: "10px solid",
        bg: "white",
        height: "165px",
        width: "165px",
        ...sx
    }} {...props} >
        <Image src={imageSource} sx={{
            width: { imageWidth },
            height: { imageHeight }
        }} m="auto" />
    </CategoryCircle>

const Videos = ({ ageRange }) => {
    console.log(ageRange)
    let [popup, setPopup] = useState({ url: null })
    return (
        <Flex flexDirection="column">
            <Back />
            {data[ageRange] ?
                data[ageRange].map((section, n) => {
                    return (
                        <Flex width="100vw" id={section.title.toLowerCase().split(" ").join("-")} >
                            {ageRange != 0 ? (<Flex width="35px" bg={section.color} />) : null}
                            <Flex flexGrow={1} bg={ageRange == 0 ? section.color : "white"} color={ageRange == 0 ? null : "black"} flexDirection="row" flexWrap="wrap" p={["10px", "20px", "30px"]}>
                                <Flex sx={{
                                    flex: [null, null, 1],
                                    textAlign: "center",
                                    flexDirection: "column",
                                    mx: "auto"
                                }}>
                                    <Text mx="auto" my="10px" fontWeight="bold" fontSize={[2, 3, 4]}>{section.title}</Text>
                                    <CategoryCard
                                        sx={{
                                            mx: "auto",
                                            bg: "white",
                                            width: "250px",
                                            height: "250px",
                                            borderColor: tinycolor(section.color ? section.color : theme.colors.background).darken(20).toString()
                                        }}
                                        imageSource={section.img}
                                        imageHeight="130px"
                                        imageWidth="130px" />
                                </Flex>
                                <Flex sx={{
                                    flexDirection: "column",
                                    flex: [null, null, 2, 3],
                                    mx: "auto"
                                }}>
                                    {section.items.map((video, i) => {
                                        if (video.includes("invisible###")) {
                                            return
                                        }
                                        return (
                                            <>
                                                <Card id={`${n}-${i}`} my="20px" ml={[null, null, "10vw"]} mx={["auto", "auto", null, null]} sx={{
                                                    overflow: "hidden",
                                                    p: 0,
                                                    width: ["80vw", "373px", "504px"],
                                                    height: ["190px", "210px", "282px"]
                                                }}>
                                                    <YoutubeVideo style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }} id={video} s={0} />
                                                    <Box sx={{
                                                        position: "absolute",
                                                        width: ["373px", "504px"],
                                                        height: ["210px", "282px"],
                                                        ":hover": {
                                                            cursor: "pointer"
                                                        }
                                                    }} onClick={() => {
                                                        setPopup({
                                                            url: video,
                                                            item: [n, i]
                                                        })
                                                    }} />
                                                </Card>
                                            </>
                                        )
                                    })}
                                </Flex>
                            </Flex>
                        </Flex>
                    )
                }) : null
            }
            {
                popup.url == null ? null :
                    <Flex sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.7);",
                        p: 0,
                        m: 0,
                        position: "fixed",
                        top: 0,
                        left: 0
                    }} onClick={function (e) {
                        setPopup({
                            url: null
                        })
                    }}>
                        <Flex height={(Math.max(
                            document.body.scrollWidth,
                            document.documentElement.scrollWidth,
                            document.body.offsetWidth,
                            document.documentElement.offsetWidth,
                            document.documentElement.clientWidth
                        ) * 0.7) * 282 / 504 + 70} sx={{
                            ml: "auto",
                            my: "auto",
                            mr: "5px"
                        }}>
                            <Flex sx={{
                                mb: "auto",
                                color: "grey",
                                transition: "0.3s all",
                                ":hover": {
                                    cursor: "pointer",
                                    color: "red"
                                }
                            }}>
                                <X size={30} />
                            </Flex>
                        </Flex>
                        <div style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginRight: "auto",
                            width: "70vw",
                            backgroundColor: "grey",
                            height: (Math.max(
                                document.body.scrollWidth,
                                document.documentElement.scrollWidth,
                                document.body.offsetWidth,
                                document.documentElement.offsetWidth,
                                document.documentElement.clientWidth
                            ) * 0.7) * 282 / 504
                        }}>
                            <YoutubeVideo onEnd={player => {
                                if (data[0][popup.item[0]].items.length == popup.item[1] + 1) {
                                    popup.url = data[0][popup.item[0]].items[0]
                                    popup.item[1] = 0
                                } else {
                                    popup.item[1] += 1
                                    popup.url = data[0][popup.item[0]].items[popup.item[1]]
                                }
                                player.loadVideoById(popup.url.includes("invisible###") ? popup.url.split("invisible###")[1] : popup.url)
                            }} id={popup.url} s={1} />
                        </div>
                    </Flex>
            }
        </Flex >
    )
}
export let getStaticProps = ({ params }) => {
    return { props: { ageRange: params.ageRange } }
}
export function getStaticPaths() {
    return {
        paths: [
            { params: { ageRange: "0" } },
            { params: { ageRange: "1" } },
            { params: { ageRange: "2" } }
        ],
        fallback: false
    }
}

export default Videos;