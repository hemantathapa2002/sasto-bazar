function totalclick(click){
    const totalclicks=document.getElementById('totalclicks');
    const sumvalue= parseInt(totalclicks.innerText)+click;
    totalclicks.innerText=sumvalue;
}