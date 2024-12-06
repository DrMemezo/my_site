document.addEventListener('DOMContentLoaded', function() {
    const ongoings = this.querySelectorAll('.ongoing');
    ongoings.forEach(element => {
        console.log(element);
        element.addEventListener('click', function(){
            let prjName = element.parentElement.id 
            alert(prjName + " is still ongoing!");
        });
    });
});
