import { Flex, Heading, Text, Image, Link as A } from "rebass";


export default () => {
    return (
        <Flex sx={{
            m: "auto",
            px: ["20px", "50px", "100px"],
            py: "10px",
            flexDirection: "column"
        }}>
            <Heading fontSize={[4, 5, 6]} mb="10px">About</Heading>
            <Text>Welcome to CoviDB 4 Kids! This is a place where you can learn about different aspects of COVID-19 (a new coronavirus). These videos use simple, effective, and fun ways to provide answers to many common questions that you might have about the virus. So sit back, grab a buddy and some popcorn, and press play!</Text>
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