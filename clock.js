    let Name = prompt("Adınızı Giriniz");
    let myName= document.querySelector("#myName")
   
    myName.innerHTML = `${Name.toUpperCase()}!`
    

    function tarihSaat() {
        var date = new Date().toLocaleString();
        document.querySelector("#myClock").innerHTML = date;
    }


    const d = new Date();
    const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
    document.querySelector("#myDay").innerHTML = days[d.getDay()];


    setInterval(tarihSaat, 1000); 


    

      