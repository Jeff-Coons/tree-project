import $ from 'jquery'

function index() {
    if ( window.File && window.FileReader && window.FileList && window.Blob ) {
        let htmlFile;
        let fileContents;

        const reader = new FileReader();

        reader.onload = function(e) {
            fileContents = e.target.result.split(/(<[^>]*>)/);
            console.log('dope', fileContents);

            fileContents.forEach(function(elem, index) {
                let something = '<li>' + elem + '</li>';
                $('.tree-root').append(something);
            })
        };

        $('#title').on('change', function() {
            htmlFile = this.files[0]
            reader.readAsText(htmlFile);
        });


    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

module.exports = index();
