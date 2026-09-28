function number(v,n){if(typeof v!=="number"||Number.isNaN(v))throw new TypeError(`Expected ${n} to be a number`);}
export function clamp(value,min,max){number(value,"value");number(min,"min");number(max,"max");if(min>max)throw new RangeError("min must be <= max");return Math.min(max,Math.max(min,value));}
export function inRange(value,min,max,options={}){clamp(value,min,max);return options.inclusive===false?value>min&&value<max:value>=min&&value<=max;}
