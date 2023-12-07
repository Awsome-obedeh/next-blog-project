/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com','media.istockphoto.com','images.pexels.com'],
    },

    async rewrites(){
      return [
        {
          source:'/api/auth/session',
          destination:"/api/auth"
        },
      ];
    },
  
}
module.exports = nextConfig

  