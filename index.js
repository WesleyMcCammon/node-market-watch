const express = require('express')
const path = require('path')
var EventSource = require('eventsource')
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
        { name: 'ST Pivot R3', displayName: 'R3', value: 4325.50},        
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
        { name: 'ST Pivot R3', displayName: 'R3', value: 38105},        
        { name: 'ST Pivot R2', displayName: 'R2', value: 251.25},
        { name: 'VWAP', displayName: 'VWAP', value: 321.5},
        { name: 'Prev High', displayName: 'PH', value: 125.75}
      ],
      alerts: [
        { name: 'Alert 1', displayName: 'Alert 1', dateTime: new Date(2023, 11, 5)},
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
        { name: 'ST Pivot R3', displayName: 'R3', value: 1.12345},        
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
    model: marketWatchData,
    events: new EventSource('http://localhost:3500/events')
  })
});

function start() {
  const events = new EventSource('http://localhost:3500/events');

  events.onmessage = (event) => {
    console.log(event.data)
  };
}

// (async () => {
//   debugger;
//   const events = new EventSource('http://localhost:3500/events');

//   events.onmessage = (event) => {
//     const parsedData = JSON.parse(event.data);
//     setFacts((facts) => facts.concat(parsedData));
//     console.log('here');
//   };

//   setListening(true);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function rabbitMQConsumer(a) {
  // debugger;
  // const connection = await a.connect('amqplib://localhost:5672');
  // const channel = await connection.createChannel();
  // const queue = channel.assertQueue('nt8_wbmpivotdiff');

  // channel.consume('nt8_wbmpivotdiff', (job) => {
  //     debugger;
  //     let data = JSON.parse(job.content);
  //     console.log(data);
  //     channel.ack(job);
  // });

  // console.log('Waiting for the message!');
}

// (async () => {
//   let connection;
//   try {
//     const connection = await amqp.connect("amqp://localhost:5672");
//     const channel = await connection.createChannel();

//     process.once("SIGINT", async () => {
//       await channel.close();
//       await connection.close();
//     });

//     await channel.assertQueue('nt8_wbmpivotdiff', { durable: false });
//     await channel.consume(
//       'nt8_wbmpivotdiff',
//       (message) => {
//         if (message) {
//           console.log(message);
//         }
//       },
//       { noAck: true }
//     );
//   } catch (err) {
//     console.warn(err);
//   } finally {
//     if (connection) await connection.close();
//   }
// })();