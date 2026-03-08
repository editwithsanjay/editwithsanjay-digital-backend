import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

const r2Client = new S3Client({
    region: "auto",
    endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
    credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
    }
});

const uploadImageR2 = async (file) => {
    try {
        if (!file) {
            return null;
        }

        const fileName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;

        const command = new PutObjectCommand({
            Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
            Key: `products/${fileName}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        });

        await r2Client.send(command);

        // Construct the public URL
        // Example: https://pub-xxx.r2.dev/products/123-image.png
        const publicUrl = `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/products/${fileName}`;

        return {
            url: publicUrl,
            name: fileName
        };
    } catch (error) {
        console.error("R2 Upload Error:", error);
        throw error;
    }
};

export default uploadImageR2;
