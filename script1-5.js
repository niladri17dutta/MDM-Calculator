// console.log("This Js is for calculation of MDM of class I-V")

// let quanrice = document.getElementById('quanrice');

// let quandal = document.getElementById('quandal');
// let pricdal = document.getElementById('pricdal');

// let quansalt = document.getElementById('quansalt');
// let pricsalt = document.getElementById('pricsalt');

// let quansabji = document.getElementById('quansabji');
// let pricsabji = document.getElementById('pricsabji');

// let quanoil = document.getElementById('quanoil');
// let pricoil = document.getElementById('pricoil');

// let quanjalawan = document.getElementById('quanjalawan');
// let pricjalawan = document.getElementById('pricjalawan');

// let totamt = document.getElementById('totamt');



// let valueday = document.getElementById('userInputDay').value;
// let valuestudent = document.getElementById('userInputStuden').value;

// console.log(valueday);
// console.log(valuestudent);


// if (valueday==Monday)
//     console.log("valuestudent * 2")





document.getElementById('calculateButton').addEventListener('click', function() {
    let valuestudent = document.getElementById('userInputStuden').value;
    let valueday = document.getElementById('userInputDay').value;

    var rice = parseInt(valuestudent) / 10;
    quanrice.value = rice;

    var dalqt = ((parseInt(valuestudent) * 20 ) / 1000);
    quandal.value = dalqt;

    // {
    //     if ( valueday == Monday )
    //         var dalqt = ((parseInt(valuestudent) * 20 ) / 1000);
    //         quandal.value = dalqt;
    //         else var dalqt = ((parseInt(valuestudent) * 15 ) / 1000);
    // }
  });