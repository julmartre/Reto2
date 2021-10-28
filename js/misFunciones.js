/*=====ROOM=====*/

function searchInformationRoom(){
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(answer){
            console.log(answer);
            printAnswerRoom(answer.items)
        }
    });
}

function printAnswerRoom(items){
    let myTable = "<table class='table table-dark text-center'>";
        myTable += "<tr>";
        myTable += "<td>ID</td>";
        myTable += "<td>ROOM</td>";
        myTable += "<td>STARS</td>";
        myTable += "<td>CATEGORY ID</td>";
        myTable += "<td>DESCRIPTION</td>";
        myTable += "<td>ACTIONS</td>";
        myTable += "</tr>";

    for(i = 0;i < items.length;i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].room + "</td>";
        myTable += "<td>" + items[i].stars + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td><button class='btn btn-outline-danger' onclick='deleteInformationRoom("+items[i].id+")'>Delete</button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#outcomeRoom").append(myTable);
}

function createInformationRoom(){
    let myData = {
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(answerRoom){
            $("#outcomeRoom").empty();
            $("#id").val(""),
            $("#room").val(""),
            $("#stars").val(""),
            $("#category_id").val(""),
            $("#description").val(""),
            searchInformationRoom();
            alert("Logged data.")
        }
    });
}

function updateInformationRoom(){
    let myData = {
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/room/room",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerRoom){
            $("#outcomeRoom").empty();
            $("#id").val(""),
            $("#room").val(""),
            $("#stars").val(""),
            $("#category_id").val(""),
            $("#description").val(""),
            searchInformationRoom();
            alert("Updated data.")
        }
    });
}

function deleteInformationRoom(idElement){
    let myData = {
        id:idElement
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerRoom){
            $("#outcomeRoom").empty();
            searchInformationRoom();
            alert("Deleted data.")
        }
    });
}

/*=====CLIENT=====*/

function searchInformationClient(){
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(answer){
            console.log(answer);
            printAnswerClient(answer.items)
        }
    });
}

function printAnswerClient(items){
    let myTable = "<table class='table table-dark text-center'>";
        myTable += "<tr>";
        myTable += "<td>ID</td>";
        myTable += "<td>NAME</td>";
        myTable += "<td>EMAIL</td>";
        myTable += "<td>AGE</td>";
        myTable += "<td>ACTIONS</td>";
        myTable += "</tr>";

    for(i = 0; i < items.length;i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td><button class='btn btn-outline-danger' onclick='deleteInformationClient("+items[i].id+")'>Delete</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#outcomeClient").append(myTable);

}

function createInformationClient(){
    let myData = {
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(answerClient){
            $("#outcomeClient").empty();
            $("#id").val(""),
            $("#name").val(""),
            $("#email").val(""),
            $("#age").val(""),
            searchInformationClient();
            alert("Logged data.")
        }
    });
}

function updateInformationClient(){
    let myData = {
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    }

    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerClient){
            $("#outcomeClient").empty();
            $("#id").val(""),
            $("#name").val(""),
            $("#email").val(""),
            $("#age").val(""),
            searchInformationClient();
            alert("Updated data")
        }
    });
}

function deleteInformationClient(idElement){
    let myData = {
        id:idElement
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerClient){
            $("#outcomeClient").empty();
            searchInformationClient();
            alert("Deleted data.")
        }
    });
}

/*=====MESSAGE=====*/

function searchInformationMessage(){
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(answer){
            console.log(answer);
            printAnswerMessage(answer.items)
        }
    });
}

function printAnswerMessage(items){
    let myTable = "<table class='table table-dark text-center'>";
        myTable += "<tr>";
        myTable += "<td>ID</td>";
        myTable += "<td>MESSAGE TEXT</td>";
        myTable += "<td>ACTIONS</td>";
        myTable += "</tr>";

    for(i = 0; i < items.length;i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td><button class='btn btn-outline-danger' onclick='deleteInformationMessage("+items[i].id+")'>Delete</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#outcomeMessage").append(myTable);

}

function createInformationMessage(){
    let myData = {
        id:$("#id").val(),
        messagetext:$("#message_text").val(),
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(answerMessage){
            $("#outcomeMessage").empty();
            $("#id").val(""),
            $("#message_text").val(""),
            searchInformationMessage();
            alert("Logged data.")
        }
    });
}

function updateInformationMessage(){
    let myData = {
        id:$("#id").val(),
        messagetext:$("#message_text").val(),
    }

    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerMessage){
            $("#outcomeMessage").empty();
            $("#id").val(""),
            $("#message_text").val(""),
            searchInformationMessage();
            alert("Updated data")
        }
    });
}

function deleteInformationMessage(idElement){
    let myData = {
        id:idElement
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g349d86dc65d326-db202110031705.adb.uk-london-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(answerMessage){
            $("#outcomeMessage").empty();
            searchInformationMessage();
            alert("Deleted data.")
        }
    });
}