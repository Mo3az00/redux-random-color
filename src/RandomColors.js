// const random = function(data) {
//   return data[Math.floor(Math.random() * data.length)];
// };

// const getRandomColor = function() {
//   const colors = ["red", "blue", "yellow"];

//   return random(colors);
// };

const getRandomColor = function() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export default getRandomColor;
