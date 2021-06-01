export default function handler(req, res) {
    if (req.method === "GET") return get(req,res)
    if (req.method === "PATCH") return patch(req,res)
    res.status(400).json({message: "Unsupported"})
}

function patch(req, res) {
    res.status(200).json({patch: "Hello world"})
}

function get(req, res) {
    res.status(200).json({get: "Hello world"})
}