# JSMicro - Is Defined

### **`isDefined(object)`**

Check does the given Javascript Object (array, object, string, etc) is a defined.

### **`isNotDefined(object)`**

Check does the given Javascript Defined (array, object, string, etc) is not a defined.

## Browser Usage

```bash
bower install --save jsmicro-is-defined
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-defined/index.js">
<script type="text/javascript">
    var obj = function() {};
    var nbr;

    // Available in the window object.
    isDefined(obj);      // true
    isDefined(nbr);      // false
    isNotDefined(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-defined
```

```js
const obj = require('@jsmicro/is-defined');

let undef;
let def = 'Defined';

// Available in the global object.
isDefined(def); // true
isDefined(undef); // false
isNotDefined(undef); // true

// Also available in the export object.
obj.isDefined(def); // true
obj.isDefined(undef); // false
obj.isNotDefined(undef); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
