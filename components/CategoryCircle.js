import { Flex } from "rebass"

export default ({ sx, ...props }) => <Flex sx={{
    borderRadius: "50%",
    boxShadow: "0px 3px 20px #00000029",
    p: "50px",
    flexDirection: "column",
    border: "20px solid #258CD4",
    opacity: 1,
    ...sx
}} {...props} />