import BannerModel from "../models/banner.model.js";

export const addBannerController = async (req, res) => {
    try {
        const { imageUrl, mobileImageUrl, link } = req.body;

        if (!imageUrl || !mobileImageUrl) {
            return res.status(400).json({
                message: "Images are required",
                error: true,
                success: false
            });
        }

        const payload = {
            imageUrl,
            mobileImageUrl,
            link
        };

        const banner = new BannerModel(payload);
        const save = await banner.save();

        return res.json({
            message: "Banner added successfully",
            success: true,
            error: false,
            data: save
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

export const getBannersController = async (req, res) => {
    try {
        const data = await BannerModel.find({ isActive: true }).sort({ createdAt: -1 });

        return res.json({
            message: "Banners fetched successfully",
            success: true,
            error: false,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

export const deleteBannerController = async (req, res) => {
    try {
        const { _id } = req.body;

        const deleteBanner = await BannerModel.deleteOne({ _id });

        return res.json({
            message: "Banner deleted successfully",
            success: true,
            error: false,
            data: deleteBanner
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};
