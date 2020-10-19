const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tuliskan kalimatmu di sini> '
})
rl.prompt()
rl.on('line', (line) => {
    let hasil = line.split(' ')
    let a = []
    for (i = 0; i < hasil.length; i++) {
      if (hasil[i].charAt(0) == 'a' ||
          hasil[i].charAt(0) == 'i' ||
          hasil[i].charAt(0) == 'u' ||
          hasil[i].charAt(0) == 'e' ||
          hasil[i].charAt(0) == 'o') {
          a.push(hasil[i])
      } else {
          a.push(`${hasil[i].slice(1)}${hasil[i].charAt(0)}nyo`)
      }
    }
    console.log(`hasilnya : ${a.join('  ')}`)
    rl.prompt();
}).on('close', () => {
  console.log(`See you!`);
  process.exit(0);
});
