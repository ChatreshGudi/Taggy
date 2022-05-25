// Test

// Testing the Tag Class
let input = new Tag("input");
input.setAttr("type", "text");
input.setAttr("placeholder", "Enter your name");
input.setAttr("id", "name");
input.addStyle("outline", "none");
document.body.appendChild(input.getElement());

// Testing the CustomTag Class
let card = new CustomTag(new Tag("card"));
let customcard = new Tag("div");
customcard.setAttr("class", "card");
card.define(customcard);
card.publish();

let smbtn = new CustomTag(new Tag("smbtn"));
let customsmbtn = new Tag("button");
customsmbtn.setAttr("class", "smart-btn");
smbtn.define(customsmbtn);
smbtn.publish();

let animate = new Tag("animate");
animate.setAttr("id", "rectid");
animate.setAttr("attributeName", "fill");
animate.setAttr("values", "blue;black;blue");
animate.setAttr("dur", "5s");
animate.setAttr("repeatCount", "2");
animate.setAttr("begin", "0s");
animate.setAttr("restart", "always");
this.self.appendChild(animate.getElement());
document.getElementById("fill").setAttribute("attributeName", "fill");
document.getElementById("rect").appendChild(animate.getElement())