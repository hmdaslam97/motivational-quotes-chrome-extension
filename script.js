// image changing
fetch(
  `https://pixabay.com/api/?key=${KEY}&q=mountain&image_type=photo&pretty=true&per_page=200`
)
  .then((data) => data.json())
  .then((linkData) => {
    document.getElementById("img").src =
      linkData.hits[generateRandom(199)].webformatURL
  })


fetch("https://type.fit/api/quotes")
  .then((data) => data.json())
  .then((quoteData) => {
    let index = generateRandom() - 1
    let quote = quoteData[index].text,
      author = quoteData[index].author

    // setting up the quote to html element
    let quoteElement = document.getElementById("quoteElement")
    quoteElement.innerHTML = quote

    let authorElement = document.getElementById("author")
    authorElement.innerHTML = author
  })

function generateRandom(maxLimit = 1643) {
  let rand = Math.random() * maxLimit
  return Math.floor(rand)
}
