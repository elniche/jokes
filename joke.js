var i=0;
var jokes = [
    
    "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
    "Yo mama's so fat, when she skips a meal, the stock market drops.",
    "Yo mama's so fat, it took me two buses and a train to get to her good side.",
    "Yo mama's so fat, when she goes camping, the bears hide their food.",
    "Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.",
    "Yo mama's so fat, she stepped on a scale and it said: To be continued.",
    "Yo momma so fat, I swerved to miss her in my car and ran out of gas.",
    "Yo mama's so fat, when she wears high heels, she strikes oil.",
    "Yo mama so fat, not even Dora can explore her.",
    "Yo mama so fat, she gets group insurance.",
    "Yo mama so big, her belt size is equator.",
    "Yo mama so fat, when she talks to herself, it's a long-distance call.",
    "Yo mama so fat, she left in high heels and came back in flip flops.",
    "Yo mama so fat that when she hauls ass, she has to make two trips.",
    "Yo mama so fat, her job title is Spoon and Fork Operator.",
    "Yo mama so fat, when she walked past the TV, I missed three episodes.",
    "Yo momma's so fat, when she sits around the house, she SITS AROUND the house.",
    "Yo mama's so fat, her car has stretch marks.",
    "Yo mama's so fat, she can't even jump to a conclusion.",
    "Yo mama's so fat, her blood type is Ragu.",
    "Yo mama's so fat, if she was a Star Wars character, her name would be Admiral Snackbar.",
    "Yo mama's so fat, she brought a spoon to the Super Bowl.",

]

     //// randomize the jokes of the  JOKES array
function pared() {
      var junta = Math.floor(Math.random() * jokes.length)
      var aqua = jokes[junta]
      document.getElementById("hora").innerHTML = aqua;
}


//to hide the jokes
function Cuidad() {
    var cura = document.getElementById('hora');
    cura.style.display = 'block';

    ///to hide the pic
    let chino = document.getElementById('foto');
    chino.style.display = 'none';
    
    pared()
}






