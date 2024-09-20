
class stackUndo {
    constructor() {
      this.stackUndo = []; 
    }

  push(text){
      this.stackUndo.push(text);
  }

  isEmpty(){
      return this.stackUndo.length == 0;
  }    
  //Método que junta todos os inputs e exibe a frase completa.
  displayText(){
    if (this.isEmpty()){
      return null;
    }
    const completedText = this.stackUndo.join("");
    console.log(completedText);
    return completedText;

  }
    // Método undo() que desfaz a última palavra inserida.
  undo() {
      if (this.isEmpty()) {
        console.log("Nothing to undo");
        return;
      }
      const removedText = this.stackUndo.pop();
      console.log(`Text "${removedText}" undone`);
      return this.displayText();
  }

}
  

  const operation = new stackUndo();
  
  
  operation.push("Work "); 
  operation.push("completed. "); 
  operation.push("Next ");
  operation.push("challenge!!"); 
  operation.displayText();
  
  operation.undo();
  operation.undo(); 
  operation.undo();
  operation.undo();
  operation.undo();


  module.exports = stackUndo;