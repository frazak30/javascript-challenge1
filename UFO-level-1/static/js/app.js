// Declare variable for tbody
var tbody = d3.select("tbody");

// New data object with date format
data.forEach((ufoTracking) => {
    var row = tbody.append('tr');
    Object.entries(ufoTracking).forEach(([key, value]) => {
      var cell = row.append('td');
      // cell.attr('class', 'table-primary');
      cell.text(value);
    });
  });

  // Getting a reference to the input element on the page with the id property set to 'input-field'
    var dateInput = d3.select('#search-date');

  // Input fields can trigger a change event when new text is entered.
dateInput.on('change', function () {
    var dateSelected = d3.event.target.value;
    var dateSelectedArray = dateSelected.split('-');
    var formattedDateArray = [];
        dateSelectedArray.forEach(function (item) {
        formattedDateArray.push(parseInt(item));
  });
    var formattedString =
    formattedDateArray[1] +
    '/' +
    formattedDateArray[2] +
    '/' +
    formattedDateArray[0];
  
    var filteredResults = data.filter(sighting => sighting.datetime === formattedString);
    d3.select("tbody").selectAll("tr").remove();
    
    filteredResults.forEach((ufoTracking) => {
        var row = tbody.append('tr');
        Object.entries(ufoTracking).forEach(([key, value]) => {
          var cell = row.append('td');
          // cell.attr('class', 'table-primary');
          cell.text(value);
        });
      });

    // console.log(formattedString);
    // console.log(filteredResults);
    
  
    // console.log("reading app.js");
  });

function filteredData(dateSelected) {
    return  data.datetime == dateSelected

  }

