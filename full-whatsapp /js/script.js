let boolzapp = new Vue({
  el: "#boolzapp",
  data:{
contacts: [
    {
    name: 'Michele',
    avatar: '_1',
    matched:true,
    // michele è visibile se prendo visibile come proprietà che definisce chat aperta...gli altri li setto a false
    visible: true,
    messages: [
      {
      date: '10/01/2020 15:30:55',
      text: 'Hai portato a spasso il cane?',
      status: 'sent',
      show:false
      },
      {
      date: '10/01/2020 15:50:00',
      text: 'Ricordati di dargli da mangiare',
      status: 'sent',
      show:false
      },
      {
     date: '10/01/2020 16:15:22',
     text: 'Tutto fatto!',
    status: 'received',
    show:false
      }
    ],
    },
    {
    name: 'Fabio',
    avatar: '_2',
    matched:true,
    visible: false,
    messages: [
      {
      date: '20/03/2020 16:30:00',
      text: 'Ciao come stai?',
      status: 'sent',
      show:false
      },
      {
      date: '20/03/2020 16:30:55',
      text: 'Bene grazie! Stasera ci vediamo?',
      status: 'received',
      show:false
      },
      {
      date: '20/03/2020 16:35:00',
      text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      status: 'sent',
      show:false
      }
    ],
    },
    {
    name: 'Samuele',
    avatar: '_3',
    matched:true,
    visible: false,
    messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received',
      show:false
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
    status: 'sent',
    show:false
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received',
      show:false
      }
    ],
    },
    {
    name: 'Luisa',
    avatar: '_6',
    matched:true,
    visible: false,
    messages: [
      {
      date: '10/01/2020 15:30:55',
      text: 'Lo sai che ha aperto una nuova pizzeria?',
      status: 'sent',
      show:false
      },
      {
      date: '10/01/2020 15:50:00',
      text: 'Si, ma preferirei andare al cinema',
      status: 'received',
      show:false
      }
    ],
    },
  ],
    admin: { name:'Marianna',
      avatar:'_io',
      visible:false,
    },
    newMessage:"",
    today:"",
    todayfull:"",
    search:""
}
,methods:{
nowActive:function(index){
 this.contacts.forEach((item, i) => {
   if(item.visible==true){
     item.visible=false; }
 });
this.contacts[index].visible=true;
}
,
addMessage:function(){
 let msg=this.newMessage;
 let todayfull=this.todayfull;
  this.contacts.forEach((item, i) => {
  if(item.visible==true && msg!=''){
    // oppure item.messages.push()
      item.messages=[...item.messages,{
      date:todayfull,
      text: msg,
      status: 'sent',
      show:false
      }];
      setTimeout(function(){
           item.messages=[...item.messages,{
             text:'ok',
             status:'received',
             date:todayfull}]
          },1000);
    }
  });
  this.newMessage='';
},
searchUser:function(){
  let search=this.search;
  this.contacts.forEach((item, i) => {
    if(search!='' && !item.name.toLowerCase().includes(search.toLowerCase())){
      item.matched=false; }
      else if(search==''){
        item.matched=true;
      }
  });
},
nowTime:function(){
  let day=(new Date).getDate();
  let month=(new Date).getMonth()+1;
  let year=(new Date).getFullYear();
  let minutes= (new Date).getMinutes();
  if(month<10){
  this.today=day+'/0'+month;
} else{
    this.today=day+'/'+month;
}
if (minutes<10){
minutes= '0'+(new Date).getMinutes();
}
  console.log(this.today);
  this.todayfull=this.today+'/'+year+'  '+(new Date).getHours() +':'+minutes;
  console.log(this.todayfull);
},

LastChatToday:function(contact){

    if(contact.messages[contact.messages.length-1].date.slice(0,5) == this.today){
         return true }
      else {
        return false;

      }
  },
  removeMessage(contact,ind){
     contact.messages.splice(ind,1);
        // Vue.delete(contact.messages,ind);
  }
  ,
  dropdown(contact,ind){
// se è aperto chiudilo altrimenti ho cliccato per aprire,quindi chiudi gli altri se sono aperti
    if (contact.messages[ind].show==true){
     contact.messages[ind].show=false;
  }else{
  this.contacts.forEach((item, i) => {
          item.messages.forEach((el, v) => {
             el.show=false;
      });
      });
         contact.messages[ind].show=true;
     }
    }
},
mounted() {

  this.nowTime();
},

updated:function(){
const messages=document.getElementsByClassName("messages");
const overlay=document.getElementsByClassName('overlay')[0];
const dropdownContainer=document.getElementsByClassName('dropdown-container');
function blur(){
  if (overlay.className.includes('blur')){
      overlay.classList.remove('blur');}
  }
 for (let v = 0; v < messages.length; v++) {
  messages[v].addEventListener('click',function(){
    if (!overlay.className.includes('blur')){
     overlay.classList.add('blur')}
   if (messages.length==0){
     blur();
   }
 })}
  document.body.addEventListener('click',function(event){
        if(event.target.className.includes('remove')){
       blur();
  }
  })

// funzione per intercettare click per chiudere dropdown outside dropdown
  let contacts= this.contacts;
  document.body.addEventListener('click',function(){
           for (let x = 0; x < dropdownContainer.length; x++) {
             if(!event.target.className.includes('bubble-content') && !event.target.className.includes('into-bubble')){
            blur();
             if(dropdownContainer[x].className.includes('show')){
               contacts.forEach((item, i) => {
                       item.messages.forEach((el, v) => {
                          el.show=false;
                   });
                   });
           }
          }

      }
  })

  }

});
