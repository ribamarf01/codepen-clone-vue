<template>
  <div class="w-full">
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
    <iframe
      :srcdoc="source"
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
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