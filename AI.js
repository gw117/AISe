var difficulty = 0.3;
var init;
var corr = "";
var trial = 0;
var qq = 0;
var output = "";
var update = "";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
var stage = 0;
var bound = 0;
var depth = 10;
var pos = 0;
var output2 = "";
var semanticspread = 5
function OnStart()
{
app.ShowPopup("initialising" );
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
var output = "";
var logicordershift = 1
	edt = app.CreateTextEdit( "", 0.96, 0.7); 
	edt.SetTextSize(8 );
	lay.AddChild( edt );
	edt2= app.CreateTextEdit( "", 0.96, 0.2); 
	edt2.SetTextSize(8);
	lay.AddChild( edt2 );
	btnLoad = app.CreateButton( "Actuate", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 
	app.AddLayout( lay );
}
function btnLoad_OnTouch() 
{ 
 var db2 = "";
app.ShowPopup("Construct" );
var txt = app.ReadFile( "/sdcard/philosophy.txt" );
 txt += app.ReadFile( "/sdcard/AI.txt" );
sentence = txt.split(".");
while(0==0){
output = "";
for(var x = 0;x < sentence.length;x++){
//line terminator/blocking, 
terminator = output.split(" ");
if (terminator.length > 20){//output length
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
//a = b //functionorder
x = c;
pos = c;
x = Math.round(x);
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
//custom logic assembler
var q = 0;
var func = app.ReadFile( "/sdcard/noun.txt" );
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
  var txt = app.ReadFile( "/sdcard/function.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
if(a > word.length/difficulty){
output += wordstr+" ";
edt.SetText(output);
}
}
}
}
}
//custom logic assembler
var q = 0;
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/verb.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr > vocab[b]){
if (output.indexOf(wordstr) == -1){
if(a > word.length*difficulty){
output += wordstr+" ";
edt.SetText(output);
}
}
}
}
}
//custom logic operator
var q = 0;
var func = app.ReadFile( "/sdcard/parameters.txt" );
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
//a = b //functionorder x
x = c;
c = pos;
x = Math.round(x);
if (q == 0){
output += "";
if (update.length > 1){
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
var q = 0;
for(var y = 0;y < sentence.length;y++){
y =  Math.floor(Math.random() * (sentence.length - 0 + 1)) + 0
var sent = sentence[y];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/adj.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
if(a > word.length*difficulty){
output += wordstr+" ";

update = wordstr;
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
var download = output.split(" ");
var refreshermind = "";
for (var mind = 0; mind < download.length;mind++){
refreshermind+=  download[mind] + "\n";
app.WriteFile( "/sdcard/function.txt",refreshermind,"append");
}
if (output.indexOf("?") > -1){
output2+= ".";
}
 output2 += output +  ".\n";
app.WriteFile( "/sdcard/output.txt",output2, "append" );
 app.SetClipboardText( output2);
 edt2.SetText(output2);
 txt = output2;


if (trial == 5){
app.ShowPopup("Construct" );
var txt = app.ReadFile( "/sdcard/philosophy.txt" );
 txt += app.ReadFile( "/sdcard/AI.txt" );//enhanced mode, for specific event situation
}


if (trial == 10){
 txt = app.ReadFile( "/sdcard/output.txt" );
app.ShowPopup("Proto emulation" ); //seperate proto emulation output db from construct output db? (for causation validation and interference protection, to prevent domain interchange between, new actuation and previous actuation(memory/brain and "hardware" cognition.)
trial = 0;
}
trial++;

 if (bound == 0){
 init = output2;

 }
/*
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech(output, pitch, speed );
	*/
	
	if (bound == 1){
//cyberneticloop plugset
for(var sentiencescan= 0;sentiencescan < sentence.length;sentiencescan++){
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
}
}
}
}


 if (bound == 0){
 bound = 1;
 }

}
}