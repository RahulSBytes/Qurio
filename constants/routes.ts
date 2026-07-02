const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION : "/ask-question",
  COLLECTION: "/collection",
  COMMUNITY: "/community",
  TAGS: "/tags",
  JOBS: "/jobs",
  PROFILE : (id:string) => `/profile/${id}`,
  TAG: (id:string) => `/tags/${id}`,
  QUESTION: (id:string) => `/question/${id}`,
  
};


export default ROUTES;