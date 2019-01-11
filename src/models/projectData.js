import { filter, ascend, sortWith, prop } from 'ramda'
import { projects } from 'data/projects.json'

const isActive = p => p.active
const showOnHomepage = p => (p.showHome && p.active)
const orderSort = sortWith([ascend(prop('displayOrder'))])

export const activeProjects = orderSort(filter(isActive, projects))
export const homePageProjects = filter(showOnHomepage, projects)

export const findProject = (url) => {
  return projects.find(project => project.url === url)
}
