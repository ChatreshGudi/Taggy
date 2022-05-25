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
        this.element.innerText = innerText; // Updating the innerText
    }
    
    setInnerHTML(innerHTML){
        ' Used to set the inner text of the tag. '
        this.element.innerHTML = innerHTML; // Updating the innerText
    }

    addChild(child){
        ' Used to add a sub tag to the current tag. '
        this.element.appendChild(child); // Adding the child
    }

    addStyle(styleName, styleValue){
        ' Used to add a style to the tag. '
        if (this.styleName in this.styleAttr_Name){ // Checking if the attribute exists
            this.styleAttr_Value[this.styleAttr_Name.indexOf(styleName)] = styleValue; // Updating the value
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
    constructor( Tagname ){
        ' Used to create a new custom tag. '
        this.TagName = Tagname;
        this.actualTag;
        this.innerHTMLTag;
    }
    define( realTag ){
        ' Used to define a custom tag. '
        this.actualTag = realTag;
    }
    publish(){
        ' Used to publish the custom tag. '
        let elements = document.getElementsByTagName(this.TagName);
        console.log(elements);
        for(var i = 0; i < elements.length; i++){
            console.log(this.actualTag)
            this.actualTag.setInnerHTML(elements[i].innerHTML);
            elements[i].parentNode.replaceChild(this.actualTag.getElement(), elements[i]);
        }


    }
}

// Test

let input = new Tag("input");
input.setAttr("type", "text");
input.setAttr("placeholder", "Enter your name");
input.setAttr("id", "name");
input.addStyle("outline", "none");
document.body.appendChild(input.getElement());

let card = new CustomTag("card");
let customcard = new Tag("div");
customcard.setAttr("class", "card");
card.define(customcard);
card.publish();