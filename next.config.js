const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
     unoptimized: true, 
    domains: ['res.cloudinary.com', 'media.dev.to','media2.dev.to', ]
  }
}



// const withFonts = require('next-fonts');
// module.exports = withFonts({
//   enableSvg: true,
//   webpack(config, options) {
//     return config;
//   }
// });

// const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media2.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'instagram.flko9-1.fna.fbcdn.net',
//         pathname: '**',
//       },
//     ],
//   },
// }
