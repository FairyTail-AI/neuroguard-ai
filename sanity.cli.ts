import { defineCliConfig } from 'sanity/cli'

const projectId = "20unlf15"
const dataset = "production"

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "neuroguard-ai"
})
