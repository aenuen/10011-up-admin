export const suspenseRouter = {
  path: '/suspense',
  name: 'suspense',
  component: () =>
    import(
      /* webpackChunkName: "suspense" */ '@/views/demo/suspense/index.vue'
    ),
  meta: { title: 'suspense demo', icon: 'chart', affix: true }
}
