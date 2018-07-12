// Code your solution in this file!

function logDriverNames(driverArray) {
  driverArray.forEach(function(element){ console.log(element.name);});
};

function logDriversByHometown (driverArray, hometown) {
    driverArray.forEach(
      function (element) {
        if (element.hometown === hometown) {
          console.log(element.name);
        }
      }
    );
  };

  function driversByRevenue(){

  };
