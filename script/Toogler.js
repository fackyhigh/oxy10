const menuToogler = (iconClass,targetClass) => {
    var icon = document.getElementsByClassName(iconClass)[0];
    var menu = document.getElementsByClassName(targetClass)[0];
      icon.addEventListener('click',()=>{
        icon.classList.toggle(`${iconClass}-open`);
        menu.classList.toggle(`${targetClass}-open`);
      })
  };

export default menuToogler;