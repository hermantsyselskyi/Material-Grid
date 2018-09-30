// /* useage

// var confObj={
//   text:sourceString,
//   topHeavy:.15,
//   font:"game",
//   ctx:context,
//   x:inset,
//   y:inset,
//   w:vw-inset*2,
//   h:vh-inset*2.5,
//   stroke0:true,
//   fill:true,
//   stroke1:false
// };
// textRect(confObj);

// */

// function textRect(conf){
//   conf.ctx.font="100px "+conf.font;
//   var fieldAspect=conf.w/conf.h;
//   //console.log(fieldAspect);
//   var fullLength=conf.ctx.measureText(conf.text).width;  
//   var areaOfText=fullLength*100;
//   var wSquared=areaOfText*fieldAspect;
//   var testW=Math.sqrt(wSquared);
//   var testH=areaOfText/testW;

//   var lineCount=Math.floor((1-.25*conf.topHeavy)*testH/100);
//   //console.log(lineCount);
//   var lines=[conf.text.split(" ")];
//   for(l=1; l<lineCount; l++){
//     lines.push([]);
//   }

//   var longestLineNum=0;
//   var loopout=20000;
//   while ((longestLineNum < lines.length-1)&&(loopout>0)){
//     loopout--;
//     if(loopout==0){alert('loopout');}
//     var word=lines[longestLineNum].pop();
//     lines[longestLineNum+1].unshift(word);
//     longestLineNum=longestNum(conf.ctx,lines,conf.topHeavy)
//   }
//   //console.log(lines);
//   var atY=measureLines(conf.ctx,conf.font,lines,conf.w);
//   var underflow=conf.h-atY;
//   //console.log(conf.h+' '+atY)
//   //console.log(linePad+'='+underflow+'/'+lineCount);
//   var linePad=underflow/lineCount;  
//   return drawLines(conf.font, lines, linePad, conf.ctx, conf.x, conf.y, conf.w, conf.h, conf.stroke0, conf.fill, conf.stroke1, conf.color, conf.highlight, selectedGlom);
// }
// function longestNum(ctx, lines, topHeavy){
//   var longestLineLength=-1;
//   var longestLineNum=-1;
//   for (var l=0; l<lines.length; l++){
//     var thisLineLength=ctx.measureText(lines[l].join(" ")).width;
//     thisLineLength*=1+(lines.length-l)*topHeavy;
//     if(thisLineLength>longestLineLength){
//       longestLineLength=thisLineLength;
//       longestLineNum=l;
//     }
//   }
//   return longestLineNum; 
// }
// function measureLines(ctx, font, lines, width){
//   var atY=0;
//   for (var l=0; l<lines.length; l++){
//     ctx.font=100+"px "+font;
//     var line=lines[l].join(" ");
//     var testWidth=ctx.measureText(line).width;
//     var frac=width/testWidth;
//     var size=100*frac;
//     if(line!=""){
//       atY+=size;
//     }
//   }
//   //console.log('atY '+atY);
//   return atY;
// }
// var adjust=.15;
// function drawLines(font, lines, linePad, ctx, x, y, w, h, stroke0, fill, stroke1, color, highlight, selectedGlom){

//   var areas=[];
//   //console.log(selectedGlom);
//   ctx.textBaseline="hanging";
//   var atY=0;
//   for (var l=0; l<lines.length; l++){
//     ctx.font="100px "+font;
//     var line=lines[l].join(" ");
//     //console.log(atY+' '+line);
//     var temp=line.split("_");
//     var lineSpaces=temp.join(" ");
//     var testWidth=ctx.measureText(lineSpaces).width;
//     var frac=w/testWidth;
//     var size=100*frac;
//     ctx.font=size+"px "+font;
//     //console.log(size);
//     var atX=x;
//     for (var p=0; p<lines[l].length; p++){
//       var phrase=lines[l][p];
//       var temp=phrase.split("_");
//       var phraseSpaces=temp.join(" ");
//       var phraseWidth=ctx.measureText(phraseSpaces).width;
//       var phraseWidthSpace=ctx.measureText(phraseSpaces+" ").width;
//       areas.push({phrase:phrase, l:atX, t:y+atY-size*adjust/2, r:atX+phraseWidth, b:y+atY-size*adjust/2+size});
//       if(selectedGlom.indexOf(phrase)>-1){
//         ctx.fillStyle=highlight;
//         ctx.strokeStyle=color;
//       } 
//       else{
//         ctx.fillStyle=color;
//         ctx.strokeStyle=highlight;
//       }
//       //ctx.strokeRect(atX,y+atY-size*adjust/2, phraseWidth, size);

//       if(stroke0){
//         ctx.strokeText(phraseSpaces,atX,y+atY+size*adjust);
//       }
//       if(fill){
//         ctx.fillText(phraseSpaces,atX,y+atY+size*adjust);
//       }
//       if(stroke1){
//         ctx.strokeText(phraseSpaces,atX,y+atY+size*adjust);
//       }


//       atX+=phraseWidthSpace;
//     }  
//     //ctx.strokeRect(x,y+atY,w,size);
//     if(line!=""){
//       atY+=size+linePad;
//     }
//   }
//   return areas
// }