import "module-alias/register";
import "@babel/polyfill";

import hello from '@root/hello';

hello();
console.log('app');