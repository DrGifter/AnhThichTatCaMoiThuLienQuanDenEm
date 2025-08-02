const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "Mái tóc của em",
" Cái tên của em",
" Sở thích của em",
" Giọng nói của em",
" Bàn Tay của em",
" Cái ôm của em",
" Cách nói chuyện của em",
" Tính cách của em",
" Sự hoàn hảo của em",
" Niềm vui của em",
" Những nỗi buồn của em",
" Sự kiện thứ yếu của em",
" Thông điệp của em",
" Tình yêu của em dành cho anh",
" Việc em chia sẻ với anh",
" Những video tik tok em gửi",
" Cách anh làm em hạnh phúc",
" Mùi hương tóc của em",
" Những lần đùa vui của mình",
" Cách em nói chuyện không chán",
" Em luôn làm anh an tâm",
" Em luôn trong tâm trí anh",
" Em không để anh chờ",
" Em không làm anh thất vọng",
" Em đáng tin cậy",
" Em rất độc lập",
" Cách em ủng hộ anh",
" Cách em lăng nghe anh",
" Cách em an ủi anh",
" Sự xuất hiện của em",
" Em luôn bên anh lúc khó khăn",
" Sức mạnh của em",
" Niềm đam mê của em",
" Những giấc mơ về em" ,
" Cách em xuất hiện",
" Tính điện tử của em",
" Lòng bao dung của em",
" Vì em yêu anh",
" Niềm tin của em dành cho anh",
" Cách em hài hước",
" Định nghĩa của em",
" Em chờ anh",
" Cách em trả lời tin nhắn",
" Cách em giải quyết vấn đề cùng anh",
" Nụ cười của em",
" Ánh mắt yêu thương của em",
" Cách em động viên anh",
" Cách em nắm tay anh",
" Tính hiểu biết của em",
" Cách anh chăm sóc em khi ốm",
" Những bữa ăn em nấu",
" Cách em đặt gia đình lên đầu",
" Cách em khiến anh đặc biệt",
" Em làm anh muốn tốt hơn",
" Sự tận tâm của em",
" Cách em làm anh thấy chấp nhận",
" Cách em suy anh cười",
" Sự quan tâm của em",
" Em luôn bên anh khi khó khăn",
" Tình yêu em dành cho anh",
" Cách em giải quyết tình trạng bất ổn",
" Cách em làm anh quan tâm hơn",
" Những kỷ niệm của chúng ta",
" Cách em làm anh tự tin",
" Cách em rung động anh",
" Cách em tôn trọng anh",
" Sự chủ động của em",
" Cách em hỗ trợ anh",
" Tình yêu em dành cho gia đình anh",
" Cảm giác an toàn bên em",
" Sự sáng tạo của em",
" Cách em kích thích anh",
" Tình yêu em dành cho bạn bè anh",
" Cách em làm anh thấy hiểu",
" Sự trung thực của em",
" Cách em thấy anh tin tưởng",
" Tình yêu em dành cho công việc của anh",
" Kiên trì của em trong mọi công việc",
" Em luôn yêu thương anh mỗi ngày",
" Tình yêu em dành cho những điều nhỏ bé",
" Cách em làm anh cảm thấy trân trọng",
" Cảm giác nhạy cảm của em",
" Cách em hiểu anh không lời",
" Tình yêu em dành cho cuộc sống",
" Cách em làm anh hạnh phúc",
" Sự tự lập của em",
" Cách em làm anh thấy tôn vinh",
" Những kỷ niệm đẹp của chúng ta",
" Sự an toàn khi bên em",
" Sự khéo léo của em",
" Cách em hỗ trợ anh",
" Tình yêu em dành cho điều mới mẻ",
" Cách em làm anh tự hào",
" Sự chân thành của em",
" Cách em thương anh vô điều kiện",
" Quyết định của em",
" Cách hỗ trợ công việc quan trọng",
" Cách em dành tình yêu cho thiên nhiên",
" Cảm giác an toàn khi bên em",
" Sự sáng tạo để giải quyết vấn đề",
" Tình yêu em dành cho vật",
" Hiểu được niềm đam mê của anh",
" Sự trung thực trong cảm xúc của em",
" Cách em làm anh tin tưởng trong tình yêu",
" Tình yêu em dành cho ẩm thực",
" Cách em giúp anh vượt qua sức mạnh",
" Sự thực hiện của em với mục tiêu",
" Cách em yêu thương anh mỗi ngày",
" Tình yêu em dành cho những điều giản dị",
" Cách em vòng trọng mọi điều",
" Sự nhạy cảm của em với cảm xúc của người khác",
" Cách em không để anh cảm thấy cô đơn",
" Em yêu cuộc sống và truyền tải năng lượng",
" Cách em làm ngày của anh đặc biệt",
" Sự quan tâm em dành cho những chi tiết nhỏ",
" Tình yêu em dành cho cuộc sống mới",
" Cách em làm mỗi ngày của anh trở nên đặc biệt",
" Tình yêu em dành cho đam mê của anh và tất cả mọi thứ xung quanh"
];

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const directions = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}
