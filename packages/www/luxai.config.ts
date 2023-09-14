import { defineConfig } from 'luxai'
import { denoAdapter } from '@luxai/deno'

export default defineConfig({
  adapters: {
    deno: denoAdapter()
  }
})
