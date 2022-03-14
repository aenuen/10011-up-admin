<script lang="ts">
import { defineComponent, h } from 'vue'
// 身份验证重定向
export default defineComponent({
  name: 'RedirectAuth',
  created () {
    const hash = window.location.search.slice(1)
    if (window.localStorage) {
      window.localStorage.setItem('x-admin-oauth-code', hash)
      window.close()
    }
  },
  setup () {
    return {
      h
    }
  }
})
</script>
