import{animHelperFN}from'../../../../fc-core/src/lib';export default{"initial.dataset.bar2D":function(){var a=this,b=a.getFromEnv('chart'),c=b.config.yDepth||0,d=a.getFromEnv('yAxis');return{"rect.appearing":function(e){var f,g,h,i,j=d.getPixel(d.getAxisBase())+(b.isBar?-c:c),k=e.index,l=a.components.data[k],m=e.attr;return f=m.x,g=m.width,i=Math.sign(f+g/2-j),h=1===i?f:f+g,l._posWRT0=i,[{initialAttr:function(){var a={};return a.x=h,a.width=0,a.opacity=0,a},finalAttr:{opacity:1},startEnd:function(){var b=e.length;return animHelperFN.getTimeByValue(animHelperFN.animByWeight(k,b,.6),{startPx:j,endPx:1===i?a.config.yAxisMaxPixel:a.config.yAxisMinPixel},{startPx:h,endPx:1===i?m.x+m.width:m.x})},hookFn:function(){this.attr({opacity:1})},effect:'linear',slot:'plot'}]},"plotLabel.appearing":function(){return[{initialAttr:{opacity:0},slot:'final'}]},"*":null}}};