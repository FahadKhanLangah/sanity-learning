import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rzuovise',
    dataset: 'production'
  },
  deployment: {
    appId: 'dqq8hqaswku0b8xcpgjb8rw8',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
