const fs = require('fs');
var readline = require('readline');
var path = require('path');
const FILE_NAME = process.argv[1];
const pathName = path.basename(FILE_NAME);
var FILE_JSON = "./al.json";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function init() {
    console.log(`>>> JS TODO <<<`);
    console.log(`$ node  ${pathName} <command>`);
    console.log(`$ node  ${pathName} list`);
    console.log(`$ node  ${pathName} task <task_id>`);
    console.log(`$ node  ${pathName} add <task_content>`);
    console.log(`$ node  ${pathName} delete <task_id>`);
    console.log(`$ node  ${pathName} complete <task_id>`);
    console.log(`$ node  ${pathName} uncomplete <task_id>`);
    console.log(`$ node  ${pathName} list: outstanding asc| desc`);
    console.log(`$ node  ${pathName} list: completed asc| desc`);
    console.log(`$ node  ${pathName} tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>`);
    console.log(`$ node  ${pathName} filter:<tag_name>`);
    rl.close();
}

function getData() {
    var contents = fs(FILE_JSON);
    var data = JSON.parse(contents);
    return data;
}

function setData(data) {
    var dataString = JSON.stringify(data, null, 2);
    fs.writeFileSync(FILE_JSON, dataString);
}

if (!fs.existsSync(FILE_JSON)) {

    setData([]);
}
function add(task) {
    var data = getData();
    if (task == null || task == "") {
        console.log('data harus diisi');
        rl.close();
    } else {
        data.push({ task: task, completed: false, tag: ([]) });
        console.log(`"${task}" telah ditambahkan`);
        setData(data);
    }
}

function remove(task) {
    var data = getData();
    var del = data.splice(task, task + 1);
    setData(data)
    console.log(`"${del[0].task}" telah dihapus`);
}
function complete(task) {
    var data = getData();
    data[task].completed = true;
    setData(data);
    console.log(`"${data[task].task}" telah selesai`);
}

function uncomplete(task) {
    var data = getData();
    data[task].completed = false;
    setData(data);
    console.log(`"${data[task].task}" status selesai dibatalkan`);

}
function list() {
    var data = getData();
    if (data.length > 0) {
        console.log('Daftar Pekerjaan');
        data.forEach((task, index) => {
            console.log(index + 1 + ".", " [" + (task.completed ? "x" : " ") + "] ", task.task);
        });
    } else {
        console.log('Tidak ada Pekerjaan');

    }
}
function task(task) {
    var data = getData();
    if (data[task]) {
        console.log(task + 1 + ".", " [" + (data[task].completed ? "x" : " ") + "] ", data[task].task);
    } else {
        console.log('Tidak ada Pekerjaan');
    }
}
function completedDesc() {
    var data = getData();
    console.log('Daftar Pekerjaan');
    for (var i = data.length - 1; i > -1; i--) {
        if (data[i].completed) {
            console.log(i + 1 + ".", " [" + (data[i].completed ? "x" : " ") + "] ", data[i].task);
        }
    }
}
function outstandingAsc() {
    var data = getData();
    console.log('Daftar Pekerjaan');
    for (var i = 0; i < data.length; i++) {
        if (!data[i].completed) {
            console.log(i + 1 + ".", " [" + (data[i].completed ? "x" : " ") + "] ", data[i].task);
        }
    }
}
function tag() {
    var index = argument.slice(0, 1) - 1;
    var toTag = argument.slice(2).split(' ');
    var data = getData();
    var input = [];
    for (let i = 0; i < toTag.length; i++) {
        if (!data[index].tag.includes(toTag[i])) {
            data[index].tag.push(toTag[i]);
            input.push(toTag[i]);
        }
    }
    setData(data);
    if (input.length == 0) {
        console.log('tidak ada yang diinput');
    } else {
        console.log(`'${input.join()}' telah ditambahkan ke dalam '${data[index].task}'.`);
    }
}

function filterTask() {
    var tag = command.slice(7);
    console.log("Daftar Pekerjaan");
    var data = getData();
    for (let i = 0; i < data.length; i++) {
        if (data[i].tag.includes(tag)) {
            console.log(`${i + 1}. ${data[i].completed ? '[x]' : '[ ]'} ${data[i].task}`);
        }

    }
}


var command = process.argv[2];
var argument = process.argv.splice(3).join(' ');

switch (command) {
    case undefined:
        init();
        break;
    case "task":
        task(argument - 1);
        rl.close();
        break;
    case "add":
        add(argument);
        rl.close();
        break;
    case "delete":
        remove(argument - 1);
        rl.close();
        break;
    case "list":
        list();
        rl.close();
        break;
    case "list:outstanding":
        if (argument == 'asc') {
            outstandingAsc();
        } else if (argument == 'desc') {
            outstandingDesc();
        } else {
            console.log("Sertakan jenis pengurutannya dengan menuliskan (asc|desc)");
        }
        rl.close();
        break;
    case "list:completed":
        if (argument == 'asc') {
            completedAsc();
        } else if (argument == 'desc') {
            completedDesc();
        } else {
            console.log("Sertakan jenis pengurutannya dengan menuliskan (asc|desc)");
        }
        rl.close();
        break;
    case "complete":
        complete(argument - 1);
        rl.close();
        break;
    case "uncomplete":
        uncomplete(argument - 1);
        rl.close();
        break;
    case "tag":
        tag(argument - 1);
        rl.close();
        break;
    case "help":
        init();
        rl.close();
        break;
    case `filter:${command.slice(7)}`:
        filterTask();
        rl.close();
        break;

    default:
        console.log("tidak ada perintah!!");
        rl.close();
        break;
}

// help