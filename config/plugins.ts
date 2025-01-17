export default ({env}) => ({
    //* cloudinary
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {
                    folder: env("CLOUDINARY_FOLDER", ""),
                },
                delete: {},
            },
        },
    },

    //* GRAPHQL
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 10,
            amountLimit: 100,
        }
    },
});
