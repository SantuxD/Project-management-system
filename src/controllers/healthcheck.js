const ApiResponse  = require("../utils/api-response.js")
const healthCheckController = async (req, res) => {
    try {
        const response = new ApiResponse(200, "Health check successful", { status: "OK" });
        res.status(response.statusCode).json(response);
    } catch (error) {
        const response = new ApiResponse(500, "Internal Server Error");
        res.status(response.statusCode).json(response);
    }
}

module.exports =  healthCheckController;