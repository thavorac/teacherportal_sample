import * as firebase from 'firebase'
import store from '../store/index'
const config = {
    apiKey: "AIzaSyDTdWie9WaRJQpL60JxDwTunkIXIOnteH8",
    authDomain: "attendance-229f7.firebaseapp.com",
    databaseURL: "https://attendance-229f7.firebaseio.com",
    projectId: "attendance-229f7",
    storageBucket: "attendance-229f7.appspot.com",
    messagingSenderId: "452183396366"
};

const fireApp = firebase.initializeApp(config)
export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
    Vue.prototype.$auth = fireApp.auth()

    router.beforeEach((to, from, next) => {
        let currentUser = {name:"thavorac"}//store.getters['user/getUser']
        let requireAuth = to.matched.some(record => record.meta.requireAuth);

        if(requireAuth && !currentUser) next("/login")
        else if(!requireAuth && currentUser) next()
        else next()
    })
}
