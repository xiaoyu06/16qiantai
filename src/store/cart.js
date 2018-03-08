// 导入配置对象
export default {
    //定义状态，相当于data数据
    state: {
        cart: {}  //数据结构预览：{ 153：5, 154:10, 155:12}, ID为key, 数量为value
    },

    //定义修改状态的方法,这里的方法需要通过store.commit(方法名称，参数)
    mutations: {
        //这里的方法第一个参数固定为state,由vuex类库固定传递，第二个参数由方法调用者自由传递，可传可不传
        modify(state, data) {
            let { id, num } = data;
            state.cart[id] = num;

            console.log(state.cart);
        }
    }
}