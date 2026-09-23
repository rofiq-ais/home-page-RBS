import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '51gxevin',
    dataset: 'production'
  },
  studioHost: 'klinik-rbs',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'r9o1yj4sf5b6wbcd3lgewip4',
  },
})
