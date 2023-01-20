
$.ajax({
  
  url: "https://valorant-api.com/v1/weapons",
  type: "GET",

  success: function (weapon) {

      const weaponArray = weapon.data;
    
      weaponArray.forEach(weaponObject => {
          getWeaponData(weaponObject)
      });
      

  }

});

const list=document.getElementById("list");
const generalCard = document.querySelector(".general-card");

function getWeaponData(weaponObject) {
      const weaponid = weaponObject.uuid;
      const weaponName = weaponObject.displayName;
      const weaponIcon = weaponObject.displayIcon;   
      
   createWeapon(weaponName,weaponIcon,weaponid);
  }


  function createWeapon(name,icon,id) {

    console.log(name,icon,id);
    console.log(list);
    list.innerHTML+=`
    <div class="col-md-3 col-sm-12 col-xs-12 mt-5 mb-1" style="color:white" id="${id}">

    <div class="card text-center" style="background: linear-gradient(45deg, #cc0000, #0000, #cc0000, #0000); border-radius:25px; ">
      <img style="width:150px;height:70px; " class="mx-auto mt-2" src="${icon}">
        
          <div class="card-body">
          <h3 style=" font-family: monospace; "><span id='name-${id}'>${name}</span></h3> </img>
          <div id="action"> <button onclick="Remove('${id}')" id="delete-${id}" class="btn btn-sm btn-danger"><img src="Trash.png" style="width:20px;"> </button>  
        <button class="btn btn-sm btn-light"   onclick="gizleGoster('${id}')" id="update-${id}"><img src="edit.png" style="width:20px;  " > </button>  
        <button class="btn btn-sm btn-success"  style="display:none;" onclick="update('${id}')" id="save-${id}"><img src="edit.png" style="width:20px;  " > </button>  
        <input class="mt-2 mx-auto " type="text" id="edit-${id}"  style="border-radius:3px; border:0px;display:none; "> </div>
          </div>

        
    </div>
    
    
    
      </div>  `//(`<div style='color:white;'>Abc</div>`)
    


  }

  function Remove(id) {
    let item = document.getElementById(id);
    item.remove();

  }

  function update(id) {
    let element = document.getElementById(`edit-${id}`).value;
    const name=document.getElementById(`name-${id}`)
    name.innerText=`${element}`;
    const upButton =$(`#update-${id}`);
    

   editInputShow(id);
   saveButtonHide(id)
    upButton.show();
  }
  function gizleGoster(id) {
    
    editInputHide(id);
    saveButtonShow(id);
    const updateButton=$(`#update-${id}`)
    updateButton.hide();

  }

function editInputHide(id) {
  const editInput=document.getElementById(`edit-${id}`)
    editInput.removeAttribute("style");
    editInput.setAttribute("style","display:block");
}

function editInputShow(id) {
  const editInput=document.getElementById(`edit-${id}`)
    editInput.removeAttribute("style");
    editInput.setAttribute("style","display:none");
}

function saveButtonHide(id) {
  const saveButton=$(`#save-${id}`);
  saveButton.hide();
}

function saveButtonShow(id) {
  const saveButton=$(`#save-${id}`);
  saveButton.show();
}

function updateButtonShow(id) {
  const updateButton=$(`#update-${id}`);
  updateButton.show();
}

function updateButtonHide(id) {
  const updateButton=$(`#update-${id}`);
  updateButton.hide();
}