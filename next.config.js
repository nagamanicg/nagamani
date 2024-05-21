const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;



