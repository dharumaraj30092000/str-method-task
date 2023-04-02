let usrMail="dharumaj5678@gmail.com";
let number=usrMail.match(/[0-9]/g);
var add=0;

for(let i=0;i<number.length;i++){
	if(number[i]%2==0){
		add=add+parseInt(number[i]);
	}
}
console.log(add);

let useLink="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_Y2VjYjM2MzYtYzU1Yy00NDdmLTlkMjItODQ2YTgyMmEwZGQ4%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522fc85d8bd-43b0-4574-8a37-61b67a3f1bb9%2522%252c%2522Oid%2522%253a%2522ca3e1161-433d-473a-87ff-3aca96ad36f2%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=17fc5cc3-51c5-4885-9d3d-a7bb752caef6&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true";
let splitWord=useLink.match(/[a-zA-Z]/g);
let splitNumber=useLink.match(/[0-9]/g);
let splitCharacter=useLink.match(/[^\w\s]/g);//----- default-reg-symbol -----//
console.log("splitWord",splitWord,"splitNumber",splitNumber,"splitCharacter",splitCharacter);