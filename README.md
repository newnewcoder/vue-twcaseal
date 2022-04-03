# TWCASeal non-official vue2 package

This component simplifies `twcaseal.js` use in vue project.

### Install

~~~bash
npm i vue-twcaseal
~~~

### How to use

~~~javascript
// in main.js
import VueTwcaSeal from 'vue-twcaseal'
// ...
Vue.use(VueTwcaSeal, '<your site common name>')
// ...
~~~

~~~html
<!-- in template -->
<twca-seal version="v3" logo-type="SMALL" :src="require('@/assets/<twcaseal image>')"></twca-seal>
~~~

### Configuration

|          |  description                                            |
|----------|---------------------------------------------------------|
| version  | twcaseal version. support v3, v4. default: v4           |
| logo-type| twcaseal logo size. support MINI, SMALL. default: MINI  |
| src      | put your twcaseal gif file                              |

### Warning

This component may not work if twcaseal.js is changed by the authorities.
