
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/* https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */

window.addEventListener("load", () => {
    let text = document.querySelector("textarea").value.toLowerCase().replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ").replace(/(\r\n|\n|\r)/gm, " ");
    document.querySelector("textarea").style.display = "none";
    text = text.replace("\n", " ")
    text = text.split(" ")
    
    let words = {}
    let removeCompletely = ["t", "s", "ll", "m", "re", "ve", "x2", "o", "x3", "x4", "x5", "pre", "chorus", "u", "2", "don", "d"]
    
    let commonWords = ["the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "i", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "me", "your", "our", "he", "she", "my", "so", "go", "am", "will", "no", "an", "oh", "did", "got", "has", "do", "well", "if", "mine", "why", "get"]


    text.forEach(word => {
        
    	

    	words[word] += 1;

    	if (isNaN(words[word])){
    		words[word] = 1;
    	}
    	
    })



var sortable = [];

showCommon = 0;
let common = document.querySelector(".common")
common.addEventListener("input", ()=>{
    showCommon = !showCommon
    renderList();
})

const renderList = () => {
    sortable = []
    for (var word in words) {
    if ((!removeCompletely.includes(word) && !commonWords.includes(word)) || (!removeCompletely.includes(word) && showCommon)) {
        sortable.push([word, words[word]]); 
    }
    
}




sortable.sort(function(a, b) {
    return b[1] - a[1];
});
    
    

    const list = document.querySelector(".word-list")
    list.innerText = ""

    sortable.forEach(word => {
        let item = document.createElement("li")
        item.classList.add("item")
        max = sortable[0][1]
        item.style.width = `${scale(word[1], 1, max, 1, 90)}%`
        
        let wordelem = document.createElement("span")
        let countelem = document.createElement("span")
        countelem.classList.add("badge")

        wordelem.innerText = word[0]
        countelem.innerText = word[1]
        
        item.appendChild(wordelem)
        item.appendChild(countelem)

        list.appendChild(item)

    })

}

renderList();
})





