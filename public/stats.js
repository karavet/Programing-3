var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");


setInterval(function(){
    
    socket.emit("get stats", []);
});


socket.on("send stats",function(statistics){
    
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>time</td><td>grass - flower</td><td>grasseater die</td><td>mull gishatich</td><td>flower energy</td><td>tree energy</td><td>frameCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.becomeFlower+"</td>";
        tableHTML+="<td>"+st.die+"</td>";
        tableHTML+="<td>"+st.mul+"</td>";
        tableHTML+="<td>"+st.energy+"</td>";
        tableHTML+="<td>"+st.move+"</td>";
        tableHTML+="<td>"+st.treeEnergy+"</td>";
        tableHTML+="<td>"+st.framecount+"</td>";

        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    console.log(statistics);
})

