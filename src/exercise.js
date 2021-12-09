
process.on('beforeExit', () => {
    console.log("Print Fifth");
  }, 500);
  
  setTimeout(() => {
    console.log("Print Third");
  },300);
  
  process.nextTick(() => {
    console.log('Print Second');
  });
  
  
  console.log('Print First');
  
  setTimeout(() => {
    console.log("Print Forth");
  }, 400);
  