// Hàm để đóng popup
function closePopup() {
    var popup = document.getElementById('imagePopup');
    popup.style.display = 'none';  // Ẩn popup khi nhấn dấu X
  }
  
  // Hiển thị popup khi trang được tải
  window.addEventListener('load', function () {
    var popup = document.getElementById('imagePopup');
    popup.style.display = 'flex';  // Hiển thị popup
  });
  
