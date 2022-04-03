<template>
  <div class="w-full flex flex-col">
    <div class="h-[50vh] flex justify-around bg-gray-600">
      <Editor
        editorLang="HTML"
        lang="xml"
      />
      <Editor
        editorLang="CSS"
        lang="css"
      />
      <Editor
        editorLang="JavaScript"
        lang='javascript'
      />
    </div>
    <div class="top-[50vh] absolute h-1/2 w-full">
      <iframe
        :srcdoc="source"
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        class="absolute"
        width="100%"
        height="100%"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Editor from "./components/Editor.vue"

export default {
  components: { Editor },
  computed: {
    ...mapGetters({source: 'GET_DOC'})
  }
}

</script>