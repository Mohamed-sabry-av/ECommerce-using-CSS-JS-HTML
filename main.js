document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            document.getElementById('header').classList.add('fade-in');
        })
        .catch(error => console.error('Error loading header content:', error));

        
        fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home').innerHTML = data;
            document.getElementById('home').classList.add('fade-in');
        })
        .catch(error => console.error('Error loading about content:', error));
});

        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
                document.getElementById('footer').classList.add('fade-in');
            })
            .catch(error => console.error('Error loading footer content:', error));
