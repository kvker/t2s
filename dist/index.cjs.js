"use strict";function templateToString(t,e){var n=Object.keys(e),e=Object.values(e);return new Function(...n,`return \`${t}\``)(...e)}module.exports=templateToString;
