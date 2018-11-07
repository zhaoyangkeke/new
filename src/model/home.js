export default {
    namespace:'home',
    state:{title:'未设置标题'},
    effects:{

    },
    reducers:{
        setTitle(state,action){
            console.log(action.title)
            state.title = action.title;
            return {...state}
        }
    }
}