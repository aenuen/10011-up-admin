import { defineStore } from 'pinia'

export interface TagsViewFace {
  visitedViews: any[],
  cachedViews: any[]
}

const theTagsViewStore = defineStore('tagsView', {
  state: (): TagsViewFace => ({
    visitedViews: [],
    cachedViews: []
  }),
  actions: {
    insertView (view:any) {
      this.addVisitedView(view)
      this.addCachedView(view)
    },
    insertVisitedView (view:any) {
      this.addVisitedView(view)
    },
    insertCachedView (view:any) {
      this.addCachedView(view)
    },
    deleteView (view:any) {
      return new Promise(resolve => {
        this.delVisitedView(view)
        this.delCachedView(view)
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews]
        })
      })
    },
    deleteVisitedView (view:any) {
      return new Promise(resolve => {
        this.delVisitedView(view)
        resolve([...this.visitedViews])
      })
    },
    deleteCachedView (view:any) {
      return new Promise(resolve => {
        this.delCachedView(view)
        resolve([...this.cachedViews])
      })
    },
    deleteOthersViews (view:any) {
      return new Promise(resolve => {
        this.delOthersVisitedViews(view)
        this.delOthersCachedViews(view)
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews]
        })
      })
    },
    deleteOthersVisitedViews (view:any) {
      return new Promise(resolve => {
        this.delOthersVisitedViews(view)
        resolve([...this.visitedViews])
      })
    },
    deleteOthersCachedViews (view:any) {
      return new Promise(resolve => {
        this.delOthersCachedViews(view)
        resolve([...this.cachedViews])
      })
    },
    deleteAllViews () {
      return new Promise(resolve => {
        this.delAllVisitedViews()
        this.delAllCachedViews()
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews]
        })
      })
    },
    deleteAllVisitedViews () {
      return new Promise(resolve => {
        this.delAllVisitedViews()
        resolve([...this.visitedViews])
      })
    },
    deleteAllCachedViews () {
      return new Promise(resolve => {
        this.delAllCachedViews()
        resolve([...this.cachedViews])
      })
    },
    updateVisitedView (view:any) {
      this.updVisitedView(view)
    },
    // mutations
    addVisitedView (view:any) {
      if (this.visitedViews.some((v:Record<string, any>) => v.path === view.path)) return
      this.visitedViews.push(Object.assign({}, view, { title: view.meta.title || 'no-name' }))
    },
    addCachedView (view:any) {
      if (this.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) this.cachedViews.push(view.name)
    },
    delVisitedView (view:any) {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === view.path) {
          this.visitedViews.splice(i, 1)
          break
        }
      }
    },
    delCachedView (view:any) {
      const index = this.cachedViews.indexOf(view.name)
      index > -1 && this.cachedViews.splice(index, 1)
    },
    delOthersVisitedViews (view:any) {
      this.visitedViews = this.visitedViews.filter((v:Record<string, any>) => v.meta.affix || v.path === view.path)
    },
    delOthersCachedViews (view:any) {
      const index = this.cachedViews.indexOf(view.name)
      this.cachedViews = index > -1 ? this.cachedViews.slice(index, index + 1) : []
    },
    delAllVisitedViews () {
      this.visitedViews = this.visitedViews.filter((tag:Record<string, any>) => tag.meta.affix) // 保留粘贴标签
    },
    delAllCachedViews () {
      this.cachedViews = []
    },
    updVisitedView (view:any) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  }
})

export default theTagsViewStore
