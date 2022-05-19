class Tag{
    constructor(TagName){
        ' Used to create a new tag. '
        this.TagName = TagName;
        this.Attr_Names = [];
        this.Attr_Values = [];
        this.children = [];
        this.innerText = "";
        this.style = "";
    }
    setAttr(Attr_Name, Attr_Value){
        ' Used to set an attribute of the tag. '
        if (Attr_Name in this.Attr_Names){ // Checking if the attribute exists
            this.Attr_Values[this.Attr_Names.indexOf(Attr_Name)] = Attr_Value; // Updating the value
        }
        else{
            this.Attr_Names.push(Attr_Name); // Adding the attribute
            this.Attr_Values.push(Attr_Value); // Adding the value
        }        
    }
    delAttr(Attr_Name){
        ' Used to delete an attribute from the tag. '
        var index = this.Attr_Names.indexOf(Attr_Name);
        if(index > -1){ // Checking if the attribute exists
            this.Attr_Names.splice(index, 1); // Removing the attribute
            this.Attr_Values.splice(index, 1); // Removing the value
        }
    }
    setInnerText(innerText){
        ' Used to set the inner text of the tag. '
        this.innerText = innerText; // Updating the innerText
    }
    addChild(child){
        ' Used to add a sub tag to the current tag. '
        this.children.push(child); // Adding the child to the children array
    }
    addStyle(style){
        ' Used to add a style to the tag. '
        this.style += style; // Adding the style to the style string
    }
    getStyle(){
        ' Used to get the style of the tag. '
        return this.style; // Returning the style
    }
    resetStyle(){
        ' Used to reset the style of the tag. '
        this.style = ""; // Resetting the style
    }
    stringify(){
        ' Used to convert the tag to a string. '
        
        // Creating the opening tag
        var str = "<" + this.TagName;
        for(var i = 0; i < this.Attr_Names.length; i++){
            str += " " + this.Attr_Names[i] + "=\"" + this.Attr_Values[i] + "\"";
        }

        str += " style=\"" + this.style + "\">"; // Adding the style to the opening tag
        
        // Adding the inner text
        str += this.innerText;

        // Adding the string of children
        for(var i = 0; i < this.children.length; i++){
            str += this.children[i].stringify();
        }
        return str;
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
input.addStyle("outline: none;");
let div = new Tag("div");
div.setAttr("id", "myDiv");
div.setInnerText("Enter a number between 0 and 100:");
div.addChild(new Tag("br"));
div.addChild(input);
div.addStyle("border: 1px solid skyblue;");
div.addStyle("padding: 10px;");
div.addStyle("border-radius: 5px;");
div.addStyle("box-shadow: 0px 0px 25px skyblue;");
document.getElementById("output").innerHTML = div.stringify();

let inptbx = new Tag("inputBox");

let inputBox = new CustomTag(inptbx);
inputBox.define(div);
inputBox.publish();