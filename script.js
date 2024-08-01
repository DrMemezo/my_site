document.addEventListener('DOMContentLoaded', function() {
    headline = this.getElementById('headline');
    Text_Effect(headline);
});

function Text_Effect(text) {
    prev_text = text.innerHTML;
    
    text.onmouseover = function() {
        this.innerHTML = "have a goof day";
    };
    
    text.onmouseout = function() {
        this.innerHTML = prev_text;
    };
};
