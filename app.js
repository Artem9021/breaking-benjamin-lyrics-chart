

window.addEventListener("load", () => {
    let text = document.querySelector("textarea").value.toLowerCase().replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ").replace(/(\r\n|\n|\r)/gm, " ");
    document.querySelector("textarea").style.display = "none";
    text = text.replace("\n", " ")
    text = text.split(" ")
    
    let words = {}
    let common = ["t", "s", "ll", "m", "re", "ve", "x2", "o", "x3", "x4", "x5", "pre", "chorus", "u", "2"]
    // i originally wanted to remove 100 most common words, but ended up just removing worlds like I'm and I've for more fair results


    text.forEach(word => {
        
    	

    	words[word] += 1;
    	//console.log(isNaN(words[word]))

    	if (isNaN(words[word])){
    		words[word] = 1;
    	}
    	
    })



var sortable = [];
for (var word in words) {
	if (!common.includes(word)) {
    	sortable.push([word, words[word]]);	
    }
    
}

sortable.sort(function(a, b) {
	

    return b[1] - a[1];
});
    
    console.log(sortable)

    const list = document.querySelector(".word-list")
    sortable.forEach(word => {
    	let item = document.createElement("li")
    	let wordelem = document.createElement("span")
    	let countelem = document.createElement("span")
    	countelem.classList.add("badge")

    	wordelem.innerText = word[0]
    	countelem.innerText = word[1]
    	
    	item.appendChild(wordelem)
    	item.appendChild(countelem)

    	list.appendChild(item)

    })
})


