var screenWidth = window.screen.width;
var screenHeight = window.screen.height;    
var img = document.getElementsByTagName('img')
var SiteName = 'Mathblogs'
var SiteUrlEnding = '.github.io'

function ChangeImgSize() {
    var screenWidth = window.screen.width;
var screenHeight = window.screen.height;    
var img = document.getElementsByTagName('img')
    changedWidth = screenWidth - '68px'

    var Size = changedWidth / 4
    
    img.style.height = Size
    img.style.width = Size
    console.log = Size
}

ChangeImgSize()