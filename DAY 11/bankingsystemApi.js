

const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let accountsList = [
  { accNo: 1001, accName: "Alice Johnson", accType: "Savings", accBalance: 5200.75, accIsActive: true },
  { accNo: 1002, accName: "Bob Smith", accType: "Current", accBalance: 13400.00, accIsActive: true },
  { accNo: 1003, accName: "Charlie Davis", accType: "Savings", accBalance: 875.50, accIsActive: false },
  { accNo: 1004, accName: "Diana Evans", accType: "Current", accBalance: 23000.00, accIsActive: true },
  { accNo: 1005, accName: "Ethan Brown", accType: "Savings", accBalance: 1500.00, accIsActive: true },
  { accNo: 1006, accName: "Fiona Clark", accType: "Current", accBalance: 9800.25, accIsActive: false },
  { accNo: 1007, accName: "George Miller", accType: "Savings", accBalance: 300.00, accIsActive: true },
  { accNo: 1008, accName: "Hannah Wilson", accType: "Current", accBalance: 4500.00, accIsActive: true },
  { accNo: 1009, accName: "Ian Thomas", accType: "Savings", accBalance: 12000.00, accIsActive: false },
  { accNo: 1010, accName: "Julia Roberts", accType: "Current", accBalance: 7600.00, accIsActive: true }
]

app.get('/bankaccounts', (req, res) => {
    res.json(accountsList);
});



// 🔍 Get all inactive accounts
app.get('/bankaccounts/inactive', (req, res) => {
  const inactiveAccounts = accountsList.find(acc => acc.accIsActive === false);
  res.json(inactiveAccounts);
});


app.put('/bankaccounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const accountToUpdate = accountsList.find(acc => acc.accNo === accNo);

  if (!accountToUpdate) {
    return res.status(404).json({ message: 'Account not found' });
  }

  accountToUpdate.accBalance = req.body.accBalance;

  res.json(accountToUpdate);
});

app.get('/bankaccounts/summary', (req, res) => {
  let summary = {
    totalAccounts: accountsList.length,
    totalBalance: 0,
    totalActive: 0,
    totalInactive: 0,
    totalSaving: 0,
    totalCurrent: 0
  };

  accountsList.forEach(acc => {
    summary.totalBalance += acc.accBalance || 0;

    if (acc.accIsActive) {
      summary.totalActive += 1;
    } else {
      summary.totalInactive += 1;
    }

    if (acc.accType.toLowerCase() === 'savings') {
      summary.totalSaving += 1;
    } else if (acc.accType.toLowerCase() === 'current') {
      summary.totalCurrent += 1;
    }
  });

  res.json(summary);
});

app.delete('/bankaccounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const index = accountsList.findIndex(acc => acc.accNo === accNo);

  if (index === -1) {
    return res.status(404).json({ message: 'Account not found' });
  }

  const deletedAccount = accountsList.splice(index, 1)[0];
  res.json({ message: 'Account deleted successfully', account: deletedAccount });
});

app.delete('/bankaccounts/inactive', (req, res) => {
  const inactiveacc = accountsList.find(acc => acc.accIsActive === false);
  const deletedAccount = accountsList.splice(inactiveacc, 1)[0];
  res.json({ message: 'Account deleted successfully', account: deletedAccount });
});

app.get('/bankaccounts/:id',(req,res)=>
{
    const id  = parseInt(req.params.id);
    const accounts = accountsList.find(ac => ac.accNo === id);

    if(!accounts)
    {
        res.status(404).json({message: 'account not found'});    
    }
    else{
        res.json(accounts);
    }

});

app.post('/bankaccounts', (req, res) => {
    const newaccount = {
        accNo: req.body.accNo,
        accName: req.body.accName,
        accType: req.body.accType,
        accBalance: req.body.accBalance,
        accIsActive: req.body.accIsActive
    };

    accountsList.push(newaccount);
    res.status(201).json(newaccount);
});



app.listen(port, () => {
    console.log(`API SERVER RUNNING AT http://localhost:${port}`);
});