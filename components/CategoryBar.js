import { Flex } from "rebass"

export default ({ sx, ...props }) => <Flex sx={{
    borderRadius: "89px",
    boxShadow: "0px 3px 20px #00000029",
    p: "28px",
    flexDirection: "column",
    width: "450px",
    height: "5px",
    opacity: 1,
    ...sx
}} {...props} />