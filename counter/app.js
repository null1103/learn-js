function viewModel() {
  const self = this;
  self.counter = ko.observable(0);
  self.increase = function () {
    let currentVal = self.counter();
    self.counter(currentVal + 1);
  };
  self.decrease = function () {
    let currentVal = self.counter();
    self.counter(currentVal - 1);
  };
  self.reset = function () {
    self.counter(0);
  };
}

ko.applyBindings(viewModel, document.getElementById("knockout-app"));
