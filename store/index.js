import Vue from 'vue';
import Vuex from 'vuex'

const store = new Vuex.Store({
    state:{
        userInfo:{}
    },
    mutations:{
        SET_USERINFO(state,userInfo={}){
            state.userInfo=userInfo;
            uni.setStorageSync('userInfo', userInfo)
        }
    }
})