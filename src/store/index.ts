import { createStore } from 'vuex'
import OrganizationModule from './Organization'

export default createStore({
  modules: {
    OrganizationModule: OrganizationModule,
  },
})
