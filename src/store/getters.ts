const getters: any = {
  // app
  sidebar: (state:any) => state.app.sidebar,
  device: (state:any) => state.app.device,
  size: (state:any) => state.app.size,
  // errorLog
  logs: (state:any) => state.errorLog.logs,
  // permission
  routes: (state:any) => state.permission.routes,
  addRoutes: (state:any) => state.permission.addRoutes,
  // tagsView
  visitedViews: (state:any) => state.tagsView.visitedViews,
  cachedViews: (state:any) => state.tagsView.cachedViews,
  // user
  aid: (state: any) => state.user.aid,
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  realName: (state: any) => state.user.realName,
  petName: (state: any) => state.user.petName,
  email: (state: any) => state.user.email,
  mobile: (state: any) => state.user.mobile,
  introduction: (state: any) => state.user.introduction,
  roles: (state: any) => state.user.roles
}
export default getters
