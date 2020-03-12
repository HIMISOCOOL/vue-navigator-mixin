# vue-navigator-mixin

A mixin to see if the browser is online or not.

uses this api https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine

Supports Vue ^2.4.

## Usage
### With Object api
```javascript
import WithNavigator from 'vue-navigator-mixin';

export default {
	...
	mixins: [WithNavigator],
	...
};
```

## Project setup
```
npm install
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
