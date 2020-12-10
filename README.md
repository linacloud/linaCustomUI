## Install
```shell
npm install custom-ui-library
```

## Quick Start
``` javascript
import Vue from 'vue'
import LinaElement from 'element-ui'

Vue.use(LinaElement)

// or
import {
  Radio,
  Button
  // ...
} from 'element-ui'

Vue.component(Radio.name, Radio)
Vue.component(Button.name, Button)
