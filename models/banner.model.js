import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        default: ""
    },
    mobileImageUrl: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const BannerModel = mongoose.model('banner', bannerSchema)

export default BannerModel
