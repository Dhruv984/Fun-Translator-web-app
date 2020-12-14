const click_me_button=document.querySelector("#btn");
const input_field_value=document.querySelector("#input-field");
const output_field_value=document.querySelector("#output-field");
click_me_button.addEventListener("click",()=>{
    console.log("clicked");
    console.log(input_field_value.value);
    func();

})

const func= async (url)=>{
    try{
        const data= await fetch(`https://api.funtranslations.com/translate/yoda.json?
        text=${input_field_value.value}`);
        console.log(data);
        const obj= await data.json();
        console.log(obj);
        output_field_value.innerHTML=obj.contents.translated;
    }
    catch(e){
        console.log("the error is"+ e);
    }
    
}



