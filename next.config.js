module.exports = {
    rewrites:  () => [
        {
            source: "/:path*",
            has: [{key: 'host', type:"host", value: "(?<host>.*)"}],
            destination: "/test/:path*/:host"
        }
    ]
}