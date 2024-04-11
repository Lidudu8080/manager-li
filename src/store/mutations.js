/**
 * mutations方法
 */
import storage from '@/utils/storage'

export default {
    savaUserInfo(state, userInfo) {
        state.userInfo = userInfo
        storage.setItem('userInfo', userInfo)
    }
}