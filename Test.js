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