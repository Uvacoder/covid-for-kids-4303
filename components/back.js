import { useRouter } from "next/router"
import { Flex, Image } from "rebass"

export default () => {
    const router = useRouter()
    return (<Flex id="backButt" sx={{
        width: "50px",
        height: "50px",
        position: "fixed",
        left: "40px",
        bottom: "20px",
        transition: "all 0.2s",
        borderRadius: "50%",
        borderColor: "primary-blue",
        borderStyle: "solid",
        borderWidth: "4px",
        ":hover": {
            cursor: "pointer",
            transform: "scale(1.1)"
        }
    }} onClick={() => router.back()}>
        <Image src="/static/Back Arrow.svg" />
    </Flex>)
}