import { Flex, Heading, Text, Image, Link as A } from "rebass";
import Link from "next/link"
import CategoryCircle from "../components/CategoryCircle";
import Back from "../components/back"

let CategoryCardHover = ({ sx, textM, imageSource, imageWidth, imageHeight, boxMargin, ...props }) =>
    <CategoryCircle sx={{
        transition: "transform .2s",
        ":hover": {
            transform: "scale(1.05)",
            cursor: "pointer"
        },
        border: "10px solid",
        bg: "white",
        height: imageHeight,
        width: imageWidth,
        ...sx
    }} {...props} >
        <Image src={imageSource} sx={{
            width: "100%",
            height: "100%"
        }} m="auto" />
    </CategoryCircle>

export default () => {
    let data = [
        [
            {
                title: "Coronavirus",
                img: "../static/icons/corona.svg",
                color: "#258CD4",
                items: ["i-wWz_SUyb4", "DYkIKU_PcBc", "MVvVTDhGqaA"]
            },
            {
                title: "Social Distancing",
                img: "../static/icons/social.svg",
                color: "#4EB546",
                items: ["hWmuXpKXbvA", "jUmSiLXesKI", "3nQgTywKmvQ"]
            },
            {
                title: "Hand Washing",
                color: "#5995BF",
                img: "../static/icons/hand.svg",
                items: ["JD85FDlxqCs", "pJ-LcPIAcds", "T98gqC-yanU"]
            },
            {
                title: "Face Mask",
                img: "../static/icons/mask.svg",
                color: "#E35F63",
                items: ["lnP-uMn6q_U", "iE6L-4tO-rs", "4KRuP1QGmhU"]
            },
            {
                title: "Learn at Home",
                color: "#EF9C2C",
                img: "../static/icons/learn.svg",
                items: ["Qu07djSvLNg", "9vQnKO_2kKk", "INY3ETimTjg"]
            },
            {
                title: "School and Friends",
                color: "#A33CD9",
                img: "../static/icons/school.svg",
                items: ["iGMJBahJXCo", "dsScsu_s8FY", "yQyEAg6NNV0", "invisible###4e0rcQh8CLc"]
            },
            {
                title: "Feelings",
                img: "../static/icons/mental.svg",
                color: "#3F8B64",
                items: ["csfsiOrfzGc", "bgyI-ZMqfkw", "Cfi4EfQSFMU", "sCObO_Ppies"]
            },
        ], [

            {
                title: "What is the coronavirus?",
                img: "../static/icons/corona.svg",
                color: "#258CD4",
                items: ["i-wWz_SUyb4", "GoXxmzKdick", "r4i4avKYOrw"]
            },
            {
                title: "What is social distancing?",
                img: "../static/icons/social.svg",
                color: "#4EB546",
                items: ["FvTZv31eRp0", "hWmuXpKXbvA", "KXUT62G-IcU", "4ex4H6n_s7w"]
            },
            {
                title: "How and why should I wash my hands?",
                color: "#5995BF",
                img: "../static/icons/hand.svg",
                items: ["JD85FDlxqCs", "pJ-LcPIAcds", "yQn0z6xa8II", "_KirHm_sYfI"]
            },
            {
                title: "Why should I wear a mask?",
                img: "../static/icons/mask.svg",
                color: "#E35F63",
                items: ["lnP-uMn6q_U", "4KRuP1QGmhU", "iE6L-4tO-rs"]
            },
            {
                title: "What can I do to learn at home?",
                color: "#EF9C2C",
                img: "../static/icons/learn.svg",
                items: ["Qu07djSvLNg", "9vQnKO_2kKk", "M2RqSMVEHEk", "v_Pc3UnePZY"]
            },
            {
                title: "What about school, sports, and friends?",
                color: "#A33CD9",
                img: "../static/icons/school.svg",
                items: ["LMBzjaVRChY", "OfvYQAIzp1U", "ILFdr7OBiKQ", "invisible###qw3mZMDAz3E"]
            },
            {
                title: "This is hard, what can I do feel better?",
                img: "../static/icons/mental.svg",
                color: "#3F8B64",
                items: ["csfsiOrfzGc", "bgyI-ZMqfkw", "Cfi4EfQSFMU", "sCObO_Ppies"]
            },
        ], [

            {
                title: "What is the coronavirus?",
                img: "../static/icons/corona.svg",
                color: "#258CD4",
                items: ["5DlOGKpMNs4", "GoXxmzKdick", "r4i4avKYOrw"]
            },
            {
                title: "What is social distancing?",
                img: "../static/icons/social.svg",
                color: "#4EB546",
                items: ["FvTZv31eRp0", "4ex4H6n_s7w", "KXUT62G-IcU"]
            },
            {
                title: "What is hand hygeine?",
                color: "#5995BF",
                img: "../static/icons/hand.svg",
                items: ["JD85FDlxqCs", "S9s5CnQAwL4", "_KirHm_sYfI"]
            },
            {
                title: "Why should I wear a mask?",
                img: "../static/icons/mask.svg",
                color: "#E35F63",
                items: ["lnP-uMn6q_U", "4KRuP1QGmhU", "gqG0BgOT4fk"]
            },
            {
                title: "What can I do to learn at home?",
                color: "#EF9C2C",
                img: "../static/icons/learn.svg",
                items: ["S5XCuzw5Bg8", "tBamk10KFLY", "v_Pc3UnePZY"]
            },
            {
                title: "What about school, sports, and friends?",
                color: "#A33CD9",
                img: "../static/icons/school.svg",
                items: ["LMBzjaVRChY", "0iu5HamseAE", "e9DreF5ddM8", "invisible###2zOdb60RDec", "invisible###TFwRzkm_Wd8"]
            },
            {
                title: "This is hard, what can I do feel better?",
                img: "../static/icons/mental.svg",
                color: "#3F8B64",
                items: ["xzNMABRELPg", "eVEtKAY45Rw", "CVvGvoMRUhk", "AbQSqU3Ofg"]
            },
        ]
    ]
    return (
        <Flex m="auto" width="100%" flexDirection={["column", "column", "row"]}>
            <Back />
            <Flex flex="0.7">
                <Link href={`/videos/0#${data[0][0].title.toLowerCase().split(" ").join("-")}`}>
                    <Flex flexDirection="column" m="auto">
                        <Text m="auto" fontWeight="bold" fontSize={[2, 3, 4]}>Coronavirus</Text>
                        <CategoryCardHover bg="white"
                            textM="Coronavirus"
                            sx={{
                                borderColor: data[0][0].color
                            }}
                            imageSource={data[0][0].img}
                            imageHeight={[215, 215, 180, 280]}
                            imageWidth={[215, 215, 180, 280]} />
                    </Flex>
                </Link>
            </Flex>
            <Flex flex="2" flexWrap="wrap" px="50px">
                {
                    data[0].splice(1, data[0].length - 1).map((section, i) => {
                        return (
                            <>
                                {i == 3 ?
                                    <Flex sx={{
                                        flexBasis: ["0%", "0%", "0%", "100%"],
                                        height: 0
                                    }} />
                                    : null}
                                <Flex m="10px" mx="auto">
                                    <Link href={`/videos/0#${section.title.toLowerCase().split(" ").join("-")}`}>
                                        <Flex flexDirection="column" mx="10px">
                                            <Text fontWeight="bold" m="auto">{section.title}</Text>
                                            <CategoryCardHover bg="white"
                                                textM={section.title}
                                                sx={{
                                                    borderColor: section.color
                                                }}
                                                imageSource={section.img}
                                                imageHeight={[180, 180, 153, 240]}
                                                imageWidth={[180, 180, 153, 240]} />
                                        </Flex>
                                    </Link>
                                </Flex>
                            </>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}