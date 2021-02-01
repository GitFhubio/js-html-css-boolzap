let boolzapp = new Vue({
  el: "#boolzapp",
  data:{
contacts: [
    {
    name: 'Stanis La Rochelle',
    avatar: '_1',
    matched:true,
    // michele è visibile se prendo visibile come proprietà che definisce chat aperta...gli altri li setto a false
    visible: true,
    messages: [
      {
      date: '22/01/2020 11:12:55',
      text: 'Tu ti devi trovare una pari grado,una camerierina',
      status: 'received'
      },
      {
      date: '22/01/2020 11:14:00',
      text: 'Non pensi che stai esagerando Stanis?',
      status: 'sent'
      },
      {
     date: '22/01/2020 11:15:22',
     text: 'Io credo che tu sia davvero un bravo ragazzo ma la tua provenienza operaia...',
    status: 'received'
  },
  {date: '22/01/2020 11:15:22',
  text: 'Ma mio padre è ingegnere...',
 status: 'sent'
},
{date: '22/01/2020 11:15:22',
text: 'È ingegnere operaio!',
status: 'received'
 }
    ],
    },
    {
    name: 'Mariano',
    avatar: '_2',
    matched:true,
    visible: false,
    messages: [
      {
      date: '10/01/2020 16:14:55',
      text: 'Tocca a te',
      status: 'received'
      },
      {
      date: '10/01/2020 16:14:00',
      text: 'Fammi essere felice...',
      status: 'sent'
      },
      {
     date: '10/01/2020 16:15:22',
     text: 'Nooo ma che è???Vorrei essere felice??Ma che è?Poi t\'ho detto d\'iniziare sempre con ti prego... ',
    status: 'received'
  },
  {date: '10/01/2020 16:15:22',
  text: 'Ti prego,vero...',
 status: 'sent'
},
{date: '10/01/2020 16:16:22',
text: 'Ma nooo ma è tardi è tardi ormai,sò tre ore che te lo dico.. ',
status: 'received'
},
{date: '10/01/2020 16:16:22',
text: ' Qua siamo in due mi sembra che l\'unico tra noi due che sta facendo uno sforzo per evitare che io ti meni sono sempre io',
status: 'received'
},
{date: '10/01/2020 16:17:22',
text: 'la stessa persona che prima o poi ti menerà...ma lo capisci?',
status: 'received'
 }
  ],
    },
    {
    name: 'Gianfranco',
    avatar: '_9',
    visible: false,
    matched:true,
    messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'Mai e poi mai svilire il ruolo del Parlamanto',
      status: 'received'
      },
      {
      date: '28/03/2020 10:11:10',
      text: 'Ogni cittadino ha dei diritti ma anche dei doveri',
    status: 'received'
      },
      {
      date: '29/01/2020 10:11:22',
      text: 'Francamante',
      status: 'received'
      }
    ],
    },
    {
    name: 'Corinna',
    avatar: '_6',
    visible: false,
    matched:true,
    messages: [
      {
      date: '17/01/2020 15:30:55',
      text: 'È stato il gioie...',
      status: 'received'
    },
    {
    date: '17/01/2020 15:31:55',
    text: 'È stato il gioieie...',
    status: 'received'
  },
  {
  date: '17/01/2020 15:32:55',
  text: 'È stato il gioieie...',
  status: 'received'
},
{
date: '17/01/2020 18:43:55',
text: 'È stato l\'orafo.',
status: 'received'
}
    ],
    },
    {
    name: 'Renè',
    avatar: '_5',
    visible: false,
    matched:true,
    messages: [
      {
      date: '13/01/2020 18:46:55',
      text: '...',
      status: 'sent'
    },
    {
    date: '13/01/2020 18:47:55',
    text: 'Sei entratooo in campoooo testa di cazzoooo!!!',
    status: 'received'
  },
  {
  date: '13/01/2020 18:47:55',
  text: 'sei uno stronzo m\'hai rovinato tutto,sei entratooo in campooo porca puttana',
  status: 'received'
},
{
date: '13/01/2020 18:48:55',
text: 'vai viaa,non ti voglio vedere mai più,capito???',
status: 'received'
},
{
date: '13/01/2020 18:48:55',
text: 'testa di cazzo di merda vaffanculooo',
status: 'received'
}
    ],
    },
  ],
    admin: { name:'Seppia',
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
  this.contacts.forEach((item, i) => {
    console.log(item.messages[item.messages.length-1].date.slice(0,5) == this.today);
  if(item.visible==true && msg!=''){
      item.messages=[...item.messages,{
      date:this.todayfull,
      text: msg,
      status: 'sent'
      }]; }
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
  if(month<10){
  this.today=day+'/0'+month;
} else{
    this.today=day+'/'+month;
}
  console.log(this.today);
  this.todayfull=this.today+'/'+year+' '+(new Date).getHours() +':'+ (new Date).getMinutes();
  console.log(this.todayfull);
},

LastChatToday:function(contact){

    if(contact.messages[contact.messages.length-1].date.slice(0,5) == this.today){
         return true }
      else {
        return false;

      }
  }

},
mounted() {

  this.nowTime();
}
// devo fare che se la data è quella di oggi allora mette l'ora senno deve mettere il giorno


});

// sicuramente cliccando su un contatto della lista dovrà diventare attivo,mi serve una funzione
