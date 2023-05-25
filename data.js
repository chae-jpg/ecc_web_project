class foodData {
    constructor(name, img_link, hashtag) {
        this.name = name;
        this.img_link = img_link
        this.hashtag = hashtag
    }    
}

var dataArr = new Array();
dataArr.push(new foodData("돈천동", "https://mp-seoul-image-production-s3.mangoplate.com/96788/731481_1517132364527_23832", ["일식", "돈까스"]));
dataArr.push(new foodData("돈천동", "https://mp-seoul-image-production-s3.mangoplate.com/96788/731481_1517132364527_23832", ["일식", "돈까스"]));
dataArr.push(new foodData("돈천동", "https://mp-seoul-image-production-s3.mangoplate.com/96788/731481_1517132364527_23832", ["일식", "돈까스"]));

for (let i = 0; i < dataArr.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.cssText = 'border : 1px solid #CBCBCB; background-color : #FFF; width: 90%; height: 83px; box-shadow: 0px 1px 5px 0.5px #CBCBCB; position: relative; margin: 0 auto; margin-bottom: 10px;'; 
    var newImg = document.createElement('img');
    newImg.src = dataArr[i].img_link;
    newImg.style.cssText = 'border-radius: 15%; max-height: 70px; position: relative; object-fit: cover; left: 2%; margin: 1%;';
    //var nameText = document.createTextNode(dataArr[i].name);
    //nameText.style.cssText = ''
    newDiv.appendChild(newImg);
    //newDiv.appendChild(nameText);
    document.body.appendChild(newDiv);
    console.log("create block : " + i);
}

for (let i = 0; i < dataArr.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.cssText = 'border : 1px solid #CBCBCB; background-color : #FFF; width: 90%; height: 65px; box-shadow: 0px 1px 5px 0.5px #CBCBCB; position: relative; margin: 0 auto;'; 
    var newImg = document.createElement('img');
    newImg.src = dataArr[i].img_link;
    newImg.style.cssText = 'border-radius: 15%; max-height: 55px; position: relative; object-fit: cover; left: 2%; margin: 1%;';
    //var nameText = document.createTextNode(dataArr[i].name);
    //nameText.style.cssText = ''
    newDiv.appendChild(newImg);
    //newDiv.appendChild(nameText);
    document.body.appendChild(newDiv);
    console.log("create block : " + i);
}