export default () => {
    if (typeof window == "undefined") return <p>no ssr</p>
    window.location = "/"
}