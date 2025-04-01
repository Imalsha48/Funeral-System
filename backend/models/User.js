const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  role: {
    type: String,
    enum: ['admin', 'staff', 'driver', 'customer'],
    required: true
  },
  phone: String,
  address: String,
  driverDetails: {
    licenseNumber: String,
    vehicleType: String,
    availability: String
  },
  staffDetails: {
    employeeId: String,
    department: String,
    availability: String
  },
  feedback: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema); 