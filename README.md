### @taiyuuki/unocss-preset

```bash
npm i @taiyuuki/unocss-preset -D
```

```js
// uno.config.js
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss'
import { presetTaiyuuki } from '@taiyuuki/unocss-preset'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons(),
    presetTaiyuuki(),
  ]
})
```