const argv = process.argv;
const beepBeep = process.argv.slice(2).map(string => Number(string));

for (const element of beepBeep) {
  if (element >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);  
  }
}

// RE: Edge cases
// When there's no input after "node timer1.js", 
// no sound will be made from terminal regardless,
// at least, it is the case on an M1 MacBook.

// And when using process.argv, all terminal
// inputs will become strings anway, so by default
// we have to convert all of them anyway. So it's
// kind of moot to account for these cases.