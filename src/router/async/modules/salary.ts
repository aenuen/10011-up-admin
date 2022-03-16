export const salaryRouter = {
  path: '/salary',
  name: 'salary',
  component: () => import('@/views/aConstant/layout/index.vue'),
  redirect: '/salary/create',
  meta: {
    title: '薪资管理',
    icon: 'money',
    roles: ['editor']
  },
  children: [
    {
      path: 'list',
      name: 'salaryList',
      component: () => import('@/views/salary/list.vue'),
      meta: {
        title: '人员列表',
        roles: ['editor']
      }
    },
    {
      path: 'create',
      name: 'salaryCreate',
      component: () => import('@/views/salary/create.vue'),
      meta: {
        title: '人员录入',
        roles: ['editor']
      }
    },
    {
      path: 'update/:id',
      name: 'salaryUpdate',
      component: () => import('@/views/salary/update.vue'),
      meta: {
        title: '人员编辑',
        roles: ['editor'],
        activeMenu: '/salary/list' // 指定高亮位置
      },
      hidden: true // 不显示在侧边栏中
    }
  ]
}
