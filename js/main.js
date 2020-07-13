

document.addEventListener("DOMContentLoaded", function(){
	const baseURL = 'https://drive.google.com/embeddedfolderview?id=';
	const iframe = document.querySelector('iframe');
	let gitURL = document.getElementById('git-src');
	const button = document.querySelector('#copy');


	gitURL.addEventListener("change", watchTextEntry, false);
	gitURL.addEventListener("update", watchTextEntry, false);
	gitURL.addEventListener("input", watchTextEntry, false);
    button.addEventListener("click", copyEmbed, false);


	function watchTextEntry(event) {
	  let preview = document.querySelector('.demo')
	  let embedCode = document.querySelector('#embed-code')
	  if (event.target.value){
	  	let dirtyURL = event.target.value;
	  	let cleanURL = dirtyURL.replace('https://drive.google.com/drive/folders/','');
	  	let noQs = cleanURL.split("?")[0]
	  	cleanURL = 'https://drive.google.com/embeddedfolderview?id=' + noQs +'#list';
	  		  iframe.src = cleanURL;
	  } else {
		 iframe.src = baseURL + 'https://drive.google.com/embeddedfolderview?id=1fNzyvgXJ5SuHnYAfLcsLw2wDUDfiyeEU#list'
	  }
	  embedCode.value = preview.innerHTML
	}
    
    function copyEmbed(event){
    	let embed = document.querySelector('#embed-code');
     	embed.select();
	 	embed.setSelectionRange(0, 99999); /*For mobile devices*/
		  /* Copy the text inside the text field */
		  document.execCommand("copy"); 
    }


});

