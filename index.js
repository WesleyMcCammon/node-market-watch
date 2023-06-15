const express = require('express')
const path = require('path')
const app = express()
const port = 3100

app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

app.get('/marketwatch', (req, res) => {
  var marketWatchData = [
    { instrument: 'ES 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'NQ 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'RTY 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'YM 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'CL 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'GC 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: 'ZB 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: '6E 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    },
    { instrument: '6A 09-23', 
      priceLevels: [ 
        { name: 'ST Pivot R3', displayName: 'R3', value: 125.50},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date()},
        { name: 'Alert 2', displayName: 'Alert 2', dateTime: new Date()},
        { name: 'Alert 3', displayName: 'Alert 3', dateTime: new Date()},
        { name: 'Alert 4', displayName: 'Alert 4', dateTime: new Date()},
      ]
    }
  ];

  res.render('pages/marketwatch', {
    model: marketWatchData
  })
});
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/testpage', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/testpage.html'));
// });

// app.get('/marketwatch', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/marketwatch.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})