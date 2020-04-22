// memanggil jquery
src = "http://code.jquery.com/jquery-3.3.1.js"
integrity = "sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin = "anonymous" >

    // mendapatkan data json menggunakan permintaan get http ajax
    $.getJSON("https://private-2ab4f0-profileayu.apiary-mock.com/data", function (result) {
        console.log(result);
        // menampilkan data objek di tampilan browser
        $.each(result, function () {
            document.getElementById("name").innerHTML = result.name;
            document.getElementById("status").innerHTML = result.status;
            // menampilkan data array skill dan statistik
            document.getElementById("stat1").innerHTML = result.skill[0].stats;
            document.getElementById("skill1").innerHTML = result.skill[0].mySkill;
            document.getElementById("stat2").innerHTML = result.skill[1].stats;
            document.getElementById("skill2").innerHTML = result.skill[1].mySkill;
            document.getElementById("stat3").innerHTML = result.skill[2].stats;
            document.getElementById("skill3").innerHTML = result.skill[2].mySkill;
            document.getElementById("stat4").innerHTML = result.skill[3].stats;
            document.getElementById("skill4").innerHTML = result.skill[3].mySkill;
            document.getElementById("stat5").innerHTML = result.skill[4].stats;
            document.getElementById("skill5").innerHTML = result.skill[4].mySkill;
            document.getElementById("stat6").innerHTML = result.skill[5].stats;
            document.getElementById("skill6").innerHTML = result.skill[5].mySkill;
            // menampilkan data href
            document.getElementById("twitter").href = result.twitter;
            document.getElementById("github").href = result.github;
            document.getElementById("linkedin").href = result.linkedin;
        });
    });