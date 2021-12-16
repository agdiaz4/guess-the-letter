// Functions that gives info to the user.
function splashSolution (Splash: string, Solution: string) {
    return "SORRY, IT WAS " + solution
}
// Functions the whole game when played.
function checkAnswer () {
    answer = game.askForString("I'M THINKING OF A LETTER...", 1)
    if (answer == solution) {
        game.over(true, effects.confetti)
    } else {
        info.changeLifeBy(-1)
        // Conditionals that give many outcomes
        if (info.life() > 0) {
            hint = "HIGHER"
            if (answer > solution) {
                hint = "LOWER"
            }
            game.splash(buildHint("SORRY,", "TRY "))
        } else {
            game.splash(splashSolution("SORRY,", "IT WAS "))
        }
    }
}
// Function that gives a hint for help.
function buildHint (Splash: string, Hint: string) {
    return "SORRY, TRY " + hint
}
// Function that set's life for the user.
function lifeSet () {
    info.setLife(3)
    solution = String.fromCharCode(randint(97, 122))
}
let hint = ""
let answer = ""
let solution = ""
// Sets a good scenery instead of dull one
scene.setBackgroundColor(13)
// Question that ask for you name.
let input2 = game.askForString("What is your name?")
// Gives the user a welcoming.
game.splash("Hello " + input2 + "! " + "Welcome " + "to " + "Guess " + "the " + "Letter" + "!")
lifeSet()
// Continues the game based on lives.
while (info.life() > 0) {
    checkAnswer()
}
// Block identify if you have 0 lives
// 
while (false) {
    game.over(false)
}
