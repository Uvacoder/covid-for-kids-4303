import { Flex } from "rebass"

export default ({ sx, ...props }) => <Flex sx={{
    borderRadius: "10px",
    boxShadow: "0px 3px 20px #00000029",
    p: "50px",
    flexDirection: "column",
    ...sx
}} {...props} />