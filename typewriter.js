const sentence = "hello there from lighthouse labs";
for (const index in sentence) { // of
  setTimeout(() => {
    process.stdout.write(sentence[index]); // 
  }, 100 * index)
}