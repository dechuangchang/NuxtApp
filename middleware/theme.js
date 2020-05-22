export default function (context) {
    var cookie = context.req ? context.req.headers.cookie :context.store.state.theme,
        pattern = /([^=]+)=([^;]+);?\s*/g,
        result,
        value = {};
    while((result = pattern.exec(cookie)) != null) {
        value[result[1]] = result[2];
    }
    context.store.commit('SET_THEME',value.theme)
}