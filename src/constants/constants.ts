export const COOKIE = {
    nameRefreshToken: 'refreshToken',
    maxAgeRefreshToken: 1 * 24 * 60 * 60 * 1000,
};

export const constants = {
    AUTHORIZATION: 'Authorization',
    FRONTEND_URL: 'http://localhost:3000',
    EMAIL_REGEXP: /^.+@[^@]+\.[^@]{2,}$/,

    PHOTO_MAX_SIZE: 2 * 1024 * 1024,
    VIDEO_MAX_SIZE: 20 * 1024 * 1024,

    PHOTOS_MIMETYPES: [
        'image/gif', // .gif
        'image/jpeg', // .jppjpeg.jpeg
        'image/pjpeg', // .jpeg
        'image/png', // .png
        'image/webp', // .webp
    ],

    VIDEO_MIMETYPES: [
        'video/mp4',
        'video/x-msvideo',
    ],
}