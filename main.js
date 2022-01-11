var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://sdk.bitmoji.com/render/panel/6ac32895-34f7-4c08-89b4-d8e42a8ecd45-766bff49-d2ea-48d7-af5e-bc2323bb2360-v1.png?transparent=1&palette=1", "https://rlp.jumplisting.com/photos/agents/754/75486.jpg" , "https://rlp.jumplisting.com/photos/agents/754/75443.jpg", "https://mail.google.com/mail/u/0?ui=2&ik=64a0da9a85&attid=0.1&permmsgid=msg-f:1721701866276184384&th=17e4b6b9b484e140&view=fimg&disp=thd&attbid=ANGjdJ--RkMDmmJxXjqRcDm6ao3M72h9KkGUIMKarnQHE5ixT5fCh8vXk2ftikKkc5CJKhAfr_suZR7Btue2yMt1qNbVhXeCIc57O3ExqeJBR38zPd1qSX5rt09hOKI&ats=2524608000000&sz=w1920-h901"];
var names = ["Fmaily Book","Me", "Dad", "Mom", "Sister"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
