class Tag{
    constructor(TagName){
        ' Used to create a new tag. '
        this.TagName = TagName;
        this.element = document.createElement(this.TagName);        
        this.innerText = "";
        this.styleAttr_Name = [];
        this.styleAttr_Value = [];
    }

    setAttr(Attr_Name, Attr_Value){
        ' Used to set an attribute of the tag. '
        this.element.setAttribute(Attr_Name, Attr_Value);        
    }

    delAttr(Attr_Name){
        ' Used to delete an attribute from the tag. '
        this.element.removeAttribute(Attr_Name);
    }

    setInnerText(innerText){
        ' Used to set the inner text of the tag. '
        this.innerText = innerText; // Updating the innerText
    }

    addChild(child){
        ' Used to add a sub tag to the current tag. '
        this.element.appendChild(child); // Adding the child
    }

    addStyle(styleName, styleValue){
        ' Used to add a style to the tag. '
        if (this.styleAttr_Name in this.styleAttr_Names){ // Checking if the attribute exists
            this.styleAttr_Values[this.styleAttr_Names.indexOf(styleName)] = styleValue; // Updating the value
        }
        else{
            this.styleAttr_Name.push(styleName); // Adding the style to the style string
            this.styleAttr_Value.push(styleValue); // Adding the value to the style string
        }        
    }

    removeStyle(styleName){
        ' Used to remove a style from the tag. '
        var index = this.styleAttr_Name.indexOf(styleName);
        if(index > -1){ // Checking if the attribute exists
            this.styleAttr_Name.splice(index, 1); // Removing the attribute
            this.styleAttr_Value.splice(index, 1); // Removing the value
        }
    }

    createStyleString(){
        ' Used to create the style string. '
        var str = "";
        for(var i = 0; i < this.styleAttr_Name.length; i++){
            str += this.styleAttr_Name[i] + ":" + this.styleAttr_Value[i] + ";";
        }
        return str;
    }

    getElement(){
        ' Used to get the element of the tag. '
        this.element.style = this.createStyleString();
        return this.element; // Returning the element
    }
}

class CustomTag{
    constructor( Tag ){
        this.customTag = Tag;
        this.actualTag;
        this.innerHTMLTag;
    }
    define( realTag ){
        ' Used to define a custom tag. '
        this.actualTag = realTag;
    }
    publish(){
        ' Used to publish the custom tag. '
        elements = document.getElementsByTagName(this.customTag.TagName);
        for(var i = 0; i < elements.length; i++){
            elements[i].innerHTML = this.customTag.stringify();
            elements[i].parentNode.replaceChild(this.actualTag.stringify(), elements[i]);
        }

    }
}

// Test

let input = new Tag("input");
input.setAttr("type", "number");
input.setAttr("value", "0");
input.setAttr("min", "0");
input.setAttr("max", "100");
input.addStyle("outline","none");
// let div = new Tag("div");
// div.setInnerText("Enter a number between 0 and 100:");
// div.addChild(input.getElement());
// div.addStyle("border","1px solid skyblue");
// div.addStyle("padding", "10px");
// div.addStyle("border-radius", "5px");
// div.addStyle("box-shadow", "0px 0px 25px skyblue");
let inp = document.createElement("input");
// document.body.appendChild(input.getElement());
document.body.appendChild(document.createElement("input"));

// let inptbx = new Tag("inputBox");

// let inputBox = new CustomTag(inptbx);
// inputBox.define(div);
// inputBox.publish();