import uploadImageR2 from "../utils/uploadImageR2.js";

const uploadR2Controller = async (request, response) => {
    try {
        const file = request.file;

        if (!file) {
            return response.status(400).json({
                message: "No file provided",
                error: true,
                success: false
            });
        }

        const uploadResult = await uploadImageR2(file);

        return response.json({
            message: "Upload done to R2",
            data: uploadResult.url,
            success: true,
            error: false
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default uploadR2Controller;
