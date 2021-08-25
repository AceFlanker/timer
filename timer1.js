const argv = process.argv;
const beepBeep = process.argv.slice(2).map(string => Number(string));

for (const element of beepBeep) {
  if (element >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);  
  }
}