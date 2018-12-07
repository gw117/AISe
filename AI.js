var difficulty = 0.1;
var init;
var corr = "";
var trial = 0;
var qq = 0;
var output = "";
var structure = "";
var update = "";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
var stage = 0;
var bound = 0;
var pos = 0;
var output2 = "";
var trace = "";

var input = app.GetClipboardText();
function OnStart()
{
//Nodeplug design and control suite with AI

//add logic trace mechanism to produce proofs

app.ShowPopup("initialising" );
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	


var output = "";
var logicordershift = 1



	edt = app.CreateTextEdit( "", 0.96, 0.5); 
	edt.SetTextSize(12 );
	lay.AddChild( edt );

	edtin = app.CreateTextEdit( "", 0.96, 0.2); 
	edtin.SetTextSize(12 );
	lay.AddChild( edtin );

edtin.SetText( input );
	edt2= app.CreateTextEdit( "", 0.96, 0.2); 
	edt2.SetTextSize(12);
	lay.AddChild( edt2 );

	btnLoad = app.CreateButton( "Actuate", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 
	app.AddLayout( lay );
}
function btnLoad_OnTouch() 
{     




 var db2 = "";
var txt = app.ReadFile( "/sdcard/philosophy.txt" ); 
sentence = txt.split(".");

x =  Math.floor(Math.random() * (sentence.length)) + 0;
//for(var xx = 0; xx < 20; xx++){
while(0==0){
output = "";
var funcsplitter = 0;
for(x = x;x < sentence.length;x++){
difficulty = 0.1;
output += ""

//line terminator/blocking, 
terminator = output.split(" ");
if (terminator.length > 10){//output length

trace += ";";
break;
}
//custom logic operator
var q = 0;
var func = app.ReadFile( "/sdcard/function.txt" );
var functionorder = func.split("\n");
for (var c = 0;c < sentence.length;c++){
c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
if (functionorder[b] == word[a]){
//a = b //functionorder
var wordstr  = word[a];
refreshermind+= wordstr + "\n";
//app.WriteFile( "/sdcard/function.txt",refreshermind,"append");
trace += "(f:"+ wordstr + ")";
var sent = sentence[x];
trace += sent;
x = c;

trace += sentence[x];
pos = c;
x = Math.round(x);
if (q == 0){
output += "";
}
q = 1;
break;
}
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}
//custom logic assembler
var q = 0;

funcsplitter++;


if(funcsplitter == 1){
var func = app.ReadFile( "/sdcard/prep.txt" );
}

if(funcsplitter == 2){
var func = app.ReadFile( "/sdcard/noun.txt" );
}
if(funcsplitter == 3){
var func = app.ReadFile( "/sdcard/function.txt" );
funcsplitter = 0;
}

var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){
c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
//a = b //functionorder
var wordstr  = word[a];

if(funcsplitter == 3){
}

trace += "(nH:"+ wordstr + ")";
if (q == 0){
output += "";
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}




if(funcsplitter == 3){
var func = app.ReadFile( "/sdcard/prep.txt" );
}

if(funcsplitter == 2){
var func = app.ReadFile( "/sdcard/noun.txt" );
}
if(funcsplitter == 1){
var func = app.ReadFile( "/sdcard/function.txt" );
funcsplitter = 0;
}

var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){
c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
//a = b //functionorder
var wordstr  = word[a];

if(funcsplitter == 3){
}

trace += "(nH:"+ wordstr + ")";
if (q == 0){
output += "";
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}





//custom logic operator
var q = 0
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt2 = app.ReadFile( "/sdcard/function.txt" );
var wordstr  = word[a];
var vocab = txt2.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b+1]){
if (output.indexOf(wordstr) == -1){
if(a > word.length/difficulty){
output += wordstr+" ";





var download = output.split(" ");
var refreshermind = "";

refreshermind+= wordstr + "\n";
//app.WriteFile( "/sdcard/function.txt",refreshermind,"append");
trace += "(f:"+ wordstr + ")";
edt.SetText(output);
}
}
}
}
}
//custom logic assembler
var q = 0;


funcsplitter++;
if(funcsplitter == 1){
var func = app.ReadFile( "/sdcard/noun.txt" );
}
if(funcsplitter == 2){
var func = app.ReadFile( "/sdcard/function.txt" );
funcsplitter = 0;
}
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){

var wordstr  = word[a];
var vocab = txt2.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
if(a > word.length*difficulty){
trace += "(v:"+ wordstr + ")";
output += wordstr+" ";
edt.SetText(output);
}
}
}

q = 1;
break;
}

if (q == 1){
break;
}
}



if(funcsplitter == 2){
var func = app.ReadFile( "/sdcard/noun.txt" );
}
if(funcsplitter == 1){
var func = app.ReadFile( "/sdcard/function.txt" );
funcsplitter = 0;
}
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){

var wordstr  = word[a];
var vocab = txt2.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
if(a > word.length*difficulty){
trace += "(v:"+ wordstr + ")";
output += wordstr+" ";
edt.SetText(output);
}
}
}

q = 1;
break;
}

if (q == 1){
break;
}
}






//custom logic operator
var q = 0;
var func = app.ReadFile( "/sdcard/parameters.txt" );
var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
wordstr = functionorder[b];
//a = b //functionorder
output += wordstr += " ";
trace += "(p:"+ wordstr + ")";
x = c;
difficulty = 0.7;
var sent = sentence[x];
trace += sent;
c = pos;
x = Math.round(x);
if (q == 0){
output += "";
if (update.length > 1 && update != " "){
var updater = app.ReadFile( "/sdcard/parameters.txt" );
updater+= "\n" + update;
app.WriteFile( "/sdcard/parameters.txt",updater );//logic operation updater
}
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}
//custom logic assembler




