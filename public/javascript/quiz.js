function select(evt, exclusive){
    if(exclusive==true){
        for(let ele of document.querySelectorAll(".selected")){
            ele.classList.remove("selected");
            ele.classList.add("unselected")
        }
        evt.currentTarget.classList.add("selected");
        evt.currentTarget.classList.remove("unselected")
    }else{
        evt.currentTarget.classList.add("selected");
        evt.currentTarget.classList.remove("unselected")
    }
}