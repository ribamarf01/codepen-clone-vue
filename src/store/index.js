import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    html: '',
    css: '',
    js: '',
    srcDoc: `
    <html>
    <body></body>
    <style></style>
    <script></script>
    </html>
    `
  }),
  mutations: {
    SET_HTML: (state, html) => {
      state.html = html
    },
    SET_CSS: (state, css) => {
      state.css = css
    },
    SET_JS: (state, js) => {
      state.js = js
    },
    SET_DOC: (state) => {
      state.srcDoc = `
        <html>
        <body>${state.html}</body>
        <style>${state.css}</style>
        <script>${state.js}</script>
        </html>
      `
    }
  },
  getters: {
    GET_DOC: state => state.srcDoc
  },
  actions: {
    updateFrame: ({ commit }, { lang, code }) => {
      switch(lang) {
        case 'xml':
          commit("SET_HTML", code)
          break;
        case 'css':
          commit("SET_CSS", code)
          break;
        case 'javascript':
          commit("SET_JS", code)
          break;
        default:
          break;
      }

      commit("SET_DOC")

    }
  }
})