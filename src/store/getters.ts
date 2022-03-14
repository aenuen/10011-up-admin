const getters: any = {
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
