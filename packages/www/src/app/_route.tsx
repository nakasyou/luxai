import Layout from '../layouts/Layout'
import { defineRoute } from 'luxai'

import {
  writeFile
} from 'luxai'

export default defineRoute(() => {
  return <Layout title="Luxai">
    <div>
      <h1>Luxai</h1>
      <p>Luxai is web framework on Bun.</p>
    </div>
  </Layout>
})
