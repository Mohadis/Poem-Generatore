function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curcor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "67b43cfb4bc45b09a6985d71e9o0d8t5";
  let context =
    "You are a romantic poem expert and lon=ve to write short poems. yuor mission is to wite 4 lines  poem in basic HTML and separet with <br />. Make sure to follow the user instructions. Do not include the title of the poem. please just write the poem no comments";
  let prompt = `User instructions: Generate an Englishpoem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
