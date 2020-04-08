"Use strict"

const spiritAnimals = ['Gentle Lion', 'Satisfied Panda', 'Quick Sloth', 'Sad Dog', 'Lazy Cat', 'Slim Bear', 'Monkey', 'Snake', 'Thirsty water', 'Dry rain']

const buttonTag = document.getElementById('btn')
buttonTag.addEventListener('click', getSpiritAnimal)

function getSpiritAnimal() {
    let nameInput = document.getElementById('name')
    let randomNames = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]
    console.log(randomNames)
    if (!nameInput.value) {
        alert('wrong format : please type a name here');
      } else {
        const randomNames = Math.floor(Math.random() * spiritAnimals.length);
        const randomSpiritAnimal = spiritAnimals[randomNames];
        document.getElementById(
          "spirit-animal"
        ).textContent = `${nameInput.value} - ${randomSpiritAnimal}`;
      }
}

