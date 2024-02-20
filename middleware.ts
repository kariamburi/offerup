import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
      '/',
      '/adverts',
      '/api/webhook/clerk',
      '/api/uploadthing'
    ],
    ignoredRoutes: [
      '/myadverts',
      '/api/webhook/clerk',
      '/api/uploadthing'
    ]
  });
  export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };

//export { default } from "next-auth/middleware";

//export const config = { matcher: ["/myadverts", "/create", "/settings"] };
