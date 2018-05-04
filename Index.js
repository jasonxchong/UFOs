var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filterdata = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filterdata.length; i++) {
        var adata = filterdata[i];
        var fields = Object.keys(adata);

        var $row = $tbody.insertRow(i);
        
        for (var j = 0; j < fields.length; j++ )  {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = adata[field];
        }
      }
}
function handleSearchButtonClick() {
    // Format the user's search by removing leading and t   railing whitespace, lowercase the string
    var dates = $dateInput.value.trim();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filterdates = dataset.filter(function(adata) {
      var datetimes = adata.datetime.trim();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return datetimes === dates;
    });
    renderTable();
  }
  
  // Render the table for the first time on page load
  renderTable();
  
