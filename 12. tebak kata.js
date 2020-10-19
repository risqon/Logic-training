
if (!process.argv[2]) {
  console.log(`Tolong Sertakan nama file sebagai inputan soalnya\nMisalnya 'node solution.js data.json'`);
  //keluar program
  process.exit(1);

}
const FILE_NAME = process.argv[2]
let readline = require('readline');
let fs = require('fs');
let data = fs.readFileSync(FILE_NAME);
let obj = JSON.parse(data);
let i = 0;
let salah = 1
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan : '
});
console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini '${FILE_NAME}'. untuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`);
console.log(`Pertanyaan: ${obj[i].pertanyaan}`);
rl.prompt();
rl.on('line', (line) => {
  if (line == obj[i].jawab.toLowerCase()) {
    console.log('\nAnda Beruntung!\n');
    i++
    if (i == obj.length) {
      console.log('Anda berhasil!');
      process.exit();
    }
    console.log(`\nPertanyaan: ${obj[i].pertanyaan}`);
    rl.prompt();
  } else if (line.toLowerCase() == 'skip') {
    salah = 1
    obj.push(obj[i]);
    i++;
    console.log(`\nPertanyaan: ${obj[i].pertanyaan}`);
    rl.prompt();

  } else {
    console.log(`\nAnda Kurang Beruntung! anda telah salah ${salah} kali, silakan coba lagi.`);
    salah++;
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log('Permainan Berakhir');
  process.exit(0);
})




