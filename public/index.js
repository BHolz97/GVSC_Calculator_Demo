var TotalCost = 0;
// $("#save-value-r").hide();

$(document).ready(function () {
    $("#save-value-r").hide();
});

// $(document).ready(function () {
//     $("#submit").click(function () {
//         var CurrentCost = $("#CallCost").val();
//         $("#CallSave").html(`You would save R${(CurrentCost * 30) / 100}.`);
//         TotalCost = TotalCost + (CurrentCost * 30) / 100;
//         // $("#CallSave").show();
//     });
// });

function callCost() {
    let CurrentCost = parseInt($("#CallCost").val());
    TotalCost = TotalCost + (CurrentCost * 30) / 100;
    console.log(`Call Cost ${TotalCost}`);
}

//-------------------------------------------------------------------------------

// $(document).ready(function () {
//     $("#submit").click(function () {
//         var CurrentCost = $("#EquipCost").val();
//         $("#EquipSave").html(`You would save R${(CurrentCost * 15) / 100}.`);
//         TotalCost = TotalCost + (CurrentCost * 15) / 100;
//         // $("#CallSave").show();
//     });
// });

function equipCost() {
    let CurrentCost = parseInt($("#EquipCost").val());
    TotalCost = TotalCost + (CurrentCost * 15) / 100;
    console.log(`Equip Cost ${TotalCost}`);
}

//-------------------------------------------------------------------------------

// $(document).ready(function () {
//     $("#submit").click(function () {
//         var CurrentCost = $("#LineCost").val();
//         if ($("#ServiceProvider").val() == "Telkom") {
//             $("#LineSave").html(`You would save R${CurrentCost}.`);
//             TotalCost = TotalCost + CurrentCost;
//         } else {
//             $("#LineSave").html(`You would save R${(CurrentCost * 30) / 100}.`);
//             TotalCost = TotalCost + (CurrentCost * 30) / 100;
//         }
//     });
// });

function lineCost() {
    let CurrentCost = parseInt($("#LineCost").val());
    if ($("#ServiceProvider").val() === "Telkom") {
        TotalCost = TotalCost + CurrentCost;
    } else {
        TotalCost = TotalCost + (CurrentCost * 30) / 100;
    }
    console.log(`Line Cost ${TotalCost}`);
}

//-------------------------------------------------------------------------------

// $(document).ready(function () {
//     $("#submit").click(function () {
//         var CurrentCost = $("#InternetCost").val();
//         $("#InternetSave").html(`You would save R${(CurrentCost * 0) / 100}.`);
//         TotalCost = TotalCost + (CurrentCost * 0) / 100;
//         // $("#CallSave").show();
//     });
// });

function internetCost() {
    let CurrentCost = parseInt($("#InternetCost").val());
    TotalCost = TotalCost + (CurrentCost * 0) / 100;
    console.log(`Internet Cost ${TotalCost}`);
}

//-------------------------------------------------------------------------------

// $(document).ready(function () {
//     $("#submit").click(function () {
//         $("#TotalSave").html(`You would save a Estimated Total of R${TotalCost}.`);
//         // $("#CallSave").show();
//         TotalCost = 0;
//     });
// });

function animateValue(start, end, duration) {
    $("#save-value-r").show();
    var range = end - start;
    console.log("Range: " + range);
    var current = start;
    //var increment = end > start ? 1 : -1;
    var increment = (end - start) / 100;
    console.log("Increment: " + increment);
    // var stepTime = Math.abs(Math.floor(duration / range));
    var stepTime = Math.abs(duration / range);
    console.log("Step time: " + stepTime);
    //var obj = document.getElementById(id);
    var timer = setInterval(function () {
        //console.log("Tik");
        current += increment;
        if (current > end) {
            $("#save-value").html(Math.floor(current));
            clearInterval(timer);
        }
        //obj.innerHTML = current;
        $("#save-value").html(Math.floor(current));
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function calculateSaving() {
    TotalCost = 0;
    callCost();
    equipCost();
    lineCost();
    internetCost();
    // $("#TotalSave").html(`You would save an estimated total of R${TotalCost}.`);
    $("#TotalSave").html(`You would save an estimated total of:`);
    animateValue(0, parseInt(TotalCost), 2);
    //$("#save-value").html("TEST");
}

//-------------------------------------------------------------------------------
