import Vue from "vue"
import VueRouter from "vue-router"
import Home from '@/view/home/Home.vue'
import Service from '@/view/service/Service.vue'
import Case from '@/view/case/Case.vue'
import News from '@/view/news/News.vue'
import NewsList from '@/view/news/newsList.vue'
import My from '@/view/my/My.vue'
import Article from '@/view/home/article/Article.vue'
import Recruitment from '@/view/recruitment/Recruitment.vue'
import Details from '@/view/recruitment/details/Details.vue'
import InfoAskComponent from '@/view/info-ask/InfoAsk'
import MapComponent from '@/view/map/Map'
import store from "../store"
Vue.use(VueRouter)
const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 0)
            next()
        }
    },
    {
        path: "/home",
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 0)
            next()
        }
    },
    {
        path: "/article",
        name: 'article',
        component: Article,
    },
    {
        path: "/service",
        name: 'service',
        component: Service,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 1)
            next()
        }
    },
    {
        path: "/case",
        name: 'case',
        component: Case,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 2)
            next()
        }
    }, {
        path: "/news",
        name: 'news',
        component: News,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 3)
            next()
        }
    }, {
        path: "/newsList",
        name: 'newsList',
        component: NewsList,
    }, {
        path: "/my",
        name: 'my',
        component: My,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 4)
            next()
        }
    }, {
        path: "/recruitment",
        name: 'recruitment',
        component: Recruitment
        ,
        beforeEnter: (to, from, next) => {
            store.commit("indexstyle", 5)
            next()
        },
    },
    {
        path: "/details",
        name: 'details',
        component: Details,
        meta: {
            indetails: true
        }
    },
    {
        path: "/infoask",
        name: 'infoask',
        component: InfoAskComponent
    },
    {
        path: "/map",
        name: 'map',
        component: MapComponent
    }
]
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path == "/details" || to.path == "/newsList" || to.path == "/article") {
        store.commit('topshow', false)
    } else {
        store.commit('topshow', true)
    }
    store.commit('showUp', false)
    next()
})

export default router;