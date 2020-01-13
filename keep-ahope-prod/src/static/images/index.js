export function getImageForEnv(imagePath) {
    if (process.env.NODE_ENV === 'production') {
        return '../images/' + imagePath;
    } else {
        return require('../images/' + imagePath);
        // return require('url-loader?limit=8192!' + './' + imagePath);
    }
}
