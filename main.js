var library = [  
	{ 
		author: 'Bill Gates', 
		title: 'The Road Ahead', 
		readingStatus: true 
	}, 
	{ 
		author: 'Steve Jobs', 
		title: 'Walter Isaacson', 
		readingStatus: true 
	}, 
	{ 
		author: 'Suzanne Collins', 
		title:  'Mockingjay: The Final Book of The Hunger Games',  
		readingStatus: false 
	}]; 
 

 document.write(JSON.stringify(library)+"<br><br>")

//  Already read 'Bill Gates' by The Road Ahead. 
//  Already read 'Steve Jobs' by Walter Isaacson. 
//  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collin "

let a=library.map(function(e){
	if(e.readingStatus==true ){
		document.write(`Already read ${JSON.stringify(e.author)} by ${JSON.stringify(e.title)}<br>`)
	}

	else{
		document.write(`You still need to read ${JSON.stringify(e.author)} by ${JSON.stringify(e.title)}`)
	}
})