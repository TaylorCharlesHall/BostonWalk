



function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  //The follow was used to display the top 5 earners in order and their names: function compare(a, b){
  //  if (parseFloat(a[11])===parseFloat(b[11])){
      
  //    return 0;
  //  } else {
      
  //    return (parseFloat(a[11])<parseFloat(b[11])) ? 1:-1;
  //  }

 //   }

  //people.sort(compare);
  
 // for (let i = 0; i < 5; i++) 

 //The following code displays the name and salary for those who earn above $200,000
   function checkSal(x){

     return x[11]>=200000; //Salary is located at the 11th element within the object data.js
   }

   const highsal = people.filter(checkSal);//sets new array highsal filtered with the salary requirements
   for (let i = 0; i < highsal.length; i++){
    html +=
      '<li class="post">' + '<h2>' + highsal[i][8] + '</h2>' + '<h3>' + highsal[i][11] + '</h3>';//creates string to display output on webpage
  }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
  
}
renderPosts(boston, document.getElementById('container'));
