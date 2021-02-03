let boolzapp = new Vue({
  el: "#boolzapp",
  data:{
contacts: [
    {
    name: 'Michele',
    avatar: '_1',
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
    visible: true,
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
    visible: true,
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
    visible: true,
    messages: [
      {
      date: '04/01/2021 09:11:10',
      text: 'Lo sai che ha aperto una nuova pizzeria?',
      status: 'sent',
      show:false
      },
      {
      date: '04/02/2021 09:12:00',
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
    risposte : {
    saluti : ['ciao','buongiorno','buonasera','buonanotte'],
    dichiarazioni : ['ti amo','ti voglio bene','ti penso spesso'],
    insulti : ['mi fai schifo','pezzo di merda','vaffanculo'],
    frasidablocco: ['Che bello jQuery','La Casa di Carta è la mia serie preferita']},
    newMessage:"",
    answer:"",
    today:"",
    todayfull:"",
    search:"",
    activeIndex:0
}
,methods:{

nowActive:function(index){
this.activeIndex=index;
}
,
contactLastDate:function(index){
  const messages=this.contacts[index].messages;
  const lastIndex=messages.length-1;
  const lastDate=messages[lastIndex].date;
  return lastDate;
},
addMessage:function(){
 let msg=this.newMessage;
 let todayfull=this.todayfull;
let answer=this.anwer;
let risposte=this.risposte;
let categorie = [].concat.apply([],Object.values(risposte));
if (categorie.includes(msg)){
if (risposte.saluti.includes(msg)){
  answer= msg+' a te'
}
if (risposte.insulti.includes(msg)){
  answer= 'Mi sembra un insulto gratuito'
}
if (risposte.dichiarazioni.includes(msg)){
  answer= msg+'anch\'io';
}
if(risposte.frasidablocco.includes(msg)){
    answer= 'Mi vedo costretto a bloccarti.';
}
} else {
  answer='ok';
}

  let item = this.contacts[this.activeIndex];
  if( msg!=''){
item.messages=[...item.messages,{
      date:todayfull,
      text: msg,
      status: 'sent',
      show:false
      }];
      setTimeout(function(){
           item.messages=[...item.messages,{
             text:answer,
             status:'received',
             show:false,
             date:todayfull}]
          },1000);
    }
  this.newMessage='';
},
searchUser:function(){
  let search=this.search;
  this.contacts.forEach((item, i) => {
    if(search!='' && !item.name.toLowerCase().startsWith(search.toLowerCase())){
      item.visible=false; }
      else if(search==''){
        item.visible=true;
      }
  });
},
dropdown(ind){
// se è aperto chiudilo altrimenti ho cliccato per aprire,quindi chiudi gli altri se sono aperti
  let thisContact = this.contacts[this.activeIndex];
  if (thisContact.messages[ind].show==true){
   thisContact.messages[ind].show=false;
}else{
        thisContact.messages.forEach((el, v) => {
           el.show=false;
    });
       thisContact.messages[ind].show=true;
   }
  }
,
removeMessage(ind){
  let thisContact = this.contacts[this.activeIndex];
   thisContact.messages.splice(ind,1);
           thisContact.messages.forEach((el, v) => {
              el.show=false;
       });
      // Vue.delete(contact.messages,ind);
}
,
// funzione aggiuntiva per calcolare tempo
dateTime:function(){
  // console.log((new Date).toLocaleDateString());
  // sarebbe stata più facile da usare ma ha problemi zero e avrei dovuto fare
  // slice di lunghezza diversa se data è 3/10 o 10/10

  this.today=dayjs().format('DD/MM')
  this.todayfull=dayjs().format('DD/MM/YYYY HH:mm')
}
,
nowTime(){
  this.dateTime(dayjs());
},
LastChatTodayCurrent:function(activeIndex){
  if(this.contacts[activeIndex].messages[this.contacts[activeIndex].messages.length-1].date.slice(0,5) == this.today){
         return true }
      else {
        return false;
      }
  },
LastChatTodayOthers:function(index){

  if(this.contacts[index].messages[this.contacts[index].messages.length-1].date.slice(0,5) == this.today){
         return true }
      else {
        return false;
      }
}
}
,
// mounted ha luogo a livello di Virtual Dom,prima che l'utente veda qualcosa.
mounted() {
 this.nowTime();
 setInterval(this.nowTime,1000);
  console.log(dayjs().format('DD/MM/YYYY'));

},

// updated invece viene chiamato ogni volta che c'è un rerender del componente(in vue il dom dipende dai dati quindi in pratica ogni volta che un dato cambia)
updated:function(){
// funzione per dare blur al click su dropdown,ho usato layer in absolute con z-index minore di z-index dropdown e applicato backdrop-filter (che fa il blur di ciò che è sotto il layer non del layer stesso)
const messages=document.getElementsByClassName("messages");
const overlay=document.getElementsByClassName('overlay')[0];
const chat=document.querySelector(".chat")
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

// funzione per intercettare click outside dropdown per chiudere dropdown
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
// https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
  chat.scrollTop = chat.scrollHeight;
  }

});
