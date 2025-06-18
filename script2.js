async function change_myselect(sel) {
   // const dbParam = JSON.stringify({table: sel, limit: 20 });

   const response = await fetch ("json_demo_html_table.php", {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
    },
        body: "x=" + JSON.stringify(dbParam),
   });

   const data = await response.json();

   text = "<table border='1'>";
   for (x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
   }
   text += "</table>";
   document.getElementById("demo").innerHTML = text;
}
