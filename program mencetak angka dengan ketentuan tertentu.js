//program mencetak angka 1- 15, kelipatan 3 cetak "fizz", kelipatan 5 cetak "buz", kelipatan 3 dan 5 cetak "fizzbuzz"

for(i=0;i<15;) {
  console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
}