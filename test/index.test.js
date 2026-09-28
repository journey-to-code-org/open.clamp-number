import test from "node:test";import assert from "node:assert/strict";import{clamp,inRange}from"../src/index.js";
test("clamps",()=>{assert.equal(clamp(15,0,10),10);assert.equal(clamp(-1,0,10),0);});
test("checks ranges",()=>{assert.equal(inRange(10,0,10),true);assert.equal(inRange(10,0,10,{inclusive:false}),false);});
