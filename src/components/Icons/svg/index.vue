<!--suppress HtmlUnknownAttribute -->
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { formatExternal } from 'methods-libs'

const req = require.context('./files', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)

export default defineComponent({
  name: 'ComponentsSvgIcon',
  props: {
    iconClass: { type: String, required: true },
    className: { type: String, default: '' }
  },
  setup (props) {
    const icon = {
      mask: `url(${props.iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
    }
    return {
      isExternal: computed(() => formatExternal(props.iconClass)),
      iconName: computed(() => `#icon-${props.iconClass}`),
      svgClass: computed(() => props.className ? `svg-icon ${props.className}` : 'svg-icon'),
      styleExternalIcon: computed(() => icon)
    }
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
