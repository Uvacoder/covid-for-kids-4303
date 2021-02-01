import { Flex, Heading, Text, Image, Link } from "rebass";

const A = ({ sx, ...props }) =>
    <Link
        sx={{
            color: "white",
            transition: "all 0.2s",
            fontStyle: "oblique",
            ":hover": {
                cursor: "pointer",
                textDecorationStyle: "wavy",
            },
            ...sx
        }}
        {...props}
    />

export default () => {
    return (
        <Flex sx={{
            m: "auto",
            px: ["20px", "50px", "100px"],
            py: "10px",
            flexDirection: "column",
            fontWeight: "400"
        }}>
            <Heading fontSize={[4, 5, 6]} mb="10px">About</Heading>
            <Text>Welcome to CoviDB 4 Kids! This is a place where you can learn about different aspects of COVID-19 (a new coronavirus). These videos use simple, effective, and fun ways to provide answers to many common questions that you might have about the virus. So sit back, grab some popcorn, and press play!</Text>
            <Flex height="10px" />
            <Text>CoviDB for Kids is dedicated in memory of Dr. David Katzenstein, a world-class Professor of Medicine/Infectious Diseases at Stanford University. An ardent believer that education was key to solving global health challenges, he was an active volunteer with TeachAids since it's founding in 2009, and helped launch the <A href="https://covidb.org" target="_blank"></A>CoviDB platform. He passed away on January 25, 2021 of COVID-19 in Zimbabwe surrounded by medical staff he had trained and mentored, pursuing his life's mission, which was to eliminate suffering.</Text>
            <Flex height="10px" />
            <Text><A href="https://teachaids.org" target="_blank">TeachAids</A> is an award-winning 501(c)(3) nonprofit social venture that creates breakthrough software addressing numerous persistent problems in health education around the world, including HIV/AIDS, concussion, and COVID-19. A pioneer in developing infectious disease education, TeachAids HIV/AIDS software is used in 82 countries. It has also launched the <A target="_blank" href="http://crashcourse.teachaids.org/">CrashCourse</A> concussion education product suite, which includes research-based applications available online as a standard video and in virtual reality. <A target="_blank" href="https://covidb.org">CoviDB</A> is their third health education initiative, a community-edited platform organizing resources across a comprehensive set of topics relating to COVID-19 for free public use.</Text>
            <Flex py="20px" flexWrap="wrap">
                <Image height="70px" src="https://covidb.org/static/media/spice.1a9a40da.svg" />
                <Image height="60px" src="https://covidb.org/static/media/fsi.d126f8dc.svg" />
                <Image height="60px" src="https://covidb.org/static/media/ucsf.9c093134.svg" />
                <Image ml="25px" height="65px" src="https://covidb.org/static/media/globalhealth.9903103c.svg" />
            </Flex>
            <Flex pb="20px">
                <Image pr="10px" py="5px" src='https://covidb.org/static/media/logo-color.b8efb596.svg' />
                <Flex flexDirection="column">
                    <Text>TeachAids</Text>
                    <Text>514 High Street,</Text>
                    <Text>Suite 5 Palo Alto,</Text>
                    <Text>CA 94301</Text>
                </Flex>
            </Flex>
            <Flex mt="10px" bg="white" height="3px" width="100%" sx={{
                borderRadius: "10px"
            }} />
        </Flex >
    )
}