import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
      '/',
      '/myadverts',
      '/create',
      '/adverts:adID',
      '/api/webhook/clerk',
      '/api/uploadthing'
    ],
    ignoredRoutes: [
      '/myadverts',
      '/create',
      '/adverts:adID',
      '/api/webhook/clerk',
      '/api/uploadthing'
    ]
  });
  export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };

//export { default } from "next-auth/middleware";

//export const config = { matcher: ["/myadverts", "/create", "/settings"] };
