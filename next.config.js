module.exports = {
    rewrites: () => [
        {
            source: "/:path*",
            destination: "/test/:path*"
        }
    ]
}