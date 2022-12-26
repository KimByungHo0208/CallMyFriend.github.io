var title = document.title;
if(title !== JSON.stringify(localStorage.getItem("present"))){
    localStorage.removeItem('present');
}
localStorage.setItem('present',  JSON.stringify(title));
var refer = localStorage.getItem('present');
for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; // setItem, getItem 등의 키를 건너뜁니다.
    }
    var person = JSON.parse(localStorage.getItem(key));
    if(JSON.stringify(person.refer) === refer){
        var Pname = person.name;
        var phone = person.phone;
        var relation = person.relation;

        var button = document.createElement('button');
        button.type = 'button';
        button.innerText = Pname+'\n'+phone+'\n'+relation;
        button.value = phone;
        button.className = 'btn';
        
        button.onclick = function() {
            location.href="tel:"+phone;
        };
        
        var container = document.getElementById('btns');
        container.appendChild(button);
        // document.addEventListener('DOMContentLoaded', function() {
        //     var button = document.createElement('button');
        //     button.type = 'button';
        //     button.innerText = Pname+'\n'+phone+'\n'+relation;
        //     button.value = phone;
        //     button.className = 'btn';
            
        //     button.onclick = function() {
        //         location.href="tel:"+phone;
        //     };
            
        //     var container = document.getElementById('btns');
        //     container.appendChild(button);
        // });
    }
  }