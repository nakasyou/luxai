# luxai
Web Framework.

- どこでも動く
- ファイルベースルーティングに飽きましたか?

## 妄想
### Create:
```shell
bun x create-luxai
```
### Build:
Config: 
```ts
// luxai.config.ts
import { defineConfig } from 'luxai'
import { denoAdapter } from '@luxai/deno'

export default defineConfig({
  adapters: {
    deno: denoAdapter()
  }
})
```
run:
```shell
bun run build --adapter=deno
# or
bun x luxai build --adapter=deno
```
## routing
