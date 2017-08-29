# TaiwanIdentityCardNumber
Generate Taiwan identity card number using javascript

### Content
refactor from [身分證字號產生器](https://people.debian.org/~paulliu/ROCid.html)

### Usage 
```js
var x = require("./TaiwanIdentityCardNumber");
var id = x.getID(x.city.基隆市, x.gender.男);
console.log("身份證字號產生器:" + id);
```
run test script
```
node test.js
```

### Reference
[身分證字號產生器](https://people.debian.org/~paulliu/ROCid.html)