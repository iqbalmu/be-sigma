function previewImage() {
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('images');
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        preview.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview" class="img-fluid" style="object-fit: contain;height: 250px; width: 100%;">';
      };

      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = '';
    }
  }