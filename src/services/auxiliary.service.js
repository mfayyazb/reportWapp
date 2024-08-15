const textErrorResult = (arr, dict) => {
  let result = "";
  arr.forEach(
    (element) => (result += `${dict[element] || element} صحیح وارد نشده است \n`)
  );
  return result;
};

const errorHandler = (e) => {
  const dict = {
    status: "وضعیت",
    description: "توضیجات",
    userId: "آیدی کاربر",
    id: "آیدی"
  };
  e = e.toString();
  // console.log(e);
  // if (e.includes("E11000")) {
  //   const arr = e.match(/(?<={ )\w+(?=: )/g);
  //   let result = "";
  //   arr.forEach(
  //     (element) =>
  //       (result += `${dict[element] || element} قبلا وارد شده است \n`)
  //   );
  //   return result;
  if (e.match(/(?<=`)\w+(?=` is required)/g)) {
    const arr = e.match(/(?<=`)\w+(?=` is required)/g);
    return textErrorResult(arr, dict);
  } else if (e.includes("ValidationError")) {
    return e
      .match(
        /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g
      )
      .join(" ");
  } else if(e.includes("Cast to ObjectId")){
    return "آیدی گزارش صحیح وارد نشده"
  }
   else {
    return e.toString();
  }
};

export { errorHandler };
