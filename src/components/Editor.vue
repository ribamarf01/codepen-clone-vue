<template>
  <div class="w-full m-4 flex flex-col flex-grow basis-0">
    <h1 class="w-full bg-slate-500 p-2 text-gray-100 text-lg font-extrabold rounded-t-lg">{{ editorLang }}</h1>
    <textarea :id="lang"></textarea>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { mapActions } from 'vuex' 

export default {
  name: 'Editor',
  props: ['lang', 'editorLang', 'value'],
  data: () => ({
    editor: null
  }),
  mounted() {
    this.editor = CodeMirror.fromTextArea(document.getElementById(this.lang), {
      lineNumbers: true,
      theme: 'dracula',
      mode: this.lang,
      lineWrapping: true,
      lint: true,
      tabSize: 1
    })

    this.editor.on("change", () => {
      this.updateFrame({
        lang: this.lang,
        code: this.editorValue()
      })
    })
  },
  methods: {
    editorValue() {
      return this.editor.getValue() 
    },
    ...mapActions(['updateFrame'])
  }
}
</script>

<style>
.CodeMirror {
  height: 100% !important;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.CodeMirror-wrap span {
  word-break: break-all;
}
</style>