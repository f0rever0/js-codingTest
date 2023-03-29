const solution = (files) => {
  return files.sort((a, b) => {
    const headA = a.match(/^\D+/)[0].toLowerCase();
    const headB = b.match(/^\D+/)[0].toLowerCase();

    if (headA < headB) {
      return -1;
    } else if (headA > headB) {
      return 1;
    } else {
      // Head 가 동일할때
      const numberA = a.match(/\d{1,5}/) + "";
      const numberB = b.match(/\d{1,5}/) + "";

      return numberA - numberB;
    }
  });
};
