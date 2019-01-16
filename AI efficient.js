//neural network function organiser
var output = "";
var update = "";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
var stage = 0;
var depth = 3;
var pos = 0;
var output2 = "";
var iter = 0;
function OnStart()
{


app.ShowPopup("initialising" );
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
var output = "";
var logicordershift = 1
	edtin  = app.CreateTextEdit( "", 0.96, 0.1); 
	edtin.SetTextSize(12 );
	lay.AddChild( edtin );
	edt = app.CreateTextEdit( "", 0.96, 0.2); 
	edt.SetTextSize(12 );
	lay.AddChild( edt );
	edt2= app.CreateTextEdit( "", 0.96, 0.4); 
	edt2.SetTextSize(12 );
	lay.AddChild( edt2 );
	btnLoad = app.CreateButton( "Actuate", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 

	app.AddLayout( lay );
}
function btnLoad_OnTouch() 
{ 
 var db2 = "";
while(0==0){
output = "";
var txt = app.ReadFile( "/sdcard/philosophy.txt" );
sentence = txt.split(".");
var input = edtin.GetText();
x = txt.indexOf(input);
for(var x = 0;x < sentence.length;x++){
terminator = output.split(" ");
if (terminator.length > 17){
filesave += output + "\n";
break;
}
var q = 0;
var str = "/sdcard/function.txt,/sdcard/abst.txt,/sdcard/noun.txt,/sdcard/av.txt,/sdcard/parameters.txt,/sdcard/adj.txt,/sdcard/noun.txt" 
str = str.split(",");
var func = app.ReadFile(str[iter]);
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
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
if (wordstr.indexOf(sent) == -1){
output += wordstr+" ";
iter++;
if (iter == str.length){
iter = 0;
}
}
update = wordstr;
edt.SetText(output);

}
}
}
}
}
}
}

 output2 += output +  "\n";
 edt2.SetText(output2);
 app.SetClipboardText( output2);
}
}
}