function splashSolution (Splash: string, Solution: string) {
    return "SORRY, IT WAS " + solution
}
function checkAnswer () {
    answer = game.askForString("I'M THINKING OF A LETTER...", 1)
    if (answer == solution) {
        game.over(true, effects.confetti)
    } else {
        info.changeLifeBy(-1)
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
function buildHint (Splash: string, Hint: string) {
    return "SORRY, TRY " + hint
}
function lifeSet () {
    info.setLife(3)
    solution = String.fromCharCode(randint(97, 122))
}
let hint = ""
let answer = ""
let solution = ""
scene.setBackgroundColor(2)
let input2 = game.askForString("What is your name?")
game.splash("Hello " + input2 + "! " + "Welcome " + "to " + "Guess " + "the " + "Letter" + "!")
lifeSet()
while (info.life() > 0) {
    checkAnswer()
}
while (false) {
    game.over(false)
}
