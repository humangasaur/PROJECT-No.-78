images = ["mom.jpg", "papa.jpg", "tai ji.png", "dadi.jpg", "didi.png", "me.jpg"];
names = ["Mother", "Dad", "Tai ji","Dadi", "Didi", "Me"];
var i = 0;
function update(){
    if ( i==5){
        i=0;
    }
    document.getElementById("image").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
}