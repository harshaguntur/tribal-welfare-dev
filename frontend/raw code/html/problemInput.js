let Pic = document.getElementById("pic1");
        let inputFile = document.getElementById("image_input");

        inputFile.onchange = function(){
            Pic.src = URL.createObjectURL(inputFile.files[0]);
        }