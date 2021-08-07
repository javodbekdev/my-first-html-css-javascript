let fruits = ["apple", "kiwi", "banana", "watermelon"];
    function ok(){
        for (let i = 0; i < fruits.length; i++) {
            let input = document.getElementById("input").value;
            if(input === fruits[i]){
                alert("bor")
                break
            }else{
                alert("yo'q")
            }
        }
    }