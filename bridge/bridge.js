const { initializeApp, cert } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Firebase setup
const serviceAccount = require('./firebase-key.json');
const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://posture-guard-e4eb6-default-rtdb.firebaseio.com'
});

const db = getDatabase(app);

// Connect to Arduino
const port = new SerialPort({
  path: '/dev/cu.usbserial-A5069RR4',
  baudRate: 9600
});
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// Session ID
const sessionId = `session_${Date.now()}`;
console.log('Session started:', sessionId);

// Every time Arduino sends a reading:
parser.on('data', (data) => {
  const distance = parseFloat(data.trim());

  if (!isNaN(distance) && distance > 2 && distance < 400) {
    const reading = {
      distance: distance,
      timestamp: Date.now(),
      sessionId: sessionId
    };

    db.ref('readings').push(reading);
    db.ref('latest').set(reading);

    console.log(`Distance: ${distance} cm`);
  }
});

port.on('error', (err) => console.error('Serial error:', err));
console.log('Listening for Arduino data...');