document.getElementById("analyzeBtn").addEventListener('click',()=>{
    let textInput = document.getElementById("textInput").value;
    if(textInput.trim() == ''){
        alert('Enter text in the textbox.');
        return;
    }

    let words = textInput.trim().split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;

    let characters = textInput.replace(/\s/g, '').length;

    let readingTime = Math.round(words / 200);

    document.getElementById("wordCount").innerHTML = words ;
    document.getElementById("charCount").innerHTML = characters;
    document.getElementById("readingTime").innerHTML = readingTime;

});