import {
  defineCushion
} from 'luxai'

export const cushion = defineCushion({
  fs: {
    async writeFile (path, data: (Blob | Uint8Array | string)) {
      if (typeof data === 'string') {
        await Deno.writeTextFile(path, data)
        return
      }
      let uint8Array: Uint8Array
      if (data instanceof Blob) {
        uint8Array = new Uint8Array(await data.arrayBuffer())
      } else {
        uint8Array = data
      }
      await Deno.writeFile(path, uint8Array)
    }
  }
})
