# Unprikod

## Apa Itu Unprikod?
Unprikod adalah library client API dari Pesto

## Tujuan?
Agar lebih mudah hit API, dan tujuan utama adalah untuk mempermudah developer.

## Apa Itu Pesto
Anda bisa cek di https://pesto.teknologiumum.com/

## Cara Install
```bash
npm i unprikod
```

# Cara Pemakaian?
```javascript
const { Unprikod } = require('unprikod');

let unpri = new Unprikod('YOUR_TOKEN') //get from https://pesto.teknologiumum.com
unpri.exec(unpri.python, "print('hello world')").then(o => {
        console.log(o.runtime.output);
});

//Contoh Untuk Mengeksekusi Kode Python, Untuk Support Language Bisa Di Cek Di Website Pesto
```

## Thanks To Teknologi Umum

## Give Me Star If You Like :)
