function resize(element) {
    const cards = [...document.querySelectorAll(element)]
    const cardHeight = cards.clientHeight;
	    cards.map(card =>{
	    	 card.style.minHeight = "0px";
	    })
    const allCards = cards.map(card => {
        return card.clientHeight;
    });
    const cardReference = Math.max(...allCards)
	    cards.map(card =>{
	    	 card.style.minHeight = `${cardReference}px`
	    })
};

function onChange(){
    	resize('.js-card_adjust')
    	resize('.js-second-card_adjust')
    	resize('.js-third-card_adjust')
}


window.addEventListener('load', onChange)
window.addEventListener('resize', onChange)


