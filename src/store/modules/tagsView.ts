import { defineStore } from 'pinia'

export interface TagsViewFace {
  visitedViews: any[],
  cachedViews: any[]
}

const theTagsView = defineStore('tagsView', {
  state: (): TagsViewFace => ({
    visitedViews: [],
    cachedViews: []
  })
})

export default theTagsView
