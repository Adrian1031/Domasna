function light(off) {
    var pic;
    if (off == 0) {
      pic = "https://www.w3schools.com/js/pic_bulboff.gif"
    } else {
      pic = "https://www.w3schools.com/js/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }