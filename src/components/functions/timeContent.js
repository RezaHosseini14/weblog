export const timeContent = (title) => {

  let word = title.split(" ").length;
  let time;
  if (word < 130) {
    time = 30;
    return time + " ثانیه";

  } else {
    time = Math.floor(word / 130);
    return time + " دقیقه";

  }
};

