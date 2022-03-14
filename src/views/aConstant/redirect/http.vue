<script lang="ts">
import { defineComponent, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'RedirectHttp',
  created () {
    const { params, query } = useRoute()
    const { path } = params
    useRouter().replace({ path: '/' + path, query })
  },
  setup () {
    return {
      h
    }
  }
})
</script>
