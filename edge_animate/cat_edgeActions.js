
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){var stageWidth=$('#Stage').width();var stageHeight=$('#Stage').height();console.log('stageWidth: '+stageWidth+' stageHeight: '+stageHeight);var radius=9;var offsetX=((e.pageX/stageWidth)-0.5)*radius;var offsetY=((e.pageY/stageHeight)-0.5)*radius;var originalEyeLeft=sym.getVariable("originalEyeLeft");var originalEyeTop=sym.getVariable("originalEyeTop");var eyeLeft=parseInt(originalEyeLeft)+offsetX;var eyeTop=parseInt(originalEyeTop)+offsetY;var eyeLeftStr=eyeLeft.toString()+"%"
var eyeTopStr=eyeTop.toString()+"%"
console.log("eyetop: "+eyeTop)
sym.$("eye").css({left:eyeLeft,top:eyeTop});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var originalEyeLeft=sym.$("eye").css("left");var originalEyeTop=sym.$("eye").css("top");console.log("eyeX: "+originalEyeLeft);console.log("eyeY: "+originalEyeTop);sym.setVariable("originalEyeLeft",originalEyeLeft);sym.setVariable("originalEyeTop",originalEyeTop);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){window.open("http://jfpark.taobao.com","_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-264815076");