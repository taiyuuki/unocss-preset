## @taiyuuki/unocss-preset

### Install

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

### rules

| Prefix        | CSS                        |
| ------------- | -------------------------- |
| border        | border                     |
| border-width  | border-width               |
| border-color  | border-color               |
| border-radius | border-radius              |
| shadow        | box-shadow                 |
| w             | width                      |
| w-min         | min-width                  |
| h             | height                     |
| h-min         | min-height                 |
| m             | margin                     |
| m-x           | margin-right margin-left   |
| m-y           | margin-top margin-bottom   |
| m-t           | margin-top                 |
| m-r           | margin-right               |
| m-b           | margin-bottom              |
| m-l           | margin-left                |
| p             | padding                    |
| p-x           | padding-right padding-left |
| p-y           | padding-top padding-bottom |
| p-t           | padding-top                |
| p-r           | padding-right              |
| p-b           | padding-bottom             |
| p-l           | padding-left               |
| pst           | position                   |
| pst-t         | top                        |
| pst-r         | right                      |
| pst-b         | bottom                     |
| pst-l         | left                       |
| z-index       | z-index                    |
| flex          | flex                       |
| flex-row      | flex-direction             |
| row           | flex-direction             |
| flex-column   | flex-direction             |
| column        | flex-direction             |
| text-color    | color                      |
| text-weight   | font-weight                |
| text-align    | text-align                 |
| text-vertical | vertical-align             |
| bg            | background                 |
| bg-repeat     | background-repeat          |
| bg-position   | background-position        |
| bg-size       | background-size            |
| bg-color      | background-color           |
| display       | display                    |
| gap           | gap                        |
| icon-color    | fill                       |
| overflow      | overflow                   |
| overflow-x    | overflow-x                 |
| overflow-y    | overflow-y                 |
| opacity       | opacity                    |
| filter        | filter                     |
| obj-fit       | object-fit                 |
| obj-contain   | object-contain             |