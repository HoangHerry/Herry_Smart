

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slideItems = document.querySelectorAll('.Slide_item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  slideItems[currentIndex].classList.remove('active'); // Ẩn item hiện tại
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  slideItems[currentIndex].classList.add('active'); // Hiển thị item mới
});

nextButton.addEventListener('click', () => {
  slideItems[currentIndex].classList.remove('active'); // Ẩn item hiện tại
  currentIndex = (currentIndex + 1) % slideItems.length;
  slideItems[currentIndex].classList.add('active'); // Hiển thị item mới
});

// Hiển thị slide ban đầu
slideItems[currentIndex].classList.add('active');


/*Showservice*/

const btnShowservice = document.getElementById('btn_showmore_info');
const showService = document.querySelectorAll('.header_infor');

btnShowservice.addEventListener('click', () => {
    if (showService[0].classList.contains('temp')) {
        // Nếu class "temp" đã tồn tại, loại bỏ nó
        showService[0].classList.remove('temp');
    } else {
        // Nếu class "temp" chưa tồn tại, thêm nó vào
        showService[0].classList.add('temp');
    }
});

// Thêm sự kiện click cho toàn bộ trang
document.addEventListener('click', (event) => {
    if (event.target !== btnShowservice && !showService[0].contains(event.target)) {
        // Nếu click bên ngoài btnShowservice và header_infor, loại bỏ class "temp"
        showService[0].classList.remove('temp');
    }
});















