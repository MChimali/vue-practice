import { ActionContext, GetterTree } from 'vuex'
export interface OrgState {
  organization: string
}

const state: () => OrgState = () => ({
  organization: 'Lemoncode',
})

const mutations = {
  UPDATE_ORGANIZATION(state: OrgState, organization: string) {
    state.organization = organization
  },
}

const actions = {
  updateOrganization: (
    { commit }: ActionContext<OrgState, unknown>,
    organization: string
  ) => {
    commit('UPDATE_ORGANIZATION', organization)
  },
}

interface OrgGetter {
  organization(state: OrgState): string
}

const getters: GetterTree<OrgState, unknown> & OrgGetter = {
  organization: (state: OrgState) => {
    return state.organization
  },
}

const OrganizationModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default OrganizationModule
