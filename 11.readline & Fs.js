let readline = require('readline');
let fs = require('fs');
let data = fs.readFileSync('data.json');
let obj = JSON.parse(data);
let i = 0;
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan : '
});
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n ');
console.log(`Pertanyaan: ${obj[i].pertanyaan}`);
rl.prompt();
rl.on('line', (line) => {
  if (line == obj[i].jawab.toLowerCase()) {
    console.log('Selamat anda benar!\n')
    i++;

    if (i == obj.length) {
      console.log('Hore Anda Menang!');
      process.exit();
    }
    console.log(`\nPertanyaan: ${obj[i].pertanyaan}`);
    rl.prompt();
  }
  else {
    console.log(`Wkwkwkwk anda kurang beruntung\n`);
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log('Permainan Berakhir');
  process.exit(0);
})
