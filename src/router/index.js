import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/home',
    component: () => import('@/views/index/home/home'),
    hidden: true
  },
  {
    path: '/product-center',
    component: () => import('@/views/index/product/product-center'),
    hidden: true
  },
  {
    path: '/product-detail',
    component: () => import('@/views/index/product/product-detail'),
    hidden: true
  },
  {
    path: '/case-list',
    component: () => import('@/views/index/case/case-list'),
    hidden: true
  },
  {
    path: '/case-detail',
    component: () => import('@/views/index/case/case-detail'),
    hidden: true
  },
  {
    path: '/news-list',
    component: () => import('@/views/index/news/list'),
    hidden: true
  },
  {
    path: '/news-detail',
    component: () => import('@/views/index/news/list-detail'),
    hidden: true
  },
  {
    path: '/about-us',
    component: () => import('@/views/index/about-us/about-us'),
    hidden: true
  },
  {
    path: '/contact-us',
    component: () => import('@/views/index/contact-us/contact-us'),
    hidden: true
  },


  {
    path: '/admin-banner',
    component: Layout,
    meta: { title: '轮播管理', icon: 'dashboard' },
    children: [{
      path: 'list',
      name: 'AdminBannerList',
      component: () => import('@/views/admin/banner/list'),
      meta: { title: '轮播列表', icon: 'dashboard' }
    },{
      path: 'create',
      name: 'AdminBannerCreate',
      component: () => import('@/views/admin/banner/create'),
      meta: { title: '轮播列表', icon: 'dashboard' }
    },{
      path: 'edit',
      name: 'AdminBannerEdit',
      component: () => import('@/views/admin/banner/edit'),
      meta: { title: '编辑轮播', icon: 'dashboard' }
    }]
  },

  {
    path: '/admin-product',
    component: Layout,
    meta: { title: '产品管理', icon: 'dashboard' },
    children: [{
      path: 'product-list',
      name: 'ProductList',
      component: () => import('@/views/admin/product/list'),
      meta: { title: '产品列表', icon: 'dashboard' },
    },{
      path: 'product-create',
      name: 'ProductCreate',
      component: () => import('@/views/admin/product/create'),
      meta: { title: '新增产品', icon: 'dashboard' }
    },{
      path: 'product-edit',
      name: 'ProductEdit',
      component: () => import('@/views/admin/product/edit'),
      meta: { title: '编辑产品', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-case',
    component: Layout,
    meta: { title: '案例管理', icon: 'dashboard' },
    children: [{
      path: 'case-list',
      name: 'CaseList',
      component: () => import('@/views/admin/case/list'),
      meta: { title: '案例列表', icon: 'dashboard' },
    },{
      path: 'case-create',
      name: 'CaseCreate',
      component: () => import('@/views/admin/case/create'),
      meta: { title: '新增案例', icon: 'dashboard' }
    },{
      path: 'case-edit',
      name: 'CaseEdit',
      component: () => import('@/views/admin/case/edit'),
      meta: { title: '编辑案例', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-news',
    component: Layout,
    meta: { title: '新闻管理', icon: 'dashboard' },
    children: [{
      path: 'news-list',
      name: 'NewsList',
      component: () => import('@/views/admin/news/list'),
      meta: { title: '新闻列表', icon: 'dashboard' },
    },{
      path: 'news-create',
      name: 'NewsCreate',
      component: () => import('@/views/admin/news/create'),
      meta: { title: '新增新闻', icon: 'dashboard' }
    },{
      path: 'news-edit',
      name: 'NewsEdit',
      component: () => import('@/views/admin/news/edit'),
      meta: { title: '编辑新闻', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-data',
    component: Layout,
    children: [{
      path: 'data',
      name: 'HistoryData',
      component: () => import('@/views/admin/data/index'),
      meta: { title: '公司数据', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-customer',
    component: Layout,
    children: [{
      path: 'data',
      name: 'Customer',
      component: () => import('@/views/admin/customer/index'),
      meta: { title: '客户分布', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-advantage',
    component: Layout,
    children: [{
      path: 'data',
      name: 'Advantage',
      component: () => import('@/views/admin/advantage/index'),
      meta: { title: '公司优势', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-history',
    component: Layout,
    meta: { title: '发展历程', icon: 'dashboard' },
    children: [{
      path: 'history-list',
      name: 'HistoryList',
      component: () => import('@/views/admin/history/list'),
      meta: { title: '历程列表', icon: 'dashboard' },
    },{
      path: 'history-create',
      name: 'HistoryCreate',
      component: () => import('@/views/admin/history/create'),
      meta: { title: '新增历程', icon: 'dashboard' }
    },{
      path: 'history-edit',
      name: 'HistoryEdit',
      component: () => import('@/views/admin/history/edit'),
      meta: { title: '编辑历程', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin-message',
    component: Layout,
    children: [{
      path: 'list',
      name: 'Message',
      component: () => import('@/views/admin/message/index'),
      meta: { title: '留言管理', icon: 'dashboard' },
    }]
  },
  {
    path: '/admin-us',
    component: Layout,
    children: [{
      path: 'about-us',
      name: 'AboutUs',
      component: () => import('@/views/admin/news/list'),
      meta: { title: '关于我们', icon: 'dashboard' },
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
