// Code your solution in this file!

function logDriverNames(driversArray) {
  driversArray.forEach(function(element){ console.log(element.name);});
};

function logDriversByHometown (driversArray, hometown) {
    driversArray.forEach(
      function (element) {
        if (element.hometown === hometown) {
          console.log(element.name);
        }
      }
    );
  };

  function driversByRevenue(driversArray){
    const result = [...driversArray];
    result.sort(
      function(obj1, obj2) {
        return obj1.revenue - obj2.revenue;
      }
    );
    return result;
  };
