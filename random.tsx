useEffect(() => {
  if (screenWidth < 768) {
    setMobile(true);
    div.start({
      opacity: 1,
    });
  } else {
    div.start({
      opacity: 0,
    });
  }
}, [screenWidth]);

function hideElement() {
  controls.start({
    translateY: [0, -100, -100],
    translateX: [-10, -10, 700],
    transition: {
      duration: 1,
    },
  });
  div
    .start({
      translateX: [0, 0, 700],
      transition: {
        duration: 1,
      },
    })
    .finally(() => {
      document.getElementById("mobile-warning").remove();
      document.getElementById("arrow").remove();
    });
}

useEffect(() => {
  if (screenWidth < 768) {
    setMobile(true);
    div
      .start({
        opacity: 1,
      })
      .then(() => {
        // wait 3 seconds and remove the elelemt
        setTimeout(hideElement, 3000);
      });
  } else {
    document.getElementById("mobile-warning").remove();
  }
  console.log(screenWidth);
}, [screenWidth]);

<motion.div
  animate={div}
  className="border-white border p-8 z-10 rounded-md position-fixed "
  id="mobile-warning"
>
  <h3 className="text-xl font-bold">For the full experience view on desktop</h3>
</motion.div>;
