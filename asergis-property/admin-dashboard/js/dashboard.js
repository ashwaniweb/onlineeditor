// Half year revenue margin
var dataSales = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [5, 10, 15, 20, 25, 30],
    [0, 5, 7, 10, 15, 20]
  ]
};

var optionsSales = {
  lineSmooth: false,
  low: 0,
  chartPadding: 20,
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  height: 300,
  showArea: true,
  showLine: false,
  showPoint: true,
  fullWidth: true
};

var responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value) {
        return value[0];
      }
    }
  }]
];

Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

// 2016 Sales
var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};

var options = {
  seriesBarDistance: 10,
  chartPadding: 20,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value[0];
      }
    }
  }]
];
Chartist.Bar('#chartActivity', data, options, responsiveOptions);

//Email Statistics
var dataPreferences = {
  series: [
    [25, 30, 20, 25]
  ]
};

var optionsPreferences = {
  chartPadding: 20,
  donut: true,
  donutWidth: 40,
  startAngle: 0,
  total: 100,
  showLabel: false,
  height: "245px",
  axisX: {
    showGrid: false
  }
};

Chartist.Pie('#emailChart', dataPreferences, optionsPreferences);

Chartist.Pie('#emailChart', {
  labels: ['62%', '32%', '6%'],
  series: [62, 32, 6]
});

// Visitors
var chart = new Chartist.Line('#visiters', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [1000, 200, 350, 100, 300, 120],
    [200, 1000, 200, 100, 550, 0]
  ]
}, {
  axisY: {
    offset: 35,
    high:1200
  },
  axisX: {
    offset: 35,
  },
  chartPadding:20,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

// pageViews
var chart = new Chartist.Line('#pageViews', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [1000, 200, 350, 100, 300, 120],
    [200, 1000, 200, 100, 550, 0]
  ]
}, {
  axisY: {
    offset: 35,
    high:1200
  },
  axisX: {
    offset: 35,
  },
  chartPadding:20,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });  
  }
});

// pagesVisit
var chart = new Chartist.Line('#pagesVisit', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 30, 35, 45, 50, 60],
    [30, 50, 55, 65, 70, 80]
  ]
}, {
  chartPadding: 20,
  low: 0,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});
// Visitors
var chart = new Chartist.Line('#visiters2', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 30, 35, 45, 50, 60],
    [30, 50, 55, 65, 70, 80]
  ]
}, {
  chartPadding: 20,
  low: 0,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

// pageViews
var chart = new Chartist.Line('#pageViews2', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [100, 200, 350, 100, 500, 120],
    [30, 200, 100, 550, 70, 800]
  ]
}, {
  chartPadding: 20,
  low: 0,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

// pagesVisit
var chart = new Chartist.Line('#pagesVisit2', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [60, 50, 45, 35, 30, 10],
    [80, 70, 65, 55, 50, 30]
  ]
}, {
  chartPadding: 20,
  low: 0,
  showArea: false,
  showPoint: false,
  fullWidth: true
});
chart.on('draw', function(data) {
  if (data.type === 'grid' && data.index !== 0) {
    data.element.remove();
  }
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});
