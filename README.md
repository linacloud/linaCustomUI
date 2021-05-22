## Install
```shell
npm install custom-ui-library
```

## Quick Start
``` javascript
import Vue from 'vue'
import LinaElement from 'custom-ui-library'

Vue.use(LinaElement)

// or
// import {
//   Radio,
//   Button
//   // ...
// } from 'element-ui'

// Vue.component(Radio.name, Radio)
// Vue.component(Button.name, Button)
// or
import {
LinaButton
} from 'custom-ui-library'

Vue.component(LinaButton.name, LinaButton)
