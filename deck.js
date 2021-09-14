function drawCard(){

    let deck = ["Jan", "Feb", "March"]
    let random = Math.floor(Math.random() * deck.length)
    return deck[random]
}
