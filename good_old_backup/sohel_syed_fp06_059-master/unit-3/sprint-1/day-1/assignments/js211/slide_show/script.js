let images = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://plus.unsplash.com/premium_photo-1663047201632-4045f1e2d8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
];

let id;
function start() {
  let index = 0;
  let slideShow = () => {
    let container = document.getElementById("container");

    setInterval(() => {
      if (index === images.length) {
        index = 0;
      }
      container.innerHTML = null;
      let image = document.createElement("img");
      image.src = images[index];
      container.append(image);
      index++;
    }, 2000);
  };
  slideShow();
}

function stop() {
  clearInterval(id);
}
// document.getElementById("next").addEventListener("click", nextlide);

// function nextlide() {
//   index++;
//   container.append(image);
// }
