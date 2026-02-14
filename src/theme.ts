// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      // Custom global styles if needed
    },
  },
})

export const system = createSystem(defaultConfig, config)
export default system