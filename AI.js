//neural network function organiser
var output = "";
var update = "begin program: ";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
function OnStart()
{


app.ShowPopup("initialising" );


	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	




var output = "";
var logicordershift = 1


	edt = app.CreateTextEdit( "", 0.96, 0.6); 
	edt.SetTextSize(12 );
	lay.AddChild( edt );



	btnLoad = app.CreateButton( "Actuate", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 

	app.AddLayout( lay );
}


function btnLoad_OnTouch() 
{ 



while(0==0){
 output = "";
var txt = app.ReadFile( "/sdcard/undefined.txt" );
sentence = txt.split(".");
x =  Math.floor(Math.random() * (sentence.length - 0 + 1)) + 0
for(var x = 0;x < sentence.length;x++){

terminator = output.split(" ");
if (terminator.length > 1){
filesave += output + "\n";
app.WriteFile( "/sdcard/output.txt",filesave, "append" );
break;
}


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
x = c;

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


var q = 0
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/noun.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
output += wordstr+" ";
edt.SetText(output);
app.SetClipboardText( output);
}
}
}
}

var q = 0;
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/verb.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
output += wordstr+" ";
edt.SetText(output);
app.SetClipboardText( output);
}
}
}
}

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
//a = b //functionorder
x = c;
if (q == 0){
output += "";

if (update.length > 1){
var updater = app.ReadFile( "/sdcard/parameters.txt" );
updater+= "\n" + update;
app.WriteFile( "/sdcard/parameters.txt",updater );

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


var q = 0;
var func = app.ReadFile( "/sdcard/extroversion.txt" );
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
x = c;
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
output += wordstr+" ";
update = wordstr;
edt.SetText(output);
app.SetClipboardText( output);
q = 1;
}
}
}
}

if (q == 1){
break
}
}


}



app.ShowPopup("Activation" );

var download = output.split(" ");
var refreshermind = "";
for (var mind = 0; mind < download.length;mind++){
refreshermind+=  download[mind] + "\n";
app.WriteFile( "/sdcard/function.txt",refreshermind,"append");
}
}
}