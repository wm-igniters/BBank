
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const beneficiaries = [
  {
    name: 'Samantha Tran (Sam)',
    phone: '+1 335 246 3546',
    email: 'john.doe@gmail.com',
    defaultAcc: 'XXXX XX 99',
    avatar: '👩'
  },
  {
    name: 'John Doe (John)',
    phone: '+1 335 246 3546',
    email: 'john.doe@gmail.com',
    defaultAcc: 'XXXX XX 99',
    avatar: '🏢'
  },
  {
    name: 'Douglas Spencer',
    phone: '+1 335 246 3546',
    email: 'douglas.spencer@gmail.com',
    defaultAcc: 'XXXX XX 99',
    avatar: '👨'
  }
];

app.get('/api/beneficiaries', (req, res) => {
  res.json(beneficiaries);
});

app.post('/api/beneficiaries', (req, res) => {
  const newBeneficiary = req.body;
  beneficiaries.push(newBeneficiary);
  res.status(201).json(newBeneficiary);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Mock server running on port 3000');
});
