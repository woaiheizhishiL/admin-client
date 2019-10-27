const initProducts = []
function products(state=initProducts,action){
    switch (action.type) {
        case 'ADD_PRODUCT':
            const product = action.data
            // state.unshift(product)//不能直接修改state数据
            return [product,...state]
        default:
            return state
    }
}