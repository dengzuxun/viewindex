import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        show: false,
        indexstyle: 0,
        topshow: true,
        shareShow: false,
    },
    getters: {
        shareShow(state) {
            return state.shareShow
        },
        show(state) {
            return state.show
        }

    },
    mutations: {
        showUp(state, fag) {
            state.show = fag
        },
        indexstyle(state, pageIndex) {
            state.indexstyle = pageIndex
        },
        topshow(state, topshowpage) {
            state.topshow = topshowpage
        },
        shareShow(state, shareShow) {
            state.shareShow = shareShow
            console.log(state)
        }
    }
})

export default store