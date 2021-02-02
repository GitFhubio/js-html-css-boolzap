let boolzapp = new Vue({
  el: "#boolzapp",
  data:{
contacts: [
    {
    name: 'Michele',
    avatar: '_1',
    // michele è visibile se prendo visibile come proprietà che definisce chat aperta...gli altri li setto a false
    visible: true,
    messages: [
      {
      date: '10/01/2020 15:30:55',
      text: 'Hai portato a spasso il cane?',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      text: 'Ricordati di dargli da mangiare',
      status: 'sent'
      },
      {
     date: '10/01/2020 16:15:22',
     text: 'Tutto fatto!',
    status: 'received'
      }
    ],
    },
    {
    name: 'Fabio',
    avatar: '_2',
    visible: false,
    messages: [
      {
      date: '20/03/2020 16:30:00',
      text: 'Ciao come stai?',
      status: 'sent'
      },
      {
      date: '20/03/2020 16:30:55',
      text: 'Bene grazie! Stasera ci vediamo?',
      status: 'received'
      },
      {
      date: '20/03/2020 16:35:00',
      text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      status: 'sent'
      }
    ],
    },
    {
    name: 'Samuele',
    avatar: '_3',
    visible: false,
    messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
    status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received'
      }
    ],
    },
    {
    name: 'Luisa',
    avatar: '_6',
    visible: false,
    messages: [
      {
      date: '10/01/2020 15:30:55',
      text: 'Lo sai che ha aperto una nuova pizzeria?',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      text: 'Si, ma preferirei andare al cinema',
      status: 'received'
      }
    ],
    },
  ],
    admin: { name:'Marianna',
      avatar:'_io',
      visible:false,
    },
    newMessage:"",
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
    if(item.visible==true && msg!=''){
      item.messages=[...item.messages,{
      date: '10/01/2020 15:30:55',
      text: msg,
      status: 'sent'
      }];
      setTimeout(function(){
           item.messages=[...item.messages,{
             text:'ok',
             status:'received',
             date: '10/01/2020 15:30:56'}]
          },1000);
    }
  });
  this.newMessage='';
}

}
});

// sicuramente cliccando su un contatto della lista dovrà diventare attivo,mi serve una funzione