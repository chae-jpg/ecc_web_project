class foodData {
    constructor(name, img_link, hashtag) {
        this.name = name;
        this.img_link = img_link
        this.hashtag = hashtag
    }    
}

var dataArr = new Array();
dataArr.push(new foodData("돈천동", "https://img.siksinhot.com/place/1481587042136677.jpg", ["일식", "돈까스"]));
dataArr.push(new foodData("돈천동", "https://img.siksinhot.com/place/1481587042136677.jpg", ["일식", "돈까스"]));
dataArr.push(new foodData("돈천동", "https://img.siksinhot.com/place/1481587042136677.jpg", ["일식", "돈까스"]));




//flex 모델 적용
for (let i = 0; i < dataArr.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.cssText = 'border : 1px solid #CBCBCB; background-color : #FFF; width: 80%; height: 83px; box-shadow: 0px 1px 5px 0.5px #CBCBCB; display: flex; align-items: center; margin: 0 auto; margin-bottom: 10px; border: none;'; 
    var newImg = document.createElement('img');
    newImg.src = dataArr[i].img_link;
    newImg.style.cssText = 'border-radius: 15%; max-height: 60px; position: relative; object-fit: cover; left: 8%;';
    var nameText = document.createElement('span');
    var nameTextText = document.createTextNode(dataArr[i].name);
    nameText.append(nameTextText);
    nameText.style.cssText= 'align-self: flex-start; margin-left: 15%; margin-top: 10px; font-weight: bold; font-size: 1rem;';
    var heartBtn = document.createElement('button');
    heartBtn.style.cssText= 'background: url("heart.png"); background-size: cover; height: 20px; width: 20px; margin-left: auto; align-self: flex-start; margin-top: 10px; border: none; margin-right: 20px;'
    heartBtn.className += "heartBtn";
    newDiv.appendChild(newImg);
    newDiv.appendChild(nameText);
    newDiv.appendChild(heartBtn);
    document.body.appendChild(newDiv);
    console.log("create block : " + i);

}

for (let i = 0; i < dataArr.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.cssText = 'border : 1px solid #CBCBCB; background-color : #FFF; width: 80%; height: 65px; box-shadow: 0px 1px 5px 0.5px #CBCBCB; display: flex; align-items: center; margin: 0 auto; border: none;'; 
    var newImg = document.createElement('img');
    newImg.src = dataArr[i].img_link;
    newImg.style.cssText = 'border-radius: 15%; max-height: 50px; position: relative; object-fit: cover; left: 4%; margin: 1%;';
    //var nameText = document.createTextNode(dataArr[i].name);
    //nameText.style.cssText = ''
    newDiv.appendChild(newImg);
    //newDiv.appendChild(nameText);
    document.body.appendChild(newDiv);
    console.log("create block : " + i);
}

document.getElementsByClassName("heartBtn").onclick = function () {
    document.getElementsByClassName("heartBtn").style.backgroundImage = "url('home.png')";
};