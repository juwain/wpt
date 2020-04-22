// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.transparent.destination-atop
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');


ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-atop';
ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 0,128,128,191, "50,25", "0,128,128,191", 5);
t.done();

});
done();