console.log("This Js is for calculation of MDM of class VI-VIII")


document.getElementById('calculateButton').addEventListener('click', function() {

  let valuestudent = document.getElementById('userInputStuden').value;
  let valueday = document.getElementById('userInputDay').value;


  // No Change START they will remain constant
  let rice = ((parseInt(valuestudent) *150) / 1000);
  quanrice.value = rice.toFixed(3);
  // No Change OVER

  if (valueday==='Monday') {

    let dalqt = ((parseInt(valuestudent) * 30) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 90;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 75) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 22;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER
          
}

  else if (valueday==='Tuesday'){

    let dalqt = ((parseInt(valuestudent) * 20) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 149;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 75) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 22;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER
        
  }

  else if (valueday==='Wednesday'){

    let dalqt = ((parseInt(valuestudent) * 30) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 90;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 75) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 22;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER
        
  }

  else if (valueday==='Thursday'){

    let dalqt = ((parseInt(valuestudent) * 30) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 90;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 75) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 22;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER

  }

  else if (valueday==='Friday'){

    let dalqt = ((parseInt(valuestudent) * 30) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 80;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 55) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 30;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER

  }
    
  else if (valueday==='Saturday'){

    let dalqt = ((parseInt(valuestudent) * 30) / 1000);
    quandal.value = dalqt.toFixed(3);
    let dalpr = dalqt * 90;
    pricdal.value = dalpr.toFixed(2);

    let sabjiqt = ((parseInt(valuestudent) * 75) / 1000);
    quansabji.value = sabjiqt.toFixed(3);
    let sabjipr = sabjiqt * 22;
    pricsabji.value = sabjipr.toFixed(2);

    let oilqt = ((parseInt(valuestudent) * 7.5) / 1000);
    quanoil.value = oilqt.toFixed(3);
    let oilpr = oilqt * 180;
    pricoil.value = oilpr.toFixed(2);

    let jalawanqt = ((parseInt(valuestudent) * 150) / 1000);
    quanjalawan.value = jalawanqt.toFixed(3);
    let jalawanpr = jalawanqt* 12;
    pricjalawan.value = jalawanpr.toFixed(2);

    // No Change START they will remain constant
    let totalamt  = parseInt(valuestudent)*8.17;
    totamt.value = totalamt.toFixed(2);

    let saltpr = totalamt - (dalpr+sabjipr+oilpr+jalawanpr);
    pricsalt.value = saltpr.toFixed(2);
    // No Change OVER
  }
  else {
    alert('Enter Correct Input Values!');
  }

});
