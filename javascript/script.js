const title=document.querySelector("h1");

new Typewriter(title, {
//  deleteSpeed:20
loop:true,
delay:100

 })

.typeString("salut tout le monde!")
.pauseFor(500)
.typeString(" je suis simo")
.pauseFor(500)
.deleteChars(5)
.typeString("<i> Dev, Full-Stack </i>")

.start();

// new Typewritter

// loop:true;
// delay:75