var wordstr = word[a];
var worddesimp  = word[a+1];
var vocab = app.ReadFile( "/sdcard/noun.txt" );
for(var aaa = a+1; aaa< word.length ;aaa++){
worddesimp  = word[aaa];
for(var aa = 0; aa < vocab.length;aa++){
if(worddesimp == vocab[aa+1]){
if (worddesimp.length > 2){
output += wordstr + " " + worddesimp + " ";
app.ShowPopup(wordstr + " " + worddesimp );
}
q = 1
break;
}

if (q == 1){
break
}
}
}




var wordstr = word[a];
var worddesimp  = word[a-1];
for(var aaa = a-1; aaa> 0;aaa--){
worddesimp  = word[aaa];
var vocab = app.ReadFile( "/sdcard/verb.txt" );
for(var aa = 0; aa < vocab.length;aa++){
if(worddesimp == vocab[aa+1]){
if (worddesimp.length > 2){
output += worddesimp + " " +  wordstr + " ";

app.ShowPopup(worddesimp + " "+wordstr);
}
}
q = 1
break;
}

if (q == 1){
break;
}
}




var q = 0;
funcsplitter++;
if(funcsplitter == 1){
var func = app.ReadFile( "/sdcard/noun.txt" );
}
if(funcsplitter == 2){
var func = app.ReadFile( "/sdcard/function.txt" );
funcsplitter = 0;
}
for(var y = 0;y < sentence.length;y++){
y =  Math.floor(Math.random() * (sentence.length - 0 + 1)) + 0
var sent = sentence[y];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){

var wordstr  = word[a];
var vocab = txt2.split("\n");
for(var b = 0; b < word.length;b++){
if(wordstr == word[b+1]){
if (output.indexOf(wordstr) == -1){
if(a > word.length*difficulty){
trace +=  "(a:"+ wordstr + ")";
output += wordstr+" ";
if (wordstr.length > 1){
update = wordstr;
}
edt.SetText(output);
q = 1;
}
}
}
}
}

if (q == 1){
break
}
}
}
//learning module

if (output.indexOf("?") > -1){
output2+= ".";
}
 output2 += output +  ".\n";
app.WriteFile( "/sdcard/output.txt",output2, "append" );
 app.SetClipboardText( output2);
 edt2.SetText(output2);
txt += output2;
txt += app.ReadFile( "/sdcard/philosophy.txt" );
edtin.SetText(output);

var dl = "";
operator = input.split(" ");
for (var aaaa = 0; aaaa < operator.length;aaaa++){
var string = operator[aaaa];
dl += string + "\n";
}
app.WriteFile( "/sdcard/function.txt",dl,);
/*
if (trial == 1){


var txt = app.ReadFile( "/sdcard/crit.txt" );
//txt += app.ReadFile( "/sdcard/philosophy.txt" );

}
if (trial == 2){
var txt = app.ReadFile( "/sdcard/comm.txt" );
txt += app.ReadFile( "/sdcard/philosophy.txt" );
}
if (trial == 3){
var txt = app.ReadFile( "/sdcard/soc.txt" );

txt += app.ReadFile( "/sdcard/philosophy.txt" )
trial = 0;
}
if (trial == 4){
 txt = app.ReadFile( "/sdcard/AI.txt" );//enhanced mode, for specific event situationtrial = 0;

}

*/
 if (bound == 0){
 init = output2;
 }
/*
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech(output, pitch, speed );
	*/	

app.WriteFile( "/sdcard/proof.txt",trace,"append");
	if (bound == 1){
//cyberneticloop plugset
for(var sentiencescan= x+1;sentiencescan < sentence.length;sentiencescan++){
var check = sentence[sentiencescan];
var procarray = output2.split(" ");
var cyberneticAlpha = procarray[procarray.length]//data node
var cyberneticBeta = procarray[procarray.length-1]//data node
var cyberneticCharlie = procarray[procarray.length-2]//data node
nodeAlpha = check.indexOf(cyberneticAlpha);
nodeBeta = check.indexOf(cyberneticBeta);
nodeCharlie = check.indexOf(cyberneticCharlie);
if (nodeAlpha == nodeBeta){//plugset
if (nodeAlpha == nodeCharlie){//plugset
x = sentiencescan;
break;
}
}
}
}
 if (bound == 0){
 bound = 1;
 }
trial++;
}

checksent = output2.split(".");
checksentb = output2.split(".");
for(var n = 0; n < checksent.length;n++){
checksent2 = checksent[n];
checkword = checksent2.split(" ")
for(var nn = 0; nn < checkword.length;nn++){

for(var n2 = 0; n2 < checksentb.length;n2++){
checksent3 = checksentb[n2];
checkword2 = checksent3.split(" ")
for(var nn2 = 0; nn2 < checkword2.length;nn2++){

var word = checkword[nn];
var word2 = checkword2[nn2];
for(var arr = 0; arr < checkword.length;arr++){
var word = checkword[arr];
var word2 = checkword2[arr];
if (word.length > word2.length){
structure += word + " ";
}
if (word.length < word2.length){
structure += word2 + " ";
}

if (word.length == word2.length){
structure += word2 + " ";
}
arr++;
}


if (checkword[nn] == checkword[nn2]){

var wordp = checkword[nn];
fstruct = wordp + " " + structure;
var construct = checksent2 + " " + checksent3;

}

}
}

}
}


 edt3.SetText(fstruct);



}