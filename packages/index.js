import Button from './button'
import Radio from './radio'
const components = [Button,Radio]

const install = function(Vue){
    components.forEach(component => {
        Vue.component(component.name, component);
      });
    
}

export default {
    install
}
