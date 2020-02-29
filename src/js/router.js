import VueRouter from 'vue-router'

import HomeContainer from '../components/HomeContainer.vue'
import MemberContainer from '../components/MemberContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'
import ShopcarContainer from '../components/ShopcarContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from '../components/photo/PhotoList.vue'
import PhotoInfo from '../components/photo/PhotInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/goodsinfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

var router = new VueRouter({
routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer },
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodsInfo, name: "goodsinfo"},
    {path: '/home/goodsdsc/:id', component: GoodsDesc, name: 'goodsdesc'},
    {path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'}
],
linkActiveClass: 'mui-active'
})

export default router