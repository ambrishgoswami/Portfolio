const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'instagram.flko9-1.fna.fbcdn.net']
  }
}



// const withFonts = require('next-fonts');
// module.exports = withFonts({
//   enableSvg: true,
//   webpack(config, options) {
//     return config;
//   }
// });
